import Head from 'next/head'
import { useState } from 'react'

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --slate:#0F172A;--slate2:#1F2937;--slate3:#374151;
  --orange:#F97316;--orange-d:#EA6C0A;--amber:#F59E0B;
  --cream:#FAFAF6;--cream2:#F4F2EC;--white:#FFFFFF;
  --g100:#F4F4F1;--g200:#E8E8E2;--g300:#D4D4CE;--g400:#9B9B8E;
  --g500:#7A7A70;--g600:#5A5A50;
  --text:#0F172A;--textsub:#5A5F6E;
  --green:#16A34A;--green-bg:#DCFCE7;
  --red:#DC2626;--red-bg:#FEE2E2;
  --yellow:#CA8A04;--yellow-bg:#FEF9C3;
  --r:14px;--rlg:22px;
}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--cream);color:var(--text);line-height:1.55;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.container{max-width:1100px;margin:0 auto;padding:0 28px}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,250,246,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(15,23,42,.05)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px;max-width:1100px;margin:0 auto;padding:0 28px}
.logo{display:flex;align-items:center;color:var(--slate);text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.04em;font-family:'Bricolage Grotesque',sans-serif}
.logo-dot{color:var(--orange);margin-left:-2px;letter-spacing:-.5px}
.nav-links{display:flex;align-items:center;gap:36px}
.nav-links a{color:var(--textsub);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-links a:hover{color:var(--slate)}
.nav-cta{display:flex;align-items:center;gap:16px}
.btn-cta{display:inline-flex;align-items:center;gap:8px;background:var(--slate);color:white;border:none;padding:11px 22px;border-radius:100px;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-cta:hover{background:var(--orange)}

/* HERO */
.hero{padding:140px 0 60px;text-align:center}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(249,115,22,.08);color:var(--orange);padding:7px 16px;border-radius:100px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:28px;border:1px solid rgba(249,115,22,.2)}
.hero-eyebrow::before{content:'';width:6px;height:6px;background:var(--orange);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
.hero-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(36px,5.5vw,64px);font-weight:700;line-height:1.04;letter-spacing:-.03em;color:var(--slate);margin-bottom:22px;max-width:820px;margin-left:auto;margin-right:auto}
.hero-title em{font-style:italic;color:var(--orange);font-family:'Bricolage Grotesque',serif}
.hero-sub{font-size:17px;color:var(--textsub);line-height:1.65;max-width:620px;margin:0 auto 40px}
.hero-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-bottom:44px}
.hero-badge{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--textsub);background:white;padding:8px 14px;border-radius:100px;border:1px solid rgba(15,23,42,.08)}
.hero-badge-ico{color:var(--green);font-weight:700}

/* FORM */
.form-wrap{max-width:540px;margin:0 auto 80px;padding:0 20px}
.form-card{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:40px 36px;box-shadow:0 4px 40px rgba(15,23,42,.04)}
.form-title{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:700;color:var(--slate);margin-bottom:8px;letter-spacing:-.01em}
.form-sub{font-size:14px;color:var(--textsub);margin-bottom:28px;line-height:1.55}
.field{margin-bottom:14px}
.field label{display:block;font-size:11px;font-weight:700;color:var(--textsub);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px}
.field input{width:100%;padding:13px 16px;border:1px solid rgba(15,23,42,.12);border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;color:var(--slate);outline:none;transition:all .15s;background:var(--cream)}
.field input:focus{border-color:var(--orange);background:white;box-shadow:0 0 0 3px rgba(249,115,22,.1)}
.field input::placeholder{color:var(--g400)}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}
.consent-row{display:flex;align-items:flex-start;gap:10px;margin:18px 0 22px;padding:14px;background:var(--cream2);border-radius:12px;cursor:pointer}
.consent-row input{margin-top:3px;flex-shrink:0;accent-color:var(--orange);cursor:pointer}
.consent-row label{font-size:13px;color:var(--textsub);line-height:1.55;cursor:pointer;margin:0}
.consent-row label strong{color:var(--slate)}
.form-error{display:none;background:var(--red-bg);color:var(--red);padding:10px 14px;border-radius:10px;font-size:13px;margin-bottom:14px;border:1px solid rgba(220,38,38,.15)}
.form-error.show{display:block}
.btn-submit{width:100%;padding:15px;background:var(--slate);color:white;border:none;border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:15px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px}
.btn-submit:hover:not(:disabled){background:var(--orange);transform:translateY(-1px)}
.btn-submit:disabled{opacity:.6;cursor:not-allowed}
.form-note{text-align:center;font-size:12px;color:var(--g500);margin-top:16px}
.form-note strong{color:var(--textsub)}

