import Head from 'next/head'

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --slate:#0F172A;--slate2:#1F2937;--slate3:#374151;
  --orange:#F97316;--orange-d:#EA6C0A;--amber:#F59E0B;
  --cream:#FAFAF6;--cream2:#F4F2EC;--white:#FFFFFF;
  --g100:#F4F4F1;--g200:#E8E8E2;--g300:#D4D4CE;--g400:#9B9B8E;
  --g500:#7A7A70;--g600:#5A5A50;
  --text:#0F172A;--textsub:#5A5F6E;
  --r:14px;--rlg:22px;
}
html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--cream);color:var(--text);line-height:1.55;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.container{max-width:1100px;margin:0 auto;padding:0 28px}

/* ───────── NAV ───────── */
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,250,246,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(15,23,42,.05)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px;max-width:1100px;margin:0 auto;padding:0 28px}
.logo{display:flex;align-items:center;color:var(--slate);text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.04em;font-family:'Bricolage Grotesque',sans-serif}
.logo-dot{color:var(--orange);margin-left:-2px;letter-spacing:-.5px}
.nav-links{display:flex;align-items:center;gap:36px}
.nav-links a{color:var(--textsub);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-links a:hover{color:var(--slate)}
.nav-cta{display:flex;align-items:center;gap:16px}
.nav-cta .login{color:var(--textsub);text-decoration:none;font-size:14px;font-weight:500;transition:color .15s}
.nav-cta .login:hover{color:var(--slate)}
.btn-cta{display:inline-flex;align-items:center;gap:8px;background:var(--slate);color:white;border:none;padding:11px 22px;border-radius:100px;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-cta:hover{background:var(--orange)}

/* ───────── HERO ───────── */
.hero{min-height:100vh;padding:140px 0 80px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.hero-eyebrow{font-size:12px;font-weight:600;color:var(--orange);letter-spacing:.18em;text-transform:uppercase;margin-bottom:28px;text-align:center}
.hero-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(42px,7vw,86px);font-weight:700;line-height:1.02;letter-spacing:-.035em;color:var(--slate);text-align:center;margin-bottom:32px;max-width:960px;margin-left:auto;margin-right:auto}
.hero-title em{font-style:italic;color:var(--orange);font-family:'Bricolage Grotesque',serif}
.hero-sub{font-size:18px;color:var(--textsub);line-height:1.65;text-align:center;max-width:600px;margin:0 auto 48px;font-weight:400}
.hero-actions{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:80px}
.btn-primary-big{display:inline-flex;align-items:center;gap:10px;background:var(--slate);color:white;border:none;padding:16px 32px;border-radius:100px;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-primary-big:hover{background:var(--orange);transform:translateY(-1px)}
.btn-secondary-big{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--slate);border:1px solid rgba(15,23,42,.15);padding:16px 28px;border-radius:100px;font-size:15px;font-weight:500;cursor:pointer;text-decoration:none;transition:all .2s;font-family:inherit}
.btn-secondary-big:hover{border-color:var(--slate);background:rgba(15,23,42,.04)}
.hero-whisper{text-align:center;font-size:13px;color:var(--g500);font-style:italic;max-width:520px;margin:0 auto}

/* ───────── LIGHT ANIMATION ───────── */
.hero-anim{margin:0 auto 80px;width:100%;max-width:720px;height:220px;position:relative}
.pulse-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:50%;background:var(--orange);z-index:10;box-shadow:0 0 20px rgba(249,115,22,.5)}
.pulse-center::before{content:'';position:absolute;inset:0;border-radius:50%;background:var(--orange);animation:centerPulse 2s ease-in-out infinite}
@keyframes centerPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.7}}
.pulse-ring{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border:1.5px solid var(--orange);border-radius:50%;opacity:0;animation:ringExpand 4s ease-out infinite}
.pulse-ring.r1{animation-delay:0s}
.pulse-ring.r2{animation-delay:1.3s}
.pulse-ring.r3{animation-delay:2.6s}
@keyframes ringExpand{
  0%{width:20px;height:20px;opacity:.9;border-width:2px}
  50%{opacity:.4}
  100%{width:440px;height:440px;opacity:0;border-width:.5px}
}
.dot-orbit{position:absolute;width:6px;height:6px;border-radius:50%;background:var(--slate);opacity:0;animation:dotAppear 4s ease-in-out infinite}
.dot-orbit::after{content:'';position:absolute;inset:-2px;border-radius:50%;background:var(--slate);opacity:.15}
@keyframes dotAppear{
  0%,100%{opacity:0;transform:scale(.7)}
  40%,70%{opacity:1;transform:scale(1)}
}
.dot-1{top:30%;left:20%;animation-delay:.2s}
.dot-2{top:20%;left:42%;animation-delay:.7s}
.dot-3{top:35%;left:68%;animation-delay:1.1s}
.dot-4{top:62%;left:18%;animation-delay:1.5s}
.dot-5{top:70%;left:36%;animation-delay:2s}
.dot-6{top:55%;left:58%;animation-delay:2.4s}
.dot-7{top:72%;left:78%;animation-delay:2.8s;background:var(--orange)}
.dot-7::after{background:var(--orange)}
.dot-8{top:25%;left:82%;animation-delay:3.2s}
.dot-9{top:45%;left:8%;animation-delay:.5s}

