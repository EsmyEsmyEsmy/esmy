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
    <h1>Conditions Générales d'Utilisation</h1>
    <p class="legal-updated">Dernière mise à jour : mai 2026</p>
    <div class="legal-lang"><span class="active">FR</span><span class="sep">·</span><a href="/en/terms">EN</a></div>
  </div>
</section>

<section class="legal-body">
  <div class="container">
    <div class="legal-card">

      <div class="legal-section">
        <h2><span class="num">1</span> Objet</h2>
        <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Esmy (esmy.ai), éditée par Esmy, projet en cours de constitution dont le responsable est domicilié en France. En accédant à la plateforme et en créant un compte, vous acceptez sans réserve les présentes CGU.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">2</span> Description du service</h2>
        <p>Esmy est une plateforme SaaS destinée aux commerçants locaux. Elle permet :</p>
        <ul>
          <li>La collecte d'avis Google via une mécanique de gamification (roue de la chance)</li>
          <li>La génération automatique de réponses aux avis via intelligence artificielle</li>
          <li>La publication des réponses sur Google Business Profile via l'API officielle Google</li>
          <li>Le suivi des performances de réputation via un tableau de bord</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">3</span> Inscription et compte</h2>
        <p>L'accès au service nécessite la création d'un compte avec une adresse email valide. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée sous votre compte.</p>
        <p>Vous devez être une personne morale ou physique agissant dans un cadre professionnel (commerçant, gérant d'établissement) pour utiliser Esmy.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">4</span> Utilisation de l'API Google Business Profile</h2>
        <p>En connectant votre compte Google à Esmy, vous autorisez Esmy à :</p>
        <ul>
          <li>Lire les avis publiés sur votre fiche Google Business</li>
          <li>Publier des réponses à vos avis après votre approbation explicite</li>
        </ul>
        <p>Esmy n'utilise pas l'API pour modifier, supprimer ou masquer des avis. L'accès peut être révoqué à tout moment depuis votre compte Google.</p>
        <p>L'utilisation de l'API par Esmy est conforme à la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, y compris ses exigences de Limited Use, ainsi qu'aux règles relatives aux avis de Google.</p>
      </div>

      <div class="legal-highlight">
        <div class="legal-section">
          <h2><span class="num">5</span> Conformité Google &amp; règles de bonne conduite</h2>
          <p>L'utilisation d'Esmy doit en tout temps rester conforme aux règles de Google concernant les avis. Le non-respect peut entraîner la suspension de votre fiche Google Business.</p>
          <h3>Pratiques interdites via Esmy</h3>
          <ul>
            <li>Conditionner la récompense à la note ou au contenu de l'avis — la récompense est offerte pour toute participation, quelle que soit la note, ou même sans avis si le client choisit de ne pas en laisser</li>
            <li>Dissuader les clients de laisser des avis négatifs</li>
            <li>Publier ou commander des avis faux ou trompeurs</li>
            <li>Utiliser Esmy pour harceler un auteur d'avis</li>
          </ul>
          <h3>Pratiques autorisées et conformes</h3>
          <ul>
            <li>Offrir une récompense dans le cadre d'une expérience client gamifiée — sans obligation de laisser un avis ni de contenu spécifique</li>
            <li>Répondre à des avis avec des réponses générées par IA après vérification humaine</li>
            <li>Inviter les clients via QR code à laisser leur expérience honnête</li>
          </ul>
        </div>
      </div>

      <div class="legal-section">
        <h2><span class="num">6</span> Abonnement et paiement</h2>
        <p>Esmy est proposé sous forme d'abonnement mensuel. Les tarifs en vigueur sont affichés sur la page <a href="/#tarifs">esmy.ai/#tarifs</a>. Le paiement est traité par Stripe. Aucune information bancaire n'est stockée par Esmy.</p>
        <h3>Résiliation</h3>
        <p>Vous pouvez résilier votre abonnement à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement prorata n'est effectué sauf obligation légale.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">7</span> Disponibilité du service</h2>
        <p>Esmy s'efforce d'assurer une disponibilité maximale du service (objectif SLA : 99,5 %). Des interruptions peuvent survenir pour maintenance ou en cas de défaillance technique. Esmy ne peut être tenu responsable de l'indisponibilité de l'API Google Business Profile.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">8</span> Propriété intellectuelle</h2>
        <p>La plateforme Esmy, son code, ses interfaces et ses contenus sont la propriété exclusive d'Esmy et protégés par le droit de la propriété intellectuelle. L'utilisateur bénéficie d'un droit d'utilisation personnel, non exclusif et non cessible.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">9</span> Responsabilité liée aux contenus générés par l'IA</h2>
        <p>Esmy met à disposition une fonctionnalité de génération automatique de réponses aux avis via intelligence artificielle. À ce titre :</p>
        <ul>
          <li>L'utilisateur reste seul responsable du contenu qu'il choisit de publier sur sa fiche Google Business Profile, qu'il soit rédigé manuellement ou généré par l'IA d'Esmy.</li>
          <li>Aucune réponse générée par l'IA n'est publiée sans l'approbation explicite et préalable du commerçant. En cliquant sur « Publier », l'utilisateur valide et assume l'entière responsabilité du contenu publié.</li>
          <li>L'utilisateur s'engage à relire et vérifier les réponses générées avant publication. Esmy ne peut être tenu responsable d'erreurs, d'inexactitudes ou de propos inappropriés contenus dans une réponse approuvée et publiée par l'utilisateur.</li>
          <li>L'utilisateur garantit que les contenus publiés via Esmy ne violent aucune loi applicable, aucun droit de tiers, et respectent les règles de conduite de Google Business Profile.</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">10</span> Limitation de responsabilité</h2>
        <p>Esmy ne saurait être tenu responsable de :</p>
        <ul>
          <li>Toute perte de classement Google résultant de modifications de l'algorithme Google</li>
          <li>Des avis publiés par vos clients et de leur contenu</li>
          <li>De l'indisponibilité de l'API Google Business Profile</li>
          <li>Des pertes indirectes, pertes de chiffre d'affaires ou préjudices commerciaux</li>
        </ul>
        <p>La responsabilité d'Esmy est limitée au montant des sommes effectivement perçues au cours des 3 derniers mois précédant le dommage.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">11</span> Modification des CGU</h2>
        <p>Esmy se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront notifiés par email au moins 15 jours avant l'entrée en vigueur de modifications substantielles. La poursuite de l'utilisation du service après cette date vaut acceptation des nouvelles CGU.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">12</span> Droit applicable et litiges</h2>
        <p>Les présentes CGU sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord, les tribunaux français compétents seront saisis.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">13</span> Contact</h2>
        <p>Pour toute question relative aux présentes CGU : <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
      </div>

      <div class="legal-docnav">
        <a href="/">← Retour à l'accueil</a>
        <a href="/privacy">Politique de confidentialité →</a>
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

export default function TermsFR() {
  return (
    <>
      <Head>
        <title>Conditions Générales d'Utilisation — Esmy</title>
        <meta name="description" content="Conditions Générales d'Utilisation de la plateforme Esmy (esmy.ai)." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
