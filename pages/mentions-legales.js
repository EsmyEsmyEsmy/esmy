import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--slate:#111827;--orange:#F97316;--cream:#FAFAF6;--g200:#E8E8E2;--sub:#5A6478}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--cream);color:var(--slate);line-height:1.7}
.container{max-width:820px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:820px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;gap:0;color:white;text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.02em;font-family:'Bricolage Grotesque',sans-serif}

.page-hero{background:linear-gradient(145deg,#111827 0%,#1a2538 100%);padding:120px 0 60px;text-align:center}
.page-hero h1{font-size:36px;font-weight:800;color:white;letter-spacing:-1px;margin-bottom:10px}
.page-hero p{font-size:14px;color:rgba(255,255,255,.5);margin-top:8px}
.legal-body{padding:60px 0 80px}
h2{font-size:20px;font-weight:700;margin:40px 0 12px;color:var(--slate);border-bottom:2px solid var(--orange);padding-bottom:8px;display:inline-block}
p{font-size:14.5px;color:var(--sub);line-height:1.75;margin-bottom:10px}
.info-block{background:white;border:1px solid var(--g200);border-radius:12px;padding:20px 24px;margin:14px 0}
.info-row{display:flex;gap:12px;margin-bottom:8px;font-size:14.5px}
.info-row:last-child{margin-bottom:0}
.info-label{font-weight:700;color:var(--slate);min-width:180px;flex-shrink:0}
.info-val{color:var(--sub)}
footer{background:var(--slate);padding:32px 0 20px}
.footer-inner{display:flex;align-items:center;justify-content:space-between;max-width:820px;margin:0 auto;padding:0 24px}
.footer-inner p{font-size:13px;color:rgba(255,255,255,.35)}
.footer-links a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;margin-left:18px}`

const BODY = `<nav>
  <div class="nav-inner">
    <a href="/" class="logo">esmy<span style="color:#F97316;margin-left:-2px;letter-spacing:-.5px;">.</span></a>
    <a href="/" style="font-size:13.5px;color:rgba(255,255,255,.6);text-decoration:none;">← Retour</a>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <h1>Mentions légales</h1>
    <p>Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004</p>
  </div>
</div>

<div class="legal-body">
  <div class="container">

    <h2>1. Éditeur du site</h2>
    <div class="info-block">
      <div class="info-row"><span class="info-label">Nom commercial</span><span class="info-val">Esmy</span></div>
      <div class="info-row"><span class="info-label">Statut juridique</span><span class="info-val">Entreprise en cours de constitution</span></div>
      <div class="info-row"><span class="info-label">Pays</span><span class="info-val">France</span></div>
      <div class="info-row"><span class="info-label">Email de contact</span><span class="info-val">contact@esmy.ai</span></div>
      <div class="info-row"><span class="info-label">Site web</span><span class="info-val">https://esmy.ai</span></div>
    </div>

    <h2>2. Directeur de la publication</h2>
    <p>Le directeur de la publication est le fondateur d'Esmy, responsable de traitement au sens du RGPD. Contact : contact@esmy.ai</p>

    <h2>3. Hébergement</h2>
    <div class="info-block">
      <div class="info-row"><span class="info-label">Hébergeur</span><span class="info-val">Vercel Inc.</span></div>
      <div class="info-row"><span class="info-label">Adresse</span><span class="info-val">340 S Lemon Ave #4133, Walnut, CA 91789, USA</span></div>
      <div class="info-row"><span class="info-label">Site</span><span class="info-val">https://vercel.com</span></div>
    </div>

    <h2>4. Propriété intellectuelle</h2>
    <p>L'ensemble des éléments du site esmy.ai (textes, graphismes, logotypes, icônes, images, scripts) sont la propriété exclusive d'Esmy et sont protégés par les lois relatives à la propriété intellectuelle.</p>
    <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'Esmy.</p>

    <h2>5. Limitation de responsabilité</h2>
    <p>Esmy s'efforce de maintenir les informations publiées sur le site à jour et exactes. Toutefois, Esmy ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées.</p>
    <p>Esmy décline toute responsabilité pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations diffusées, ou pour tout préjudice direct ou indirect résultant de l'utilisation du site.</p>

    <h2>6. Données personnelles</h2>
    <p>La collecte et le traitement des données personnelles sur le site esmy.ai sont conformes au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés modifiée.</p>
    <p>Pour toute question relative à vos données personnelles, consultez notre <a href="/privacy" style="color:var(--orange);font-weight:600">Politique de confidentialité</a> ou contactez-nous à contact@esmy.ai</p>

    <h2>7. Cookies</h2>
    <p>Le site esmy.ai utilise uniquement des cookies strictement nécessaires à son fonctionnement (session utilisateur, authentification). Ces cookies ne nécessitent pas votre consentement préalable conformément à la recommandation CNIL.</p>
    <p>Aucun cookie publicitaire, analytique ou de tracking tiers n'est déposé sans votre accord.</p>

    <h2>8. Droit applicable</h2>
    <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>

    <h2>9. Contact</h2>
    <p>Pour toute question ou réclamation relative au site : <strong>contact@esmy.ai</strong></p>

  </div>
</div>

<footer>
  <div class="container" style="max-width:820px">
    <div class="footer-inner">
      <p>© 2026 Esmy · Tous droits réservés</p>
      <div class="footer-links">
        <a href="/privacy">Confidentialité</a>
        <a href="/terms">CGU</a>
      </div>
    </div>
  </div>
</footer>`



export default function Page() {
  return (
    <>
      <Head>
        <title>Mentions légales — Esmy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      
    </>
  )
}