/* ───────── HARVARD SECTION ───────── */
.harvard{padding:120px 0;border-top:1px solid rgba(15,23,42,.06)}
.harvard-inner{max-width:820px;margin:0 auto;text-align:center}
.harvard-eyebrow{font-size:11px;font-weight:600;color:var(--orange);letter-spacing:.22em;text-transform:uppercase;margin-bottom:24px}
.harvard-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(26px,3.5vw,38px);font-weight:700;letter-spacing:-.02em;line-height:1.25;color:var(--slate);margin-bottom:20px}
.harvard-title em{font-style:normal;color:var(--orange)}
.harvard-sub{font-size:16px;color:var(--textsub);line-height:1.75;max-width:620px;margin:0 auto 48px}
.harvard-sub strong{color:var(--slate);font-weight:600}
.harvard-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);overflow:hidden;max-width:680px;margin:0 auto}
.harvard-cell{padding:32px 24px;text-align:center;border-right:1px solid rgba(15,23,42,.08);background:white}
.harvard-cell:last-child{border-right:none}
.h-num{font-family:'Bricolage Grotesque',sans-serif;font-size:42px;font-weight:700;color:var(--orange);letter-spacing:-.035em;line-height:1}
.h-lbl{font-size:13px;color:var(--textsub);margin-top:10px;line-height:1.5}
.harvard-source{margin-top:20px;font-size:12px;color:var(--g500);letter-spacing:.04em}

/* ───────── PILLARS ───────── */
.pillars{padding:120px 0;border-top:1px solid rgba(15,23,42,.06)}
.pillars-head{text-align:center;margin-bottom:80px;max-width:700px;margin-left:auto;margin-right:auto}
.pillars-eyebrow{font-size:11px;font-weight:600;color:var(--orange);letter-spacing:.22em;text-transform:uppercase;margin-bottom:20px}
.pillars-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,3.5vw,42px);font-weight:700;letter-spacing:-.025em;line-height:1.2;color:var(--slate);margin-bottom:16px}
.pillars-sub{font-size:16px;color:var(--textsub);line-height:1.65}
.pillars-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.pillar{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:40px 32px;transition:all .3s;position:relative;overflow:hidden}
.pillar:hover{border-color:var(--orange);transform:translateY(-4px);box-shadow:0 24px 60px rgba(15,23,42,.06)}
.pillar::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--orange);transform:scaleX(0);transform-origin:left;transition:transform .3s}
.pillar:hover::before{transform:scaleX(1)}
.pillar-num{font-family:'Bricolage Grotesque',sans-serif;font-size:13px;font-weight:600;color:var(--orange);letter-spacing:.1em;margin-bottom:20px}
.pillar-name{font-family:'Bricolage Grotesque',sans-serif;font-size:26px;font-weight:700;letter-spacing:-.02em;color:var(--slate);margin-bottom:8px}
.pillar-tag{font-size:13px;color:var(--orange);font-weight:600;margin-bottom:16px;letter-spacing:.04em}
.pillar-desc{font-size:14.5px;color:var(--textsub);line-height:1.65}