/* LOADING */
.loading{display:none;flex-direction:column;align-items:center;justify-content:center;padding:80px 20px;max-width:540px;margin:0 auto 80px}
.loading.show{display:flex}
.loading-spinner{width:48px;height:48px;border:3px solid var(--g200);border-top-color:var(--orange);border-radius:50%;animation:spin 1s linear infinite;margin-bottom:28px}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-title{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:700;color:var(--slate);margin-bottom:10px}
.loading-step{font-size:14px;color:var(--textsub);margin-bottom:4px;opacity:.5;transition:opacity .3s}
.loading-step.active{opacity:1;color:var(--orange);font-weight:600}

/* RESULTS */
.results{display:none;max-width:840px;margin:0 auto 80px;padding:0 20px}
.results.show{display:block}
.results-header{text-align:center;margin-bottom:36px}
.results-badge{display:inline-flex;align-items:center;gap:8px;background:var(--green-bg);color:var(--green);padding:8px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:20px}
.results-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,4vw,40px);font-weight:700;color:var(--slate);letter-spacing:-.02em;line-height:1.2;margin-bottom:10px}
.results-title em{font-style:italic;color:var(--orange)}
.results-sub{font-size:15px;color:var(--textsub);max-width:520px;margin:0 auto}

.result-card{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:32px 36px;margin-bottom:20px}
.result-card-header{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:6px;flex-wrap:wrap}
.result-biz-name{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:700;color:var(--slate);letter-spacing:-.01em;margin-bottom:4px}
.result-biz-address{font-size:13px;color:var(--textsub);margin-bottom:10px}
.result-biz-link{font-size:12px;color:var(--orange);text-decoration:none;display:inline-flex;align-items:center;gap:4px}
.result-biz-link:hover{text-decoration:underline}

.metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}
@media(max-width:640px){.metrics-grid{grid-template-columns:1fr;gap:12px}}
.metric{padding:20px;background:var(--cream);border-radius:14px;border:1px solid rgba(15,23,42,.05)}
.metric-label{font-size:11px;font-weight:700;color:var(--textsub);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
.metric-value{font-family:'Bricolage Grotesque',sans-serif;font-size:30px;font-weight:700;color:var(--slate);line-height:1;margin-bottom:8px;letter-spacing:-.02em}
.metric-stars{color:var(--amber);font-size:14px;letter-spacing:2px;margin-left:4px}
.metric-verdict{font-size:12px;font-weight:600;padding:3px 10px;border-radius:100px;display:inline-block}
.metric-verdict.good{background:var(--green-bg);color:var(--green)}
.metric-verdict.medium{background:var(--yellow-bg);color:var(--yellow)}
.metric-verdict.bad{background:var(--red-bg);color:var(--red)}

.reco-card{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:32px 36px;margin-bottom:20px}
.reco-title{font-family:'Bricolage Grotesque',sans-serif;font-size:20px;font-weight:700;color:var(--slate);letter-spacing:-.01em;margin-bottom:6px;display:flex;align-items:center;gap:10px}
.reco-title::before{content:'✦';color:var(--orange)}
.reco-sub{font-size:14px;color:var(--textsub);margin-bottom:24px}
.reco-item{padding:20px;background:var(--cream);border-radius:14px;margin-bottom:12px;border-left:3px solid var(--orange)}
.reco-item-header{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.reco-item-num{font-family:'Bricolage Grotesque',sans-serif;font-size:14px;font-weight:700;color:var(--orange);letter-spacing:.05em}
.reco-item-title{font-family:'Bricolage Grotesque',sans-serif;font-size:16px;font-weight:700;color:var(--slate);letter-spacing:-.005em}
.reco-item-desc{font-size:14px;color:var(--textsub);line-height:1.65;margin-bottom:10px}
.reco-item-impact{font-size:12px;color:var(--orange);font-weight:600;display:inline-flex;align-items:center;gap:4px}

.cta-box{background:linear-gradient(135deg,var(--slate) 0%,var(--slate2) 100%);border-radius:var(--rlg);padding:40px 36px;color:white;text-align:center;margin-bottom:20px;position:relative;overflow:hidden}
.cta-box::before{content:'';position:absolute;top:-50%;right:-20%;width:300px;height:300px;background:radial-gradient(circle,rgba(249,115,22,.3) 0%,transparent 70%);border-radius:50%}
.cta-box-content{position:relative;z-index:1}
.cta-box-eyebrow{display:inline-block;font-size:11px;font-weight:700;color:var(--orange);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
.cta-box-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(22px,3.5vw,30px);font-weight:700;letter-spacing:-.02em;line-height:1.2;margin-bottom:12px}
.cta-box-title em{font-style:italic;color:var(--orange)}
.cta-box-sub{font-size:14px;color:rgba(255,255,255,.75);line-height:1.6;margin-bottom:24px;max-width:480px;margin-left:auto;margin-right:auto}
.btn-cta-big{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:white;border:none;padding:14px 28px;border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;text-decoration:none;transition:all .2s}
.btn-cta-big:hover{background:var(--orange-d);transform:translateY(-1px)}

.result-footer{text-align:center;padding-top:20px}
.result-footer-note{font-size:13px;color:var(--g500);margin-top:8px}

/* FOOTER */
footer{padding:50px 0 32px;border-top:1px solid rgba(15,23,42,.06);background:var(--cream2);position:relative;z-index:2}
.footer-inner{display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:0 auto;padding:0 28px;flex-wrap:wrap;gap:16px}
.footer-copy{font-size:12px;color:var(--g500)}
.footer-links{display:flex;gap:20px}
.footer-links a{font-size:12px;color:var(--g500);text-decoration:none}
.footer-links a:hover{color:var(--slate)}

@media(max-width:768px){
  .nav-links{display:none}
  .hero{padding:100px 0 40px}
  .field-row{grid-template-columns:1fr}
  .form-card,.result-card,.reco-card,.cta-box{padding:28px 24px}
}
`

export default function AuditPage() {
  const [stage, setStage] = useState('form') // form | loading | results
  const [loadingStep, setLoadingStep] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const [result, setResult] = useState(null)

  const [form, setForm] = useState({
    business_name: '',
    business_city: '',
    contact_email: '',
    contact_phone: '',
    consent_recontact: false
  })

  const updateField = (key, value) => setForm(f => ({ ...f, [key]: value }))

  const handleSubmit = async () => {
    setErrorMsg('')

    // Validation
    if (!form.business_name.trim()) return setErrorMsg('Veuillez entrer le nom de votre commerce.')
    if (!form.business_city.trim()) return setErrorMsg('Veuillez entrer votre ville.')
    if (!form.contact_email.trim() || !form.contact_email.includes('@')) return setErrorMsg('Veuillez entrer un email valide.')
    if (!form.consent_recontact) return setErrorMsg('Merci de cocher la case de consentement.')

    setStage('loading')
    setLoadingStep(0)

    // Animation progress during API call
    const stepTimer = setInterval(() => {
      setLoadingStep(s => (s < 2 ? s + 1 : s))
    }, 4000)

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      clearInterval(stepTimer)

      const data = await res.json()
      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || 'Une erreur est survenue. Réessayez dans un instant.')
        setStage('form')
        return
      }

      setResult(data)
      setStage('results')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      clearInterval(stepTimer)
      setErrorMsg('Erreur réseau. Réessayez dans un instant.')
      setStage('form')
    }
  }

  const getVerdict = (key, value) => {
    if (key === 'rating') {
      if (value >= 4.5) return { label: 'Excellent', cls: 'good' }
      if (value >= 4.0) return { label: 'Correct', cls: 'medium' }
      return { label: 'À améliorer', cls: 'bad' }
    }
    if (key === 'count') {
      if (value >= 100) return { label: 'Très bien', cls: 'good' }
      if (value >= 30) return { label: 'Correct', cls: 'medium' }
      return { label: 'À développer', cls: 'bad' }
    }
    if (key === 'response') {
      if (value >= 80) return { label: 'Excellent', cls: 'good' }
      if (value >= 40) return { label: 'Correct', cls: 'medium' }
      return { label: 'À améliorer', cls: 'bad' }
    }
    return { label: '', cls: '' }
  }

  return (
    <>
      <Head>
        <title>Audit gratuit de votre fiche Google — Esmy</title>
        <meta name="description" content="Recevez en 30 secondes un audit complet de votre fiche Google Business Profile avec 3 recommandations personnalisées pour gagner plus d'avis et de clients." />
        <link rel="canonical" href="https://esmy.ai/audit" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">esmy<span className="logo-dot">.</span></a>
          <div className="nav-links">
            <a href="/#metiers">Métiers</a>
            <a href="/#tarifs">Tarifs</a>
            <a href="/audit">Audit gratuit</a>
          </div>
          <div className="nav-cta">
            <a href="/login" style={{color:'var(--textsub)',textDecoration:'none',fontSize:14,fontWeight:500}}>Connexion</a>
          </div>
        </div>
      </nav>

      {stage === 'form' && (
        <>
          <section className="hero">
            <div className="container">
              <div className="hero-eyebrow">Gratuit · sans engagement</div>
              <h1 className="hero-title">Votre fiche Google, <em>analysée en 30 secondes.</em></h1>
              <p className="hero-sub">
                Recevez un audit complet de votre présence Google Business Profile : note, avis, taux de réponse,
                et <strong>3 recommandations concrètes</strong> générées par IA pour gagner plus de clients.
              </p>
              <div className="hero-badges">
                <div className="hero-badge"><span className="hero-badge-ico">✓</span> Données Google officielles</div>
                <div className="hero-badge"><span className="hero-badge-ico">✓</span> Recommandations personnalisées</div>
                <div className="hero-badge"><span className="hero-badge-ico">✓</span> 30 secondes chrono</div>
              </div>
            </div>
          </section>

          <div className="form-wrap">
            <div className="form-card">
              <div className="form-title">Commençons.</div>
              <div className="form-sub">Entrez le nom de votre commerce et votre ville — on s'occupe du reste.</div>

              <div className="field">
                <label>Nom du commerce *</label>
                <input type="text" placeholder="Ex : Boulangerie Hat's" value={form.business_name} onChange={e => updateField('business_name', e.target.value)} />
              </div>
              <div className="field">
                <label>Ville *</label>
                <input type="text" placeholder="Ex : Aix-en-Provence" value={form.business_city} onChange={e => updateField('business_city', e.target.value)} />
              </div>
              <div className="field-row">
                <div className="field" style={{margin:0}}>
                  <label>Votre email *</label>
                  <input type="email" placeholder="contact@moncommerce.fr" value={form.contact_email} onChange={e => updateField('contact_email', e.target.value)} />
                </div>
                <div className="field" style={{margin:0}}>
                  <label>Téléphone</label>
                  <input type="tel" placeholder="06 12 34 56 78" value={form.contact_phone} onChange={e => updateField('contact_phone', e.target.value)} />
                </div>
              </div>

              <div className="consent-row" onClick={() => updateField('consent_recontact', !form.consent_recontact)}>
                <input type="checkbox" checked={form.consent_recontact} onChange={e => updateField('consent_recontact', e.target.checked)} onClick={e => e.stopPropagation()} />
                <label>
                  J'accepte que <strong>Esmy</strong> puisse me recontacter une seule fois pour discuter de mon audit.
                  Aucun spam — vous pouvez vous désinscrire à tout moment.
                </label>
              </div>

              {errorMsg && <div className="form-error show">⚠ {errorMsg}</div>}

              <button className="btn-submit" onClick={handleSubmit}>
                Lancer mon audit gratuit →
              </button>

              <div className="form-note">
                🔒 Données protégées · Conforme RGPD · <strong>Aucun prélèvement</strong>
              </div>
            </div>
          </div>
        </>
      )}

      {stage === 'loading' && (
        <div style={{paddingTop:140}}>
          <div className="loading show">
            <div className="loading-spinner"></div>
            <div className="loading-title">Audit en cours…</div>
            <div className={`loading-step ${loadingStep >= 0 ? 'active' : ''}`}>🔍 Récupération de votre fiche Google</div>
            <div className={`loading-step ${loadingStep >= 1 ? 'active' : ''}`}>📊 Analyse de vos avis récents</div>
            <div className={`loading-step ${loadingStep >= 2 ? 'active' : ''}`}>✨ Génération des recommandations IA</div>
          </div>
        </div>
      )}

      {stage === 'results' && result && (
        <div style={{paddingTop:120}}>
          <div className="results show">
            <div className="results-header">
              <div className="results-badge">✓ Audit généré avec succès</div>
              <h1 className="results-title">Votre audit est <em>prêt.</em></h1>
              <p className="results-sub">Voici un résumé de votre présence Google et nos recommandations personnalisées.</p>
            </div>

            <div className="result-card">
              <div className="result-card-header">
                <div>
                  <div className="result-biz-name">{result.place.name}</div>
                  <div className="result-biz-address">{result.place.address}</div>
                  {result.place.website && (
                    <a href={result.place.website} target="_blank" rel="noopener" className="result-biz-link">🌐 {result.place.website.replace(/^https?:\/\//, '').replace(/\/$/, '')} →</a>
                  )}
                </div>
              </div>

              <div className="metrics-grid">
                <div className="metric">
                  <div className="metric-label">Note Google</div>
                  <div className="metric-value">
                    {result.metrics.rating ? result.metrics.rating.toFixed(1) : '—'}
                    <span className="metric-stars"> ★</span>
                  </div>
                  {result.metrics.rating && (
                    <span className={`metric-verdict ${getVerdict('rating', result.metrics.rating).cls}`}>
                      {getVerdict('rating', result.metrics.rating).label}
                    </span>
                  )}
                </div>
                <div className="metric">
                  <div className="metric-label">Avis collectés</div>
                  <div className="metric-value">{result.metrics.reviews_count || 0}</div>
                  <span className={`metric-verdict ${getVerdict('count', result.metrics.reviews_count).cls}`}>
                    {getVerdict('count', result.metrics.reviews_count).label}
                  </span>
                </div>
                <div className="metric">
                  <div className="metric-label">Taux de réponse</div>
                  <div className="metric-value">{result.metrics.response_rate !== null ? `${result.metrics.response_rate}%` : '—'}</div>
                  {result.metrics.response_rate !== null && (
                    <span className={`metric-verdict ${getVerdict('response', result.metrics.response_rate).cls}`}>
                      {getVerdict('response', result.metrics.response_rate).label}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="reco-card">
              <div className="reco-title">Nos recommandations</div>
              <div className="reco-sub">3 actions prioritaires pour améliorer votre présence Google — générées sur mesure pour votre commerce.</div>

              {result.recommendations.map((r, i) => (
                <div key={i} className="reco-item">
                  <div className="reco-item-header">
                    <div className="reco-item-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="reco-item-title">{r.title}</div>
                  </div>
                  <div className="reco-item-desc">{r.description}</div>
                  {r.impact && <div className="reco-item-impact">→ {r.impact}</div>}
                </div>
              ))}
            </div>

            <div className="cta-box">
              <div className="cta-box-content">
                <div className="cta-box-eyebrow">Aller plus loin</div>
                <div className="cta-box-title">Réservez <em>15 minutes</em> avec Sébastien</div>
                <div className="cta-box-sub">Discutons de ces recommandations et voyons ensemble comment Esmy peut automatiser la collecte d'avis et la gestion des réponses pour votre commerce.</div>
                <a href="https://cal.com/sebastien-esmy/15min" target="_blank" rel="noopener" className="btn-cta-big">
                  Planifier un call gratuit →
                </a>
              </div>
            </div>

            <div className="result-footer">
              <button className="btn-submit" style={{maxWidth:300,margin:'0 auto'}} onClick={() => { setStage('form'); setResult(null); setForm({business_name:'',business_city:'',contact_email:'',contact_phone:'',consent_recontact:false}); window.scrollTo(0, 0); }}>
                Analyser un autre commerce
              </button>
              <div className="result-footer-note">💌 Une copie de cet audit vous a été envoyée par email.</div>
            </div>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-inner">
          <div className="footer-copy">© 2026 Esmy · contact@esmy.ai</div>
          <div className="footer-links">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/privacy">Confidentialité</a>
          </div>
        </div>
      </footer>
    </>
  )
}
