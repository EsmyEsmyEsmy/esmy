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
h3{font-size:16px;font-weight:700;margin:22px 0 8px}
p{font-size:14.5px;color:var(--sub);line-height:1.75;margin-bottom:10px}
ul{margin:10px 0 14px 20px;display:flex;flex-direction:column;gap:5px}
ul li{font-size:14.5px;color:var(--sub);line-height:1.7}
.warn-box{background:rgba(239,68,68,.05);border:1px solid rgba(239,68,68,.2);border-radius:10px;padding:16px 20px;margin:14px 0;font-size:14px;color:#991B1B;line-height:1.6}
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
    <h1>Conditions Générales d'Utilisation</h1>
    <p>Dernière mise à jour : Avril 2026 · Applicable à l'ensemble des utilisateurs d'esmy.ai</p>
  </div>
</div>

<div class="legal-body">
  <div class="container">

    <h2>1. Objet</h2>
    <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Esmy (esmy.ai), éditée par Esmy, projet en cours de constitution, dont le responsable est domicilié en France. En accédant à la plateforme et en créant un compte, vous acceptez sans réserve les présentes CGU.</p>

    <h2>2. Description du service</h2>
    <p>Esmy est une plateforme SaaS destinée aux commerçants locaux. Elle permet :</p>
    <ul>
      <li>La collecte d'avis Google via une mécanique de gamification (roue de la chance)</li>
      <li>La génération automatique de réponses aux avis via intelligence artificielle</li>
      <li>La publication des réponses sur Google Business Profile via l'API officielle Google</li>
      <li>Le suivi des performances de réputation via un tableau de bord</li>
    </ul>

    <h2>3. Inscription et compte</h2>
    <p>L'accès au service nécessite la création d'un compte avec une adresse email valide. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée sous votre compte.</p>
    <p>Vous devez être une personne morale ou physique agissant dans un cadre professionnel (commerçant, gérant d'établissement) pour utiliser Esmy.</p>

    <h2>4. Utilisation de l'API Google Business Profile</h2>
    <p>En connectant votre compte Google à Esmy, vous autorisez Esmy à :</p>
    <ul>
      <li>Lire les avis publiés sur votre fiche Google Business</li>
      <li>Publier des réponses à vos avis après votre approbation explicite</li>
    </ul>
    <p>Esmy n'utilise pas l'API pour modifier, supprimer ou masquer des avis. L'accès peut être révoqué à tout moment depuis votre compte Google.</p>

    <h2>5. Règles de bonne conduite — Conformité Google</h2>
    <div class="warn-box">
      ⚠️ L'utilisation d'Esmy doit en tout temps rester conforme aux règles de Google concernant les avis. Le non-respect peut entraîner la suspension de votre fiche Google Business.
    </div>

    <h3>Pratiques interdites via Esmy</h3>
    <ul>
      <li>Inciter à laisser uniquement des avis positifs (la récompense est offerte pour TOUT avis)</li>
      <li>Dissuader les clients de laisser des avis négatifs</li>
      <li>Publier ou commander des avis faux ou trompeurs</li>
      <li>Utiliser Esmy pour harceler un auteur d'avis</li>
    </ul>

    <h3>Pratiques autorisées et conformes</h3>
    <ul>
      <li>Offrir une récompense pour tout avis sincère, quelle que soit la note</li>
      <li>Répondre à des avis avec des réponses générées par IA après vérification humaine</li>
      <li>Inviter les clients via QR code à laisser leur expérience honnête</li>
    </ul>

    <h2>6. Abonnement et paiement</h2>
    <p>Esmy est proposé sous forme d'abonnement mensuel. Les tarifs en vigueur sont affichés sur la page esmy.ai/#tarifs. Le paiement est traité par Stripe. Aucune information bancaire n'est stockée par Esmy.</p>

    <h3>Résiliation</h3>
    <p>Vous pouvez résilier votre abonnement à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période d'abonnement en cours. Aucun remboursement prorata n'est effectué sauf obligation légale.</p>

    <h2>7. Disponibilité du service</h2>
    <p>Esmy s'efforce d'assurer une disponibilité maximale du service (objectif SLA : 99.5%). Des interruptions peuvent survenir pour maintenance ou en cas de défaillance technique. Esmy ne peut être tenu responsable de l'indisponibilité de l'API Google Business Profile.</p>

    <h2>8. Propriété intellectuelle</h2>
    <p>La plateforme Esmy, son code, ses interfaces et ses contenus sont la propriété exclusive d'Esmy et protégés par le droit de la propriété intellectuelle. L'utilisateur bénéficie d'un droit d'utilisation personnel, non exclusif et non cessible.</p>

    <h2>9. Limitation de responsabilité</h2>
    <p>Esmy ne saurait être tenu responsable de :</p>
    <ul>
      <li>Toute perte de classement Google résultant de modifications de l'algorithme Google</li>
      <li>Des avis publiés par vos clients et leur contenu</li>
      <li>De l'indisponibilité de l'API Google Business Profile</li>
      <li>Des pertes indirectes, pertes de chiffre d'affaires ou préjudices commerciaux</li>
    </ul>
    <p>La responsabilité d'Esmy est limitée au montant des sommes effectivement perçues au cours des 3 derniers mois précédant le dommage.</p>

    <h2>10. Modification des CGU</h2>
    <p>Esmy se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront notifiés par email au moins 15 jours avant l'entrée en vigueur de modifications substantielles. La poursuite de l'utilisation du service après cette date vaut acceptation des nouvelles CGU.</p>

    <h2>11. Droit applicable et litiges</h2>
    <p>Les présentes CGU sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord, les tribunaux français compétents seront saisis.</p>

    <h2>12. Contact</h2>
    <p>Pour toute question relative aux présentes CGU : <strong>contact@esmy.ai</strong></p>

  </div>
</div>

<footer>
  <div class="container" style="max-width:820px">
    <div class="footer-inner">
      <p>© 2026 Esmy · Tous droits réservés</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Confidentialité</a>
      </div>
    </div>
  </div>
</footer>`



export default function Page() {
  return (
    <>
      <Head>
        <title>Conditions Générales d'Utilisation — Esmy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      
    </>
  )
}