/* ───────── CTA FINAL ───────── */
.cta-final{padding:120px 0;text-align:center;border-top:1px solid rgba(15,23,42,.06)}
.cta-inner{max-width:640px;margin:0 auto}
.cta-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(32px,4.5vw,52px);font-weight:700;letter-spacing:-.03em;line-height:1.1;color:var(--slate);margin-bottom:20px}
.cta-title em{font-style:italic;color:var(--orange)}
.cta-sub{font-size:17px;color:var(--textsub);line-height:1.65;margin-bottom:40px}

/* ───────── FOOTER ───────── */
footer{padding:60px 0 32px;border-top:1px solid rgba(15,23,42,.06);background:var(--cream2)}
.footer-inner{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;max-width:1100px;margin:0 auto;padding:0 28px}
.footer-brand p{font-size:13px;color:var(--textsub);line-height:1.6;margin-top:14px;max-width:260px}
.footer-col h4{font-size:12px;font-weight:700;color:var(--slate);letter-spacing:.06em;margin-bottom:16px;text-transform:uppercase}
.footer-col a{display:block;font-size:13px;color:var(--textsub);text-decoration:none;margin-bottom:10px;transition:color .15s}
.footer-col a:hover{color:var(--slate)}
.footer-bottom{border-top:1px solid rgba(15,23,42,.08);padding-top:24px;margin-top:56px;display:flex;align-items:center;justify-content:space-between;max-width:1100px;margin-left:auto;margin-right:auto;padding-left:28px;padding-right:28px}
.footer-bottom p{font-size:12px;color:var(--g500)}
.footer-links{display:flex;gap:20px}
.footer-links a{font-size:12px;color:var(--g500);text-decoration:none;transition:color .15s}
.footer-links a:hover{color:var(--slate)}

