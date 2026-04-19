// ============================================================
// /api/audit — Endpoint pour générer un audit Google Business
// ============================================================
// Flow :
//  1. Validation du payload
//  2. Google Places Text Search → trouve le place_id
//  3. Google Places Details → récupère infos + avis
//  4. Calcule le taux de réponse (% des avis avec réponse)
//  5. Claude API → génère 3 recommandations personnalisées
//  6. Stocke le lead dans Supabase
//  7. Envoie notification email à Sébastien via Resend
//  8. Retourne les données au frontend
//
// Variables d'environnement requises (Vercel) :
//   GOOGLE_PLACES_API_KEY       → clé API Google Cloud (Places API New)
//   ANTHROPIC_API_KEY           → clé API Claude
//   SUPABASE_URL                → URL du projet Supabase
//   SUPABASE_SERVICE_ROLE_KEY   → service role key (backend only)
//   RESEND_API_KEY              → clé Resend
//   NOTIFY_EMAIL                → ton email pour recevoir les leads
// ============================================================

const GOOGLE_KEY = process.env.GOOGLE_PLACES_API_KEY
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const RESEND_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'contact@esmy.ai'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    // ─────────────────────────────────────────────────────────
    // 1. Validation
    // ─────────────────────────────────────────────────────────
    const { business_name, business_city, contact_email, contact_phone, consent_recontact } = req.body || {}

    if (!business_name || !business_city || !contact_email) {
      return res.status(400).json({ ok: false, error: 'Champs obligatoires manquants.' })
    }
    if (!contact_email.includes('@') || contact_email.length < 5) {
      return res.status(400).json({ ok: false, error: 'Email invalide.' })
    }
    if (!consent_recontact) {
      return res.status(400).json({ ok: false, error: 'Consentement requis.' })
    }

    // Rate limiting simple : refuser plus de 3 audits par email par jour
    // (optionnel, protège contre abus)

    // ─────────────────────────────────────────────────────────
    // 2. Google Places : Text Search pour trouver le place_id
    // ─────────────────────────────────────────────────────────
    const query = `${business_name.trim()} ${business_city.trim()}`

    const searchRes = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress'
      },
      body: JSON.stringify({
        textQuery: query,
        languageCode: 'fr',
        regionCode: 'fr',
        maxResultCount: 1
      })
    })

    if (!searchRes.ok) {
      const errText = await searchRes.text()
      console.error('Google Places search failed:', errText)
      return res.status(502).json({ ok: false, error: "Impossible d'accéder à Google Places. Réessayez." })
    }

    const searchData = await searchRes.json()
    const place = searchData.places?.[0]

    if (!place || !place.id) {
      return res.status(404).json({
        ok: false,
        error: `Aucun résultat trouvé pour "${business_name}" à ${business_city}. Vérifiez l'orthographe ou précisez votre ville.`
      })
    }

    const placeId = place.id

    // ─────────────────────────────────────────────────────────
    // 3. Google Places : Details (avec les avis)
    // ─────────────────────────────────────────────────────────
    const fieldMask = [
      'id',
      'displayName',
      'formattedAddress',
      'nationalPhoneNumber',
      'websiteUri',
      'rating',
      'userRatingCount',
      'reviews',
      'regularOpeningHours',
      'googleMapsUri'
    ].join(',')

    const detailsRes = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`, {
      headers: {
        'X-Goog-Api-Key': GOOGLE_KEY,
        'X-Goog-FieldMask': fieldMask
      }
    })

    if (!detailsRes.ok) {
      const errText = await detailsRes.text()
      console.error('Google Places details failed:', errText)
      return res.status(502).json({ ok: false, error: 'Impossible de récupérer les détails. Réessayez.' })
    }

    const details = await detailsRes.json()

    // ─────────────────────────────────────────────────────────
    // 4. Calcul du taux de réponse
    // ─────────────────────────────────────────────────────────
    const reviews = details.reviews || []
    const reviewsSample = reviews.slice(0, 5).map(r => ({
      rating: r.rating,
      text: r.text?.text || '',
      author: r.authorAttribution?.displayName || 'Anonyme',
      publish_time: r.publishTime,
      // Google Places Details n'expose PAS les réponses du propriétaire via l'API publique.
      // On passera par l'analyse du contenu/fréquence pour estimer l'engagement.
      has_owner_response: null
    }))

    // Sans accès API aux réponses du propriétaire via Places API,
    // on va estimer l'engagement via un signal proxy : la fraîcheur des avis
    // et leur diversité. On laissera response_rate = null si pas calculable proprement.
    // NOTE: La vraie valeur viendra de l'API Business Profile, une fois approuvée.
    const responseRate = null

    // ─────────────────────────────────────────────────────────
    // 5. Claude API : génère 3 recommandations
    // ─────────────────────────────────────────────────────────
    const prompt = buildPrompt({
      businessName: details.displayName?.text || business_name,
      address: details.formattedAddress || '',
      rating: details.rating || null,
      reviewsCount: details.userRatingCount || 0,
      website: details.websiteUri || null,
      reviewsSample
    })

    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    if (!claudeRes.ok) {
      const errText = await claudeRes.text()
      console.error('Claude API failed:', errText)
      return res.status(502).json({ ok: false, error: 'Erreur de génération. Réessayez.' })
    }

    const claudeData = await claudeRes.json()
    const claudeText = claudeData.content?.[0]?.text || ''

    let recommendations = []
    try {
      // Claude renvoie du JSON entre balises ou direct
      const jsonMatch = claudeText.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        recommendations = JSON.parse(jsonMatch[0])
      }
    } catch (e) {
      console.error('Failed to parse Claude response:', claudeText)
    }

    // Fallback recommandations génériques si Claude a échoué
    if (!recommendations || recommendations.length === 0) {
      recommendations = [
        {
          title: "Répondez systématiquement aux avis",
          description: "Un taux de réponse élevé améliore votre visibilité dans Google Maps et rassure les futurs clients. Visez 100% de réponse en moins de 48h.",
          impact: "+15-20% de clics sur votre fiche"
        },
        {
          title: "Collectez plus d'avis mensuellement",
          description: "Google privilégie les fiches actives. Mettez en place un système pour demander naturellement un avis à chaque client satisfait.",
          impact: "+0.3 étoile en moyenne sur 3 mois"
        },
        {
          title: "Complétez votre fiche à 100%",
          description: "Photos, horaires, attributs, menu/services : chaque champ rempli augmente votre score Google Business. Ajoutez au moins 10 photos récentes.",
          impact: "+42% de vues selon Google"
        }
      ]
    }

    // ─────────────────────────────────────────────────────────
    // 6. Stockage Supabase
    // ─────────────────────────────────────────────────────────
    const leadPayload = {
      business_name: business_name.trim(),
      business_city: business_city.trim(),
      contact_email: contact_email.trim().toLowerCase(),
      contact_phone: contact_phone?.trim() || null,
      consent_recontact: true,
      place_id: placeId,
      place_name: details.displayName?.text || null,
      place_address: details.formattedAddress || null,
      place_rating: details.rating || null,
      place_reviews_count: details.userRatingCount || 0,
      place_website: details.websiteUri || null,
      place_phone: details.nationalPhoneNumber || null,
      response_rate: responseRate,
      reviews_sample: reviewsSample,
      recommendations,
      ip_address: req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress || null,
      user_agent: req.headers['user-agent'] || null,
      audit_status: 'completed'
    }

    // Fire-and-forget : on ne bloque pas la réponse si Supabase fail
    const savePromise = fetch(`${SUPABASE_URL}/rest/v1/audit_leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(leadPayload)
    }).catch(err => console.error('Supabase save failed:', err))

    // ─────────────────────────────────────────────────────────
    // 7. Notification email à Sébastien
    // ─────────────────────────────────────────────────────────
    const notifyPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_KEY}`
      },
      body: JSON.stringify({
        from: 'Esmy Audit <audit@esmy.ai>',
        to: [NOTIFY_EMAIL],
        subject: `🎯 Nouveau lead : ${business_name} (${business_city})`,
        html: buildNotificationEmail({ form: req.body, details, recommendations, placeId })
      })
    }).catch(err => console.error('Notification email failed:', err))

    // Attendre les 2 en parallèle mais max 3 secondes
    await Promise.race([
      Promise.all([savePromise, notifyPromise]),
      new Promise(resolve => setTimeout(resolve, 3000))
    ])

    // ─────────────────────────────────────────────────────────
    // 8. Réponse au frontend
    // ─────────────────────────────────────────────────────────
    return res.status(200).json({
      ok: true,
      place: {
        name: details.displayName?.text || business_name,
        address: details.formattedAddress || '',
        website: details.websiteUri || null,
        phone: details.nationalPhoneNumber || null,
        google_maps_url: details.googleMapsUri || null
      },
      metrics: {
        rating: details.rating || null,
        reviews_count: details.userRatingCount || 0,
        response_rate: responseRate
      },
      recommendations,
      reviews_sample: reviewsSample
    })
  } catch (err) {
    console.error('Audit endpoint error:', err)
    return res.status(500).json({ ok: false, error: 'Erreur serveur. Réessayez dans un instant.' })
  }
}

// ============================================================
// Helpers
// ============================================================

function buildPrompt({ businessName, address, rating, reviewsCount, website, reviewsSample }) {
  const reviewsText = reviewsSample.length > 0
    ? reviewsSample.map((r, i) => `[Avis ${i + 1}] ${r.rating}★ — "${(r.text || '(sans texte)').substring(0, 200)}"`).join('\n')
    : '(Aucun avis récent disponible)'

  return `Tu es un consultant expert en présence Google Business Profile pour les commerçants français.

