import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--slate:#111827;--slate2:#1F2937;--orange:#F97316;--cream:#FAFAF6;--g100:#F4F4F1;--g200:#E8E8E2;--g400:#9B9B8E;--g600:#5A5A50;--text:#111827;--sub:#5A6478}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--cream);color:var(--text);line-height:1.6}
.container{max-width:1100px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1100px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;gap:0;color:white;text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.02em;font-family:'Bricolage Grotesque',sans-serif}

.nav-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;margin-left:24px;font-weight:500}
.nav-links a:hover{color:white}
.btn-cta{display:inline-flex;align-items:center;background:var(--orange);color:white;border:none;padding:10px 20px;border-radius:100px;font-size:13.5px;font-weight:700;cursor:pointer;text-decoration:none}

.page-hero{background:linear-gradient(145deg,#111827 0%,#1a2538 100%);padding:130px 0 80px;text-align:center}
.page-hero .eyebrow{font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.page-hero h1{font-size:clamp(32px,5vw,52px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:14px;line-height:1.1}
.page-hero p{font-size:17px;color:rgba(255,255,255,.6);max-width:520px;margin:0 auto;line-height:1.7}

section{padding:80px 0}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
h2{font-size:clamp(26px,3.5vw,38px);font-weight:800;letter-spacing:-1px;margin-bottom:14px;line-height:1.15}
.sub{font-size:16px;color:var(--sub);line-height:1.75;margin-bottom:20px}

.values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
.value-card{background:white;border:1px solid var(--g200);border-radius:16px;padding:28px}
.value-icon{font-size:28px;margin-bottom:12px}
.value-title{font-size:17px;font-weight:700;margin-bottom:8px}
.value-desc{font-size:14px;color:var(--sub);line-height:1.65}

.team-section{background:white}
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
.team-card{text-align:center;padding:28px 20px;border:1px solid var(--g200);border-radius:16px}
.team-av{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;margin:0 auto 14px}
.av-s{background:rgba(249,115,22,.15);color:var(--orange)}
.av-m{background:rgba(17,24,39,.08);color:var(--slate)}
.av-a{background:rgba(22,163,74,.12);color:#16A34A}
.team-name{font-size:16px;font-weight:700;margin-bottom:4px}
.team-role{font-size:13px;color:var(--sub)}

.stat-row{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:48px}
.stat-box{text-align:center;padding:28px;background:white;border:1px solid var(--g200);border-radius:14px}
.stat-num{font-size:36px;font-weight:800;color:var(--slate);letter-spacing:-1px}
.stat-num .o{color:var(--orange)}
.stat-num-clean{font-size:30px;font-weight:800;color:var(--slate);letter-spacing:-1px;margin:6px 0}
.stat-icon{font-size:28px;margin-bottom:4px}
.stat-lbl{font-size:13px;color:var(--sub);margin-top:4px}

.api-section{background:var(--slate);padding:64px 0}
.api-inner{text-align:center}
.api-inner h2{color:white}
.api-inner p{color:rgba(255,255,255,.6);max-width:520px;margin:14px auto 0;font-size:16px;line-height:1.7}
.api-badges{display:flex;justify-content:center;gap:12px;margin-top:28px;flex-wrap:wrap}
.api-badge{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:100px;padding:8px 18px;font-size:13px;color:rgba(255,255,255,.75);font-weight:500}
.api-badge.green{background:rgba(22,163,74,.15);border-color:rgba(22,163,74,.3);color:#4ADE80}

footer{background:var(--slate);padding:40px 0 24px}
.footer-inner{display:flex;align-items:center;justify-content:space-between}
.footer-inner p{font-size:13px;color:rgba(255,255,255,.35)}
.footer-links a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;margin-left:20px}
.footer-links a:hover{color:rgba(255,255,255,.6)}

@media(max-width:900px){.about-grid,.values-grid,.team-grid,.stat-row{grid-template-columns:1fr}.api-badges{gap:8px}}`

const BODY = `<nav>
  <div class="nav-inner">
    <a href="/" class="logo">esmy<span style="color:#F97316;margin-left:-2px;letter-spacing:-.5px;">.</span></a>
    <div class="nav-links">
      <a href="/#fonctionnement">Comment ça marche</a>
      <a href="/#tarifs">Tarifs</a>
      <a href="/demo">Démo API</a>
    </div>
    <a href="/#tarifs" class="btn-cta">Démarrer gratuitement</a>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <div class="eyebrow">À propos d'Esmy</div>
    <h1>Bâtis en Provence,<br>pour les commerçants.</h1>
    <p>Esmy est né d'une conviction simple : un bon commerçant mérite d'être trouvé. Nous construisons les outils qui rendent ça possible.</p>
  </div>
</div>

<section>
  <div class="container">
    <div class="about-grid">
      <div>
        <h2>Pourquoi Esmy existe</h2>
        <p class="sub">En 2023, en travaillant avec des restaurateurs et commerçants, nous avons observé quelque chose d'évident. On partage tous notre avis quand c'est négatif — rarement autrement. Esmy change ça.</p>
        <p class="sub">On a construit Esmy pour changer ça. Pas avec des tactiques douteuses, mais avec une mécanique honnête : donner aux clients une raison ludique de se souvenir de leur visite, et faciliter leur retour si ça se présente.</p>
      </div>
      <div style="background:white;border:1px solid var(--g200);border-radius:20px;padding:32px;box-shadow:0 8px 32px rgba(17,24,39,.08)">
        <div style="font-size:13px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:20px">Notre mission</div>
        <p style="font-size:18px;font-weight:700;color:var(--slate);line-height:1.5;margin-bottom:20px">"Chaque bon commerçant mérite d'être visible. Nous construisons les outils qui rendent ça possible — simplement, honnêtement."</p>
        <div style="display:flex;align-items:center;gap:12px;padding-top:20px;border-top:1px solid var(--g200)">
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(249,115,22,.15);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:var(--orange)">S</div>
          <div>
            <div style="font-weight:700;font-size:14px">Sébastien</div>
            <div style="font-size:12px;color:var(--sub)">Fondateur, Esmy · Provence</div>
          </div>
        </div>
      </div>
    </div>

    <div class="stat-row">
      <div class="stat-box">
        <div class="stat-icon">🎡</div>
        <div class="stat-num-clean">🚀</div>
        <div class="stat-lbl">Gamification pour remercier vos clients après chaque visite</div>
      </div>
      <div class="stat-box">
        <div class="stat-icon">🤖</div>
        <div class="stat-num-clean">🧠</div>
        <div class="stat-lbl">IA qui prépare vos réponses — vous validez avant publication</div>
      </div>
      <div class="stat-box">
        <div class="stat-icon">⭐</div>
        <div class="stat-num-clean">⚙️</div>
        <div class="stat-lbl">Plateforme conforme RGPD et aux règles Google Business</div>
      </div>
      <div class="stat-box">
        <div class="stat-icon">⚡</div>
        <div class="stat-num-clean">10 min</div>
        <div class="stat-lbl">pour configurer et déployer votre QR code
      </div>
    </div>
  </div>
</section>

<section style="background:white;padding:80px 0">
  <div class="container">
    <div style="text-align:center;margin-bottom:8px">
      <div style="font-size:12px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:2px">Nos valeurs</div>
    </div>
    <h2 style="text-align:center">Ce en quoi nous croyons</h2>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon">🏆</div>
        <div class="value-title">Honnêteté d'abord</div>
        <div class="value-desc">La récompense est offerte pour la visite — sans condition sur la note ou sur le fait de laisser un avis. Si un client choisit de partager son expérience, c'est librement et sincèrement. C'est éthique, et c'est comme ça que ça devrait fonctionner.</div>
      </div>
      <div class="value-card">
        <div class="value-icon">🎯</div>
        <div class="value-title">Simplicité radicale</div>
        <div class="value-desc">Chaque fonctionnalité d'Esmy doit pouvoir être comprise et utilisée par un commerçant en 5 minutes. La complexité, c'est notre problème — pas le vôtre.</div>
      </div>
      <div class="value-card">
        <div class="value-icon">🔒</div>
        <div class="value-title">Données protégées</div>
        <div class="value-desc">Vos données et celles de vos clients ne seront jamais revendues, jamais partagées. Nous sommes RGPD-compliant et avons soumis une demande d'accès à l'API Google Business Profile.</div>
      </div>
    </div>
  </div>
</section>


</div>

<footer>
  <div class="container">
    <div class="footer-inner">
      <p>© 2026 Esmy · Made in Provence 🌿 · contact@esmy.ai</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
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
        <title>À propos — Esmy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      
    </>
  )
}