/* ───────── CONTACT MODAL ───────── */
#contact-modal{display:none;position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,.6);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
.modal-box{background:white;border-radius:var(--rlg);padding:40px 36px;width:100%;max-width:440px;box-shadow:0 24px 80px rgba(15,23,42,.2);position:relative}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;font-size:18px;cursor:pointer;color:var(--g500);padding:4px;line-height:1}
.modal-close:hover{color:var(--slate)}
.modal-logo{font-family:'Bricolage Grotesque',sans-serif;font-size:18px;font-weight:700;letter-spacing:-.04em;color:var(--slate);margin-bottom:16px;display:flex;align-items:center}
.modal-logo-dot{color:var(--orange);margin-left:-2px}
.modal-title{font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:700;letter-spacing:-.02em;margin-bottom:8px}
.modal-sub{font-size:14px;color:var(--textsub);margin-bottom:24px;line-height:1.6}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.field{margin-bottom:12px}
.field label{display:block;font-size:11px;font-weight:700;color:var(--textsub);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px}
.field input{width:100%;padding:12px 14px;border:1px solid rgba(15,23,42,.12);border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;color:var(--slate);outline:none;transition:border-color .15s;background:var(--cream)}
.field input:focus{border-color:var(--orange);background:white}
.field input::placeholder{color:var(--g400)}
.field-error{display:none;background:#FEF2F2;border:1px solid #FECACA;border-radius:10px;padding:9px 12px;font-size:13px;color:#DC2626;margin-bottom:12px}
.modal-submit{width:100%;padding:13px;background:var(--slate);color:white;border:none;border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s}
.modal-submit:hover{background:var(--orange)}
.modal-note{text-align:center;font-size:12px;color:var(--g500);margin-top:12px}
.modal-success{display:none;text-align:center;padding:16px 0}
.modal-success-ico{font-size:44px;margin-bottom:14px}
.modal-success h3{font-size:20px;font-weight:700;margin-bottom:8px;font-family:'Bricolage Grotesque',sans-serif}
.modal-success p{font-size:14px;color:var(--textsub);line-height:1.65;margin-bottom:20px}
.btn-close-modal{padding:11px 24px;background:var(--cream);border:1px solid var(--g200);border-radius:100px;font-family:'Plus Jakarta Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;color:var(--slate)}


/* ───────── PRICING ───────── */
.pricing{padding:120px 0;border-top:1px solid rgba(15,23,42,.06)}
.pricing-head{text-align:center;margin-bottom:64px;max-width:640px;margin-left:auto;margin-right:auto}
.pricing-eyebrow{font-size:11px;font-weight:600;color:var(--orange);letter-spacing:.22em;text-transform:uppercase;margin-bottom:20px}
.pricing-title{font-family:'Bricolage Grotesque',sans-serif;font-size:clamp(28px,3.5vw,42px);font-weight:700;letter-spacing:-.025em;line-height:1.2;color:var(--slate);margin-bottom:16px}
.pricing-title em{font-style:italic;color:var(--orange)}
.pricing-sub{font-size:16px;color:var(--textsub);line-height:1.65}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:960px;margin:0 auto}
.plan{background:white;border:1px solid rgba(15,23,42,.08);border-radius:var(--rlg);padding:36px 28px;position:relative;transition:all .3s}
.plan:hover{border-color:rgba(15,23,42,.2);transform:translateY(-2px)}
.plan.feat{background:var(--slate);border-color:var(--slate);color:white}
.plan.feat:hover{transform:translateY(-4px);box-shadow:0 24px 60px rgba(15,23,42,.2)}
.plan-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--orange);color:white;border-radius:100px;padding:4px 14px;font-size:11px;font-weight:600;white-space:nowrap;letter-spacing:.03em}
.plan-name{font-family:'Bricolage Grotesque',sans-serif;font-size:15px;font-weight:600;color:var(--textsub);margin-bottom:6px;letter-spacing:.02em}
.plan.feat .plan-name{color:rgba(255,255,255,.55)}
.plan-price{font-family:'Bricolage Grotesque',sans-serif;font-size:44px;font-weight:700;letter-spacing:-.035em;color:var(--slate);margin-bottom:4px;line-height:1}
.plan.feat .plan-price{color:white}
.plan-price sup{font-size:20px;vertical-align:super;letter-spacing:0;font-weight:600}
.plan-price .mo{font-size:14px;font-weight:500;color:var(--textsub);letter-spacing:0}
.plan.feat .plan-price .mo{color:rgba(255,255,255,.45)}
.plan-tag{font-size:13px;color:var(--textsub);margin-bottom:24px;line-height:1.5}
.plan.feat .plan-tag{color:rgba(255,255,255,.6)}
.plan-features{list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:28px;border-top:1px solid rgba(15,23,42,.08);padding-top:20px}
.plan.feat .plan-features{border-color:rgba(255,255,255,.1)}
.plan-features li{display:flex;align-items:flex-start;gap:8px;font-size:13.5px;color:var(--textsub);line-height:1.5}
.plan.feat .plan-features li{color:rgba(255,255,255,.72)}
.plan-features li::before{content:'';display:inline-block;width:14px;height:14px;border-radius:50%;background:var(--orange);flex-shrink:0;margin-top:2px;background-image:url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 7l2.5 2.5L10.5 5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:center}
.btn-plan{display:flex;align-items:center;justify-content:center;background:var(--slate);color:white;border-radius:100px;padding:12px;font-size:14px;font-weight:600;width:100%;text-decoration:none;border:none;cursor:pointer;transition:all .2s;font-family:inherit}
.btn-plan:hover{background:var(--orange)}
.plan.feat .btn-plan{background:white;color:var(--slate)}
.plan.feat .btn-plan:hover{background:var(--orange);color:white}
.pricing-note{text-align:center;font-size:13px;color:var(--g500);margin-top:28px}

