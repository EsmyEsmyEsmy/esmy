import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--slate:#111827;--orange:#F97316;--cream:#FAFAF6;--g200:#E8E8E2;--sub:#5A6478}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--cream);color:var(--slate);line-height:1.7}
.container{max-width:820px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:820px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;gap:10px;color:white;text-decoration:none;font-weight:800;font-size:20px}
.logo-icon{width:32px;height:32px;background:var(--orange);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px}
.page-hero{background:linear-gradient(145deg,#111827 0%,#1a2538 100%);padding:120px 0 60px;text-align:center}
.page-hero h1{font-size:36px;font-weight:800;color:white;letter-spacing:-1px;margin-bottom:10px}
.page-hero p{font-size:14px;color:rgba(255,255,255,.5);margin-top:8px}
.legal-body{padding:60px 0 80px}
h2{font-size:20px;font-weight:700;margin:40px 0 12px;color:var(--slate);border-bottom:2px solid var(--orange);padding-bottom:8px;display:inline-block}
h3{font-size:16px;font-weight:700;margin:24px 0 8px;color:var(--slate)}
p{font-size:14.5px;color:var(--sub);line-height:1.75;margin-bottom:12px}
ul{margin:10px 0 14px 20px;display:flex;flex-direction:column;gap:6px}
ul li{font-size:14.5px;color:var(--sub);line-height:1.7}
.highlight-box{background:rgba(249,115,22,.06);border:1px solid rgba(249,115,22,.2);border-radius:12px;padding:18px 20px;margin:20px 0;font-size:14px;color:var(--slate);line-height:1.65}
.highlight-box strong{color:var(--orange)}
footer{background:var(--slate);padding:32px 0 20px}
.footer-inner{display:flex;align-items:center;justify-content:space-between;max-width:820px;margin:0 auto;padding:0 24px}
.footer-inner p{font-size:13px;color:rgba(255,255,255,.35)}
.footer-links a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;margin-left:18px}`

const BODY = `<nav>
  <div class="nav-inner">
    <a href="/" class="logo"><div class="logo-icon">⭐</div>esmy</a>
    <a href="/" style="font-size:13.5px;color:rgba(255,255,255,.6);text-decoration:none;">← Retour</a>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Politique de confidentialité</h1>
    <p>Dernière mise à jour : Avril 2026 · Esmy · esmy.ai</p>
  </div>
</div>

<div class="legal-body">
  <div class="container">

    <div class="highlight-box">
      <strong>En résumé :</strong> Vos données et celles de vos clients ne sont jamais vendues, jamais partagées avec des tiers à des fins commerciales. Nous n'affichons aucune publicité. Vous pouvez demander la suppression de vos données à tout moment.
    </div>

    <h2>1. Qui sommes-nous</h2>
    <p>Esmy (esmy.ai) est un projet en cours de constitution, dont le responsable est domicilié en France. Le responsable de traitement est le fondateur d'Esmy, joignable à : <strong>contact@esmy.ai</strong></p>

    <h2>2. Données collectées</h2>

    <h3>2.1 Données des commerçants (utilisateurs du tableau de bord)</h3>
    <ul>
      <li>Nom, prénom, adresse email professionnelle</li>
      <li>Nom et adresse de l'établissement</li>
      <li>Token OAuth Google Business Profile (chiffré, jamais exposé)</li>
      <li>Données de facturation (traitées par Stripe — non stockées chez Esmy)</li>
      <li>Logs d'utilisation de la plateforme</li>
    </ul>

    <h3>2.2 Données des clients finaux (visiteurs de la page de jeu)</h3>
    <ul>
      <li>Adresse email (optionnelle — uniquement si le client la saisit volontairement)</li>
      <li>Résultat du jeu (lot gagné, code de récompense)</li>
      <li>Date et heure de participation</li>
      <li>Aucune donnée de localisation précise n'est collectée</li>
    </ul>

    <h3>2.3 Données issues de l'API Google Business Profile</h3>
    <ul>
      <li>Avis Google publiés (texte, note, pseudo du rédacteur, date)</li>
      <li>Réponses aux avis (publiées avec votre accord explicite)</li>
      <li>Informations de l'établissement (nom, adresse, catégorie)</li>
    </ul>
    <p>Ces données sont accédées via l'API officielle Google Business Profile, uniquement après autorisation OAuth explicite du commerçant.</p>

    <h2>3. Intégration API Google Business Profile</h2>
    <div class="highlight-box">
      <strong>Section spécifique API Google :</strong> Esmy a soumis une demande d'accès formelle à l'API Google Business Profile. Cette section détaille précisément les données accédées via l'API.
    </div>
    <h3>Endpoints utilisés</h3>
    <ul>
      <li><strong>accounts.list</strong> — Identifier le compte Google Business du commerçant</li>
      <li><strong>locations.get</strong> — Récupérer le nom et l'adresse de l'établissement</li>
      <li><strong>reviews.list</strong> — Lire les avis publiés (lecture seule)</li>
      <li><strong>reviews.updateReply</strong> — Publier une réponse (uniquement après approbation du commerçant)</li>
    </ul>
    <h3>Utilisation des données Google</h3>
    <ul>
      <li>Les données des avis sont utilisées exclusivement pour afficher les avis dans le tableau de bord Esmy du commerçant concerné</li>
      <li>Les données ne sont jamais partagées entre différents commerçants</li>
      <li>Aucune donnée issue de l'API Google n'est utilisée à des fins publicitaires</li>
      <li>Les données sont supprimées 90 jours après la fin du contrat</li>
      <li>Le commerçant peut révoquer l'accès à tout moment depuis son compte Google</li>
    </ul>

    <h2>4. Finalités du traitement</h2>
    <ul>
      <li>Fourniture du service Esmy (tableau de bord, réponses IA, gamification)</li>
      <li>Communication relative au compte (alertes, notifications)</li>
      <li>Facturation et gestion du compte</li>
      <li>Amélioration du service (données agrégées et anonymisées)</li>
    </ul>
    <p>Base légale : exécution du contrat (Art. 6.1.b RGPD) et intérêt légitime (Art. 6.1.f RGPD) pour l'amélioration du service.</p>

    <h2>5. Conservation des données</h2>
    <ul>
      <li>Données de compte commerçant : durée de l'abonnement + 3 ans (obligations légales)</li>
      <li>Données d'avis Google : 90 jours après résiliation du contrat</li>
      <li>Données clients finaux (email optionnel) : 12 mois glissants</li>
      <li>Logs techniques : 6 mois</li>
    </ul>

    <h2>6. Sécurité</h2>
    <ul>
      <li>Chiffrement des données au repos : AES-256</li>
      <li>Chiffrement des communications : TLS 1.3</li>
      <li>Tokens OAuth stockés de manière chiffrée — jamais exposés au frontend</li>
      <li>Accès aux données limité aux seuls membres de l'équipe Esmy qui en ont besoin</li>
    </ul>

    <h2>7. Vos droits (RGPD)</h2>
    <p>Vous disposez des droits suivants sur vos données personnelles :</p>
    <ul>
      <li><strong>Accès</strong> — obtenir une copie de vos données</li>
      <li><strong>Rectification</strong> — corriger des données inexactes</li>
      <li><strong>Effacement</strong> — demander la suppression de vos données</li>
      <li><strong>Portabilité</strong> — recevoir vos données dans un format structuré</li>
      <li><strong>Opposition</strong> — vous opposer à certains traitements</li>
    </ul>
    <p>Pour exercer ces droits : <strong>contact@esmy.ai</strong>. Réponse sous 30 jours. Vous avez également le droit de saisir la CNIL (cnil.fr).</p>

    <h2>8. Cookies</h2>
    <p>Esmy utilise uniquement des cookies strictement nécessaires au fonctionnement de la plateforme (session, authentification). Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>

    <h2>9. Sous-traitants</h2>
    <ul>
      <li><strong>Stripe</strong> — Traitement des paiements (conforme PCI-DSS)</li>
      <li><strong>Vercel</strong> — Hébergement de la plateforme web</li>
      <li><strong>Anthropic</strong> — API IA pour la génération de réponses aux avis</li>
      <li><strong>Supabase</strong> — Base de données et authentification (hébergé en France, UE)</li>
    </ul>
    <p>Tous les sous-traitants sont liés par un accord de traitement des données (DPA) conforme au RGPD.</p>

    <h2>10. Contact</h2>
    <p>Pour toute question relative à cette politique : <strong>contact@esmy.ai</strong></p>

  </div>
</div>

<footer>
  <div class="container" style="max-width:820px">
    <div class="footer-inner">
      <p>© 2026 Esmy · Tous droits réservés</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
  </div>
</footer>`



export default function Page() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité — Esmy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      
    </>
  )
}