CONTEXTE DU COMMERCE :
- Nom : ${businessName}
- Adresse : ${address}
- Note Google : ${rating || 'Non disponible'}/5
- Nombre d'avis : ${reviewsCount}
- Site web : ${website || 'Aucun'}

ÉCHANTILLON DES 5 DERNIERS AVIS :
${reviewsText}

TA MISSION :
Génère EXACTEMENT 3 recommandations concrètes, personnalisées et actionnables pour ce commerce.
Chaque recommandation doit s'appuyer sur les données réelles ci-dessus — ne sois pas générique.

RÈGLES :
- Format : JSON array de 3 objets uniquement, rien d'autre autour
- Chaque objet contient : { "title": string (max 60 chars), "description": string (2-3 phrases, 150-250 chars), "impact": string (métrique concrète, max 50 chars) }
- Ton : professionnel mais bienveillant, tutoiement PROSCRIT (vouvoiement)
- Priorité : répondre aux problèmes visibles dans les données (note faible, peu d'avis, avis négatifs non adressés, etc.)
- IMPORTANT : ne jamais proposer de "demander des avis en échange de remises" — c'est interdit par Google
- Tu peux mentionner Esmy subtilement dans l'impact ou description si pertinent, mais sans forcer

FORMAT DE SORTIE (JSON pur, rien d'autre) :
[
  {"title":"...","description":"...","impact":"..."},
  {"title":"...","description":"...","impact":"..."},
  {"title":"...","description":"...","impact":"..."}
]`
}

function buildNotificationEmail({ form, details, recommendations, placeId }) {
  const rating = details.rating ? details.rating.toFixed(1) : '—'
  const reviewsCount = details.userRatingCount || 0
  const isPriority = details.rating && details.rating < 4.0

  return `
  <div style="font-family:-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#FAFAF6;color:#0F172A">
    <div style="background:white;border-radius:16px;padding:32px;border:1px solid #E8E8E2">
      <div style="font-size:12px;color:#F97316;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px">
        ${isPriority ? '🔥 LEAD PRIORITAIRE' : '🎯 Nouveau lead'}
      </div>
      <h1 style="font-size:24px;margin:0 0 6px;color:#0F172A">${form.business_name}</h1>
      <p style="color:#5A5F6E;font-size:14px;margin:0 0 24px">${details.formattedAddress || form.business_city}</p>

      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:20px 0">
        <div style="padding:14px;background:#FAFAF6;border-radius:10px;text-align:center">
          <div style="font-size:11px;color:#5A5F6E;text-transform:uppercase;font-weight:700;margin-bottom:4px">Note</div>
          <div style="font-size:22px;font-weight:700">${rating} ★</div>
        </div>
        <div style="padding:14px;background:#FAFAF6;border-radius:10px;text-align:center">
          <div style="font-size:11px;color:#5A5F6E;text-transform:uppercase;font-weight:700;margin-bottom:4px">Avis</div>
          <div style="font-size:22px;font-weight:700">${reviewsCount}</div>
        </div>
        <div style="padding:14px;background:#FAFAF6;border-radius:10px;text-align:center">
          <div style="font-size:11px;color:#5A5F6E;text-transform:uppercase;font-weight:700;margin-bottom:4px">Site</div>
          <div style="font-size:22px;font-weight:700">${details.websiteUri ? '✓' : '—'}</div>
        </div>
      </div>

      <div style="border-top:1px solid #E8E8E2;padding-top:20px;margin-top:20px">
        <div style="font-size:13px;font-weight:700;color:#0F172A;margin-bottom:10px">Contact</div>
        <div style="font-size:14px;color:#0F172A;margin-bottom:4px">📧 <a href="mailto:${form.contact_email}" style="color:#F97316">${form.contact_email}</a></div>
        ${form.contact_phone ? `<div style="font-size:14px;color:#0F172A;margin-bottom:4px">📞 <a href="tel:${form.contact_phone}" style="color:#F97316">${form.contact_phone}</a></div>` : ''}
      </div>

      <div style="border-top:1px solid #E8E8E2;padding-top:20px;margin-top:20px">
        <div style="font-size:13px;font-weight:700;color:#0F172A;margin-bottom:10px">Liens rapides</div>
        <div style="font-size:14px;margin-bottom:6px">🗺️ <a href="${details.googleMapsUri || '#'}" style="color:#F97316">Voir sur Google Maps</a></div>
        ${details.websiteUri ? `<div style="font-size:14px;margin-bottom:6px">🌐 <a href="${details.websiteUri}" style="color:#F97316">Site web du commerce</a></div>` : ''}
      </div>

      <div style="background:#0F172A;color:white;padding:20px;border-radius:12px;margin-top:24px">
        <div style="font-size:13px;font-weight:700;margin-bottom:10px;color:#F97316">💡 Recommandations générées</div>
        ${recommendations.map((r, i) => `
          <div style="margin-bottom:12px;padding-bottom:12px;${i < recommendations.length - 1 ? 'border-bottom:1px solid rgba(255,255,255,.1)' : ''}">
            <div style="font-size:14px;font-weight:700;margin-bottom:4px">${i + 1}. ${r.title}</div>
            <div style="font-size:13px;color:rgba(255,255,255,.7);line-height:1.5">${r.description}</div>
          </div>
        `).join('')}
      </div>

      <div style="text-align:center;margin-top:28px;font-size:12px;color:#9B9B8E">
        Lead reçu le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  </div>
  `
}