@media(max-width:900px){
  .pricing{padding:80px 0}
  .pricing-grid{grid-template-columns:1fr;max-width:420px}
}

/* ───────── RESPONSIVE ───────── */
@media(max-width:900px){
  .nav-links{display:none}
  .hero{padding:110px 0 60px}
  .hero-anim{height:180px}
  .harvard,.pillars,.cta-final{padding:80px 0}
  .harvard-grid{grid-template-columns:1fr}
  .harvard-cell{border-right:none;border-bottom:1px solid rgba(15,23,42,.08)}
  .harvard-cell:last-child{border-bottom:none}
  .pillars-grid{grid-template-columns:1fr}
  .footer-inner{grid-template-columns:1fr 1fr;gap:32px}
  .footer-bottom{flex-direction:column;gap:12px;text-align:center}
}
@media(max-width:480px){
  .container{padding:0 20px}
  .nav-inner{padding:0 20px}
  .hero-actions{flex-direction:column;width:100%}
  .hero-actions a{text-align:center;justify-content:center;width:100%}
  .footer-inner{grid-template-columns:1fr;padding:0 20px}
  .field-row{grid-template-columns:1fr}
}
`

const BODY = `
<nav>
  <div class="nav-inner">
    <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
    <div class="nav-links">
      <a href="/about">À propos</a>
      <a href="#tarifs">Tarifs</a>
      <a href="/demo">Démo API</a>
      <a href="#" onclick="openModal();return false">Contact</a>
    </div>
    <div class="nav-cta">
      <a href="/login" class="login">Connexion</a>
      <a href="#" onclick="openModal();return false" class="btn-cta">Planifiez votre démo</a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-eyebrow">Pour les commerçants locaux</div>
    <h1 class="hero-title">Votre présence locale.<br><em>Réinventée.</em></h1>
    <p class="hero-sub">L'intelligence et la gamification au service des commerces qui veulent mieux gérer leur réputation locale et fidéliser leurs clients — sans y passer leurs soirées.</p>

    <div class="hero-actions">
      <a href="#" onclick="openModal();return false" class="btn-primary-big">Planifiez votre démo →</a>
      <a href="/about" class="btn-secondary-big">En savoir plus</a>
    </div>

    <p class="hero-whisper">On parie qu'on va vous surprendre avec au moins une info à ce rendez-vous ?</p>

    <!-- LIGHT ANIMATION -->
    <div class="hero-anim" style="margin-top:80px;">
      <div class="pulse-ring r1"></div>
      <div class="pulse-ring r2"></div>
      <div class="pulse-ring r3"></div>
      <div class="dot-orbit dot-1"></div>
      <div class="dot-orbit dot-2"></div>
      <div class="dot-orbit dot-3"></div>
      <div class="dot-orbit dot-4"></div>
      <div class="dot-orbit dot-5"></div>
      <div class="dot-orbit dot-6"></div>
      <div class="dot-orbit dot-7"></div>
      <div class="dot-orbit dot-8"></div>
      <div class="dot-orbit dot-9"></div>
      <div class="pulse-center"></div>
    </div>
  </div>
</section>

<!-- HARVARD STUDY -->
<section class="harvard">
  <div class="container">
    <div class="harvard-inner">
      <div class="harvard-eyebrow">Harvard Business Review</div>
      <h2 class="harvard-title">Augmenter votre note Google d'<em>une seule étoile</em><br>génère entre <em>5% et 9%</em> de revenus supplémentaires.</h2>
      <p class="harvard-sub"><strong>92% des consommateurs</strong> refusent de faire affaire avec une entreprise notée sous 4 étoiles. Passer de 3.9 à 4.0 n'est pas un détail — c'est un levier de croissance massif.</p>
      <div class="harvard-grid">
        <div class="harvard-cell">
          <div class="h-num">+9%</div>
          <div class="h-lbl">de revenus par étoile<br>gagnée sur Google</div>
        </div>
        <div class="harvard-cell">
          <div class="h-num">92%</div>
          <div class="h-lbl">des clients évitent<br>les notes sous 4★</div>
        </div>
        <div class="harvard-cell">
          <div class="h-num">×3</div>
          <div class="h-lbl">plus de clics pour<br>les fiches à 4.5★+</div>
        </div>
      </div>
      <p class="harvard-source">Sources : Harvard Business Review · BrightLocal Consumer Review Survey 2024</p>
    </div>
  </div>
