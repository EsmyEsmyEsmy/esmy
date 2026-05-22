import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--slate:#111827;--slate2:#1F2937;--orange:#F97316;--orange-d:#EA6C0A;--amber:#F59E0B;--cream:#FAFAF6;--g100:#F4F4F1;--g200:#E8E8E2;--g400:#9B9B8E;--g600:#5A5A50;--text:#111827;--textsub:#5A6478;--green:#16A34A;--r:14px;--rlg:20px;--sh:0 2px 12px rgba(17,24,39,0.08);--shmd:0 8px 32px rgba(17,24,39,0.12)}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--cream);color:var(--text);line-height:1.6;overflow-x:hidden}
.container{max-width:1140px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1140px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;color:white;text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.04em;font-family:'Bricolage Grotesque',sans-serif}
.logo-dot{color:rgba(255,255,255,.35);margin-left:-2px}
.nav-links{display:flex;align-items:center;gap:28px}
.nav-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-links a:hover{color:white}
.nav-cta{display:flex;align-items:center;gap:12px}
.nav-cta .login{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;font-weight:500}
.nav-cta .login:hover{color:white}
.btn-cta{display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:white;border:none;padding:10px 20px;border-radius:100px;font-size:13.5px;font-weight:700;cursor:pointer;text-decoration:none;transition:all .2s;box-shadow:0 4px 20px rgba(249,115,22,.4)}
.btn-cta:hover{background:var(--orange-d);transform:translateY(-1px)}
.legal-hero{background:linear-gradient(145deg,#111827 0%,#1a2538 55%,#0f1a2e 100%);padding:120px 0 56px;position:relative;overflow:hidden}
.legal-hero::before{content:'';position:absolute;top:-120px;right:-120px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 70%);pointer-events:none}
.legal-eyebrow{font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;position:relative;z-index:2}
.legal-hero h1{font-size:clamp(30px,4.5vw,48px);font-weight:800;color:white;letter-spacing:-1px;line-height:1.1;margin-bottom:12px;position:relative;z-index:2}
.legal-updated{font-size:14px;color:rgba(255,255,255,.55);position:relative;z-index:2}
.legal-lang{margin-top:20px;font-size:13.5px;letter-spacing:.05em;position:relative;z-index:2}
.legal-lang .active{color:var(--orange);font-weight:700}
.legal-lang a{color:rgba(255,255,255,.55);text-decoration:none}
.legal-lang a:hover{color:white}
.legal-lang .sep{margin:0 8px;color:rgba(255,255,255,.2)}
.legal-body{padding:56px 0 80px;background:var(--cream)}
.legal-card{background:white;border:1px solid var(--g200);border-radius:var(--rlg);box-shadow:var(--sh);max-width:820px;margin:0 auto;padding:48px 52px}
.legal-summary{background:rgba(249,115,22,.06);border:1px solid rgba(249,115,22,.18);border-left:3px solid var(--orange);border-radius:var(--r);padding:20px 22px;margin-bottom:40px}
.legal-summary p{font-size:15.5px;line-height:1.7;color:var(--g600);margin:0}
.legal-summary strong{color:var(--slate)}
.legal-section{margin-bottom:36px}
.legal-section h2{display:flex;align-items:center;gap:12px;font-size:21px;font-weight:800;color:var(--slate);letter-spacing:-.4px;margin-bottom:14px}
.legal-section h2 .num{width:30px;height:30px;flex-shrink:0;border-radius:8px;background:var(--slate);color:white;font-size:14px;font-weight:800;display:flex;align-items:center;justify-content:center}
.legal-section h3{font-size:15.5px;font-weight:700;color:var(--slate);margin:20px 0 8px}
.legal-section p{font-size:15px;line-height:1.75;color:var(--g600);margin-bottom:12px}
.legal-section ul{list-style:none;display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.legal-section li{position:relative;padding-left:22px;font-size:15px;line-height:1.65;color:var(--g600)}
.legal-section li::before{content:'';position:absolute;left:2px;top:9px;width:6px;height:6px;border-radius:50%;background:var(--orange)}
.legal-section strong{color:var(--slate)}
.legal-section a{color:var(--orange);text-decoration:underline;text-underline-offset:2px}
.legal-section a:hover{color:var(--orange-d)}
.legal-highlight{background:var(--cream);border:1px solid var(--g200);border-radius:var(--r);padding:28px 30px;margin-bottom:36px}
.legal-highlight .legal-section{margin-bottom:0}
.limited-use{background:rgba(249,115,22,.08);border:1px solid rgba(249,115,22,.3);border-left:3px solid var(--orange);border-radius:var(--r);padding:16px 20px;margin-bottom:18px;font-size:14.5px;line-height:1.65;color:var(--g600)}
.limited-use strong{color:var(--orange-d)}
.scope-code{font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:13.5px;background:var(--slate);color:#FDBA74;padding:11px 16px;border-radius:10px;overflow-x:auto;margin-bottom:16px}
.mono{font-family:ui-monospace,'SF Mono',Menlo,monospace;font-size:13px;color:var(--slate2);background:var(--g100);padding:1px 6px;border-radius:5px}
.legal-docnav{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:8px;padding-top:24px;border-top:1px solid var(--g200);font-size:14px;font-weight:600}
.legal-docnav a{color:var(--textsub);text-decoration:none}
.legal-docnav a:hover{color:var(--orange)}
footer{background:var(--slate);padding:56px 0 28px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:44px}
.footer-brand .logo{font-family:'Bricolage Grotesque',sans-serif}
.footer-brand p{font-size:13.5px;color:rgba(255,255,255,.45);line-height:1.65;max-width:240px;margin-top:12px}
.footer-col h4{font-size:12.5px;font-weight:700;color:white;letter-spacing:.5px;margin-bottom:14px}
.footer-col a{display:block;font-size:13.5px;color:rgba(255,255,255,.45);text-decoration:none;margin-bottom:9px;transition:color .2s}
.footer-col a:hover{color:rgba(255,255,255,.85)}
.footer-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:22px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.footer-bottom p{font-size:12.5px;color:rgba(255,255,255,.3)}
.footer-links{display:flex;gap:18px;flex-wrap:wrap}
.footer-links a{font-size:12.5px;color:rgba(255,255,255,.3);text-decoration:none}
.footer-links a:hover{color:rgba(255,255,255,.55)}
@media(max-width:900px){.nav-links{display:none}.footer-grid{grid-template-columns:1fr 1fr}.legal-card{padding:36px 24px}}
@media(max-width:480px){.container{padding:0 16px}.nav-inner{padding:0 16px}.footer-grid{grid-template-columns:1fr}.footer-bottom{flex-direction:column;text-align:center}}`

const BODY = `
<nav>
  <div class="nav-inner">
    <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
    <div class="nav-links">
      <a href="/#fonctionnement">Comment ça marche</a>
      <a href="/#fonctionnalites">Fonctionnalités</a>
      <a href="/#tarifs">Tarifs</a>
      <a href="/about">À propos</a>
      <a href="/demo">API Google</a>
    </div>
    <div class="nav-cta">
      <a href="/login" class="login">Connexion</a>
      <a href="/login" class="btn-cta">Démarrer gratuitement</a>
    </div>
  </div>
</nav>

<section class="legal-hero">
  <div class="container">
    <div class="legal-eyebrow">Esmy · esmy.ai</div>
    <h1>Politique de confidentialité</h1>
    <p class="legal-updated">Dernière mise à jour : mai 2026</p>
    <div class="legal-lang"><span class="active">FR</span><span class="sep">·</span><a href="/en/privacy">EN</a></div>
  </div>
</section>

<section class="legal-body">
  <div class="container">
    <div class="legal-card">

      <div class="legal-summary">
        <p><strong>En résumé.</strong> Vos données et celles de vos clients ne sont jamais vendues, ni partagées avec des tiers à des fins commerciales. Aucune publicité. Les données issues de Google ne servent qu'à faire fonctionner votre tableau de bord. Vous pouvez révoquer l'accès et demander la suppression de vos données à tout moment.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">1</span> Qui sommes-nous</h2>
        <p>Esmy (esmy.ai) est un projet en cours de constitution dont le responsable est domicilié en France. Le responsable de traitement est le fondateur d'Esmy, joignable à <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a> ou <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">2</span> Données collectées</h2>
        <h3>2.1 Données des commerçants (utilisateurs du tableau de bord)</h3>
        <ul>
          <li>Nom, prénom, adresse email professionnelle</li>
          <li>Nom et adresse de l'établissement</li>
          <li>Token OAuth Google Business Profile (chiffré, jamais exposé au navigateur)</li>
          <li>Données de facturation (traitées par Stripe — non stockées par Esmy)</li>
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
          <li>Réponses aux avis (publiées uniquement avec votre accord explicite)</li>
          <li>Informations de l'établissement (nom, adresse, catégorie)</li>
        </ul>
        <p>Ces données sont accédées via l'API officielle Google Business Profile, exclusivement après autorisation OAuth explicite du commerçant.</p>
      </div>

      <div class="legal-highlight">
        <div class="legal-section">
          <h2><span class="num">3</span> Intégration de l'API Google Business Profile</h2>
          <div class="limited-use"><strong>Conformité — Limited Use.</strong> L'utilisation et le transfert par Esmy, vers toute autre application, des informations reçues des API Google respectent la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, y compris ses exigences de Limited Use.</div>
          <h3>Périmètre OAuth demandé</h3>
          <p>Esmy demande uniquement le périmètre (scope) suivant :</p>
          <div class="scope-code">https://www.googleapis.com/auth/business.manage</div>
          <h3>Endpoints utilisés</h3>
          <ul>
            <li><span class="mono">accounts.list</span> — identifier le compte Google Business du commerçant</li>
            <li><span class="mono">locations.get</span> — récupérer le nom et l'adresse de l'établissement</li>
            <li><span class="mono">reviews.list</span> — lire les avis publiés (lecture seule)</li>
            <li><span class="mono">reviews.updateReply</span> — publier une réponse (uniquement après approbation du commerçant)</li>
          </ul>
          <h3>Utilisation des données Google</h3>
          <ul>
            <li>Afficher les avis dans le tableau de bord Esmy du commerçant concerné</li>
            <li>Générer puis publier des réponses aux avis, après approbation explicite du commerçant</li>
            <li>Produire des statistiques internes au seul compte de ce commerçant</li>
          </ul>
          <p>Les données issues de l'API Google ne sont <strong>jamais</strong> : partagées entre différents commerçants, vendues ou transférées à des tiers, utilisées à des fins publicitaires, ni utilisées pour entraîner des modèles d'intelligence artificielle généralisés ou indépendants de l'humain.</p>
          <p>Les données d'avis sont supprimées 90 jours après la fin du contrat. Le commerçant peut révoquer l'accès à tout moment depuis son compte Google ou depuis son espace Esmy.</p>
        </div>
      </div>

      <div class="legal-section">
        <h2><span class="num">4</span> Finalités du traitement</h2>
        <ul>
          <li>Fourniture du service Esmy (tableau de bord, réponses IA, gamification)</li>
          <li>Communication relative au compte (alertes, notifications)</li>
          <li>Facturation et gestion du compte</li>
          <li>Amélioration du service (données agrégées et anonymisées)</li>
        </ul>
        <p>Base légale : exécution du contrat (Art. 6.1.b RGPD) et intérêt légitime (Art. 6.1.f RGPD) pour l'amélioration du service.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">5</span> Conservation des données</h2>
        <ul>
          <li>Données de compte commerçant : durée de l'abonnement + 3 ans (obligations légales)</li>
          <li>Données d'avis Google : 90 jours après résiliation du contrat</li>
          <li>Données clients finaux (email optionnel) : 12 mois glissants</li>
          <li>Logs techniques : 6 mois</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">6</span> Sécurité</h2>
        <ul>
          <li>Chiffrement des données au repos : AES-256</li>
          <li>Chiffrement des communications : TLS 1.3</li>
          <li>Tokens OAuth stockés de manière chiffrée — jamais exposés au frontend</li>
          <li>Accès aux données limité aux seuls membres de l'équipe Esmy qui en ont besoin</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">7</span> Vos droits (RGPD)</h2>
        <p>Vous disposez des droits suivants sur vos données personnelles :</p>
        <ul>
          <li><strong>Accès</strong> — obtenir une copie de vos données</li>
          <li><strong>Rectification</strong> — corriger des données inexactes</li>
          <li><strong>Effacement</strong> — demander la suppression de vos données</li>
          <li><strong>Portabilité</strong> — recevoir vos données dans un format structuré</li>
          <li><strong>Opposition</strong> — vous opposer à certains traitements</li>
        </ul>
        <p>Pour exercer ces droits : <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>. Réponse sous 30 jours. Vous pouvez également saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">8</span> Suppression des données et révocation d'accès</h2>
        <p>À tout moment, vous pouvez :</p>
        <ul>
          <li>Révoquer l'accès d'Esmy à votre fiche Google depuis <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a> ;</li>
          <li>Supprimer votre compte et l'ensemble de vos données depuis votre espace Esmy, ou en écrivant à <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</li>
        </ul>
        <p>La suppression entraîne l'effacement des données associées sous 30 jours, hors obligations légales de conservation.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">9</span> Cookies</h2>
        <p>Esmy utilise uniquement des cookies strictement nécessaires au fonctionnement de la plateforme (session, authentification). Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">10</span> Sous-traitants</h2>
        <ul>
          <li><strong>Stripe</strong> — traitement des paiements (conforme PCI-DSS)</li>
          <li><strong>Vercel</strong> — hébergement de la plateforme web</li>
          <li><strong>Supabase</strong> — base de données et authentification (hébergé dans l'Union Européenne)</li>
          <li><strong>Resend</strong> — envoi des emails transactionnels</li>
          <li><strong>Anthropic</strong> — API d'IA pour la génération des réponses aux avis. Les données transmises via l'API ne sont pas utilisées pour entraîner les modèles d'Anthropic.</li>
        </ul>
        <p>Tous les sous-traitants sont liés par un accord de traitement des données (DPA) conforme au RGPD.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">11</span> Contact</h2>
        <p>Pour toute question relative à cette politique : <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</p>
      </div>

      <div class="legal-docnav">
        <a href="/">← Retour à l'accueil</a>
        <a href="/terms">Conditions Générales d'Utilisation →</a>
      </div>

    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
        <p>La plateforme de réputation pour les commerces locaux. Plus d'avis, meilleure note, trouvé en premier.</p>
        <p style="margin-top:8px;">Made in Provence 🌿</p>
      </div>
      <div class="footer-col">
        <h4>Produit</h4>
        <a href="/#fonctionnalites">Fonctionnalités</a>
        <a href="/#tarifs">Tarifs</a>
        <a href="/demo">Démo Google API</a>
        <a href="/login">Dashboard</a>
      </div>
      <div class="footer-col">
        <h4>Entreprise</h4>
        <a href="/about">À propos</a>
        <a href="mailto:contact@esmy.ai">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Légal</h4>
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
        <a href="/en/privacy">Privacy (EN)</a>
        <a href="/en/terms">Terms (EN)</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Esmy · contact@esmy.ai</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
  </div>
</footer>`

export default function PrivacyFR() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité — Esmy</title>
        <meta name="description" content="Politique de confidentialité d'Esmy — protection des données des commerçants et conformité à l'API Google Business Profile." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