</section>

<!-- PILLARS -->
<section class="pillars">
  <div class="container">
    <div class="pillars-head">
      <div class="pillars-eyebrow">Notre approche</div>
      <h2 class="pillars-title">Trois piliers, une plateforme.</h2>
      <p class="pillars-sub">Des outils conçus pour les commerçants, discrètement pensés pour fonctionner ensemble.</p>
    </div>

    <div class="pillars-grid">
      <div class="pillar">
        <div class="pillar-num">01</div>
        <div class="pillar-name">Review</div>
        <div class="pillar-tag">Intelligence conversationnelle</div>
        <div class="pillar-desc">Chaque avis reçoit une réponse naturelle, préparée par l'IA dans votre ton. Vous validez en un clic.</div>
      </div>
      <div class="pillar">
        <div class="pillar-num">02</div>
        <div class="pillar-name">Play</div>
        <div class="pillar-tag">Expérience client gamifiée</div>
        <div class="pillar-desc">Une mécanique ludique qui transforme le moment du passage en caisse en souvenir mémorable.</div>
      </div>
      <div class="pillar">
        <div class="pillar-num">03</div>
        <div class="pillar-name">Pulse</div>
        <div class="pillar-tag">Analyse claire et simple</div>
        <div class="pillar-desc">Votre réputation locale, pilotée simplement. Un tableau de bord conçu pour les commerçants.</div>
      </div>
    </div>
  </div>
</section>


<!-- PRICING -->
<section class="pricing" id="tarifs">
  <div class="container">
    <div class="pricing-head">
      <div class="pricing-eyebrow">Tarifs</div>
      <h2 class="pricing-title">Simple, transparent, <em>sans engagement</em>.</h2>
      <p class="pricing-sub">Choisissez le plan qui correspond à votre commerce. Annulez quand vous voulez.</p>
    </div>

    <div class="pricing-grid">
      <div class="plan">
        <div class="plan-name">Starter</div>
        <div class="plan-price"><sup>€</sup>33<span class="mo"> /mois</span></div>
        <div class="plan-tag">1 établissement · Pour démarrer</div>
        <ul class="plan-features">
          <li>Réponses IA aux avis</li>
          <li>QR code imprimable</li>
          <li>Avis illimités</li>
          <li>Dashboard complet</li>
        </ul>
        <a href="#" onclick="openModal();return false" class="btn-plan">Démarrer</a>
      </div>

      <div class="plan feat">
        <div class="plan-badge">Le plus populaire</div>
        <div class="plan-name">Pro</div>
        <div class="plan-price"><sup>€</sup>69<span class="mo"> /mois</span></div>
        <div class="plan-tag">Jusqu'à 3 établissements</div>
        <ul class="plan-features">
          <li>Tout le plan Starter</li>
          <li>Roue de fortune personnalisée</li>
          <li>SMS post-visite</li>
          <li>Analytics avancés</li>
        </ul>
        <a href="#" onclick="openModal();return false" class="btn-plan">Démarrer le Pro</a>
      </div>

      <div class="plan">
        <div class="plan-name">Agence</div>
        <div class="plan-price" style="font-size:26px;letter-spacing:-.01em;">Sur demande</div>
        <div class="plan-tag">Établissements illimités · Tarif personnalisé</div>
        <ul class="plan-features">
          <li>Tout le plan Pro</li>
          <li>Dashboard multi-clients</li>
          <li>Marque blanche</li>
          <li>Support prioritaire</li>
        </ul>
        <a href="#" onclick="openModal();return false" class="btn-plan">Nous contacter</a>
      </div>
    </div>
    <p class="pricing-note">Sans frais cachés · Annulez à tout moment</p>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-final">
  <div class="container">
    <div class="cta-inner">
      <h2 class="cta-title">Prêt à nous <em>rencontrer</em> ?</h2>
      <p class="cta-sub">On prendra 20 minutes pour comprendre votre commerce — et voir si Esmy peut vous apporter quelque chose.</p>
      <a href="#" onclick="openModal();return false" class="btn-primary-big">Planifiez votre démo →</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
      <p>Plateforme pour commerçants locaux. Pensée en Provence, construite pour le terrain.</p>
    </div>
    <div class="footer-col">
      <h4>Produit</h4>
      <a href="#tarifs">Tarifs</a>
      <a href="#" onclick="openModal();return false">Planifier une démo</a>
      <a href="/demo">API Google</a>
      <a href="/login">Connexion</a>
    </div>
    <div class="footer-col">
      <h4>Entreprise</h4>
      <a href="/about">À propos</a>
      <a href="#" onclick="openModal();return false">Contact</a>
    </div>
    <div class="footer-col">
      <h4>Légal</h4>
      <a href="/mentions-legales">Mentions légales</a>
      <a href="/privacy">Confidentialité</a>
      <a href="/terms">CGU</a>
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
</footer>

<!-- CONTACT MODAL -->
<div id="contact-modal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-logo">esmy<span class="modal-logo-dot">.</span></div>
    <h2 class="modal-title">Planifions votre démo</h2>
    <p class="modal-sub">Laissez vos coordonnées — nous vous contactons sous <strong>24h</strong> pour organiser un échange de 20 minutes.</p>
    <div id="modal-form">
      <div class="field-row">
        <div class="field"><label>Prénom et nom *</label><input type="text" id="cf-name" placeholder="Marie Dupont"></div>
        <div class="field"><label>Téléphone *</label><input type="tel" id="cf-phone" placeholder="06 12 34 56 78"></div>
      </div>
      <div class="field"><label>Email *</label><input type="email" id="cf-email" placeholder="contact@moncommerce.fr"></div>
      <div class="field"><label>Nom du commerce *</label><input type="text" id="cf-biz" placeholder="La Bella Pizza"></div>
      <div class="field-error" id="cf-error">Veuillez remplir tous les champs.</div>
      <button class="modal-submit" onclick="submitContact()">Envoyer ma demande →</button>
      <p class="modal-note">Sans engagement · Réponse sous 24h</p>
    </div>
    <div class="modal-success" id="modal-success">
      <div class="modal-success-ico">🎉</div>
      <h3>Demande envoyée !</h3>
      <p>Merci ! Notre équipe vous contactera <strong>sous 24 heures</strong>.</p>
      <button class="btn-close-modal" onclick="closeModal()">Fermer</button>
    </div>
  </div>
</div>
`

const SCRIPTS = `
function openModal() {
  document.getElementById('contact-modal').style.display = 'flex';
  document.getElementById('modal-form').style.display = 'block';
  document.getElementById('modal-success').style.display = 'none';
  document.getElementById('cf-error').style.display = 'none';
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('contact-modal').style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('contact-modal').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
function submitContact() {
  var name=document.getElementById('cf-name').value.trim();
  var phone=document.getElementById('cf-phone').value.trim();
  var email=document.getElementById('cf-email').value.trim();
  var biz=document.getElementById('cf-biz').value.trim();
  var err=document.getElementById('cf-error');
  if(!name||!phone||!email||!biz||!email.includes('@')){err.style.display='block';return;}
  err.style.display='none';
  document.getElementById('modal-form').style.display='none';
  document.getElementById('modal-success').style.display='block';
}
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Esmy — Pour les commerçants locaux</title>
        <meta name="description" content="Esmy est une plateforme discrète et puissante pour les commerçants locaux. Review, Play, Pulse — trois piliers, une seule plateforme." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:ital,wght@0,600;0,700;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      <script dangerouslySetInnerHTML={{ __html: SCRIPTS }} />
    </>
  )
}
