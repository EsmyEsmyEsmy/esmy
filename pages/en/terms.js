
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
      <a href="/#fonctionnement">How it works</a>
      <a href="/#fonctionnalites">Features</a>
      <a href="/#tarifs">Pricing</a>
      <a href="/about">About</a>
      <a href="/demo">Google API</a>
    </div>
    <div class="nav-cta">
      <a href="/login" class="login">Log in</a>
      <a href="/login" class="btn-cta">Get started free</a>
    </div>
  </div>
</nav>

<section class="legal-hero">
  <div class="container">
    <div class="legal-eyebrow">Esmy · esmy.ai</div>
    <h1>Terms of Service</h1>
    <p class="legal-updated">Last updated: May 2026</p>
    <div class="legal-lang"><a href="/terms">FR</a><span class="sep">·</span><span class="active">EN</span></div>
  </div>
</section>

<section class="legal-body">
  <div class="container">
    <div class="legal-card">

      <div class="legal-section">
        <h2><span class="num">1</span> Purpose</h2>
        <p>These Terms of Service ("Terms") govern access to and use of the Esmy platform (esmy.ai), operated by Esmy, a project currently being incorporated, whose representative is domiciled in France. By accessing the platform and creating an account, you accept these Terms in full.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">2</span> Service description</h2>
        <p>Esmy is a SaaS platform for local merchants. It enables:</p>
        <ul>
          <li>Collection of Google reviews through a gamification mechanic (wheel of fortune)</li>
          <li>Automatic generation of review replies using artificial intelligence</li>
          <li>Publishing of replies to Google Business Profile via the official Google API</li>
          <li>Reputation performance tracking through a dashboard</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">3</span> Registration and account</h2>
        <p>Access to the service requires creating an account with a valid email address. You are responsible for the confidentiality of your credentials and for any activity carried out under your account.</p>
        <p>You must be a legal entity or an individual acting in a professional capacity (merchant, business manager) to use Esmy.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">4</span> Use of the Google Business Profile API</h2>
        <p>By connecting your Google account to Esmy, you authorize Esmy to:</p>
        <ul>
          <li>Read reviews published on your Google Business Profile</li>
          <li>Publish replies to your reviews after your explicit approval</li>
        </ul>
        <p>Esmy does not use the API to edit, delete, or hide reviews. Access can be revoked at any time from your Google account.</p>
        <p>Esmy's use of the API complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements, as well as with Google's review policies.</p>
      </div>

      <div class="legal-highlight">
        <div class="legal-section">
          <h2><span class="num">5</span> Google compliance &amp; code of conduct</h2>
          <p>Use of Esmy must at all times remain compliant with Google's review policies. Non-compliance may lead to the suspension of your Google Business Profile.</p>
          <h3>Practices prohibited via Esmy</h3>
          <ul>
            <li>Conditioning the reward on the rating or content of the review — the reward is offered for any participation, regardless of rating, or even without a review if the customer chooses not to leave one</li>
            <li>Discouraging customers from leaving negative reviews</li>
            <li>Publishing or commissioning fake or misleading reviews</li>
            <li>Using Esmy to harass a review author</li>
          </ul>
          <h3>Permitted, compliant practices</h3>
          <ul>
            <li>Offering a reward as part of a gamified customer experience — with no obligation to leave a review or specific content</li>
            <li>Replying to reviews with AI-generated responses after human verification</li>
            <li>Inviting customers via QR code to share their honest experience</li>
          </ul>
        </div>
      </div>

      <div class="legal-section">
        <h2><span class="num">6</span> Subscription and payment</h2>
        <p>Esmy is offered as a monthly subscription. Current pricing is shown at <a href="/#tarifs">esmy.ai/#tarifs</a>. Payment is processed by Stripe. No banking information is stored by Esmy.</p>
        <h3>Termination</h3>
        <p>You may cancel your subscription at any time from your account area. Cancellation takes effect at the end of the current subscription period. No pro-rata refund is issued except where legally required.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">7</span> Service availability</h2>
        <p>Esmy strives to ensure maximum service availability (SLA target: 99.5%). Interruptions may occur for maintenance or in the event of technical failure. Esmy cannot be held liable for the unavailability of the Google Business Profile API.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">8</span> Intellectual property</h2>
        <p>The Esmy platform, its code, interfaces, and content are the exclusive property of Esmy and protected by intellectual property law. The user is granted a personal, non-exclusive, non-transferable right of use.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">9</span> Liability for AI-generated content</h2>
        <p>Esmy provides a feature for automatically generating review replies using artificial intelligence. As such:</p>
        <ul>
          <li>The user remains solely responsible for the content they choose to publish on their Google Business Profile, whether written manually or generated by Esmy's AI.</li>
          <li>No AI-generated reply is published without the merchant's explicit, prior approval. By clicking "Publish", the user validates and assumes full responsibility for the published content.</li>
          <li>The user agrees to review and verify generated replies before publication. Esmy cannot be held liable for errors, inaccuracies, or inappropriate wording contained in a reply approved and published by the user.</li>
          <li>The user warrants that content published via Esmy does not violate any applicable law or third-party right, and complies with Google Business Profile's code of conduct.</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">10</span> Limitation of liability</h2>
        <p>Esmy cannot be held liable for:</p>
        <ul>
          <li>Any loss of Google ranking resulting from changes to Google's algorithm</li>
          <li>Reviews published by your customers and their content</li>
          <li>The unavailability of the Google Business Profile API</li>
          <li>Indirect losses, loss of revenue, or commercial damages</li>
        </ul>
        <p>Esmy's liability is limited to the amount actually received during the 3 months preceding the damage.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">11</span> Modification of the Terms</h2>
        <p>Esmy reserves the right to modify these Terms at any time. Users will be notified by email at least 15 days before substantial changes take effect. Continued use of the service after that date constitutes acceptance of the new Terms.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">12</span> Governing law and disputes</h2>
        <p>These Terms are governed by French law. In the event of a dispute, the parties undertake to seek an amicable solution before any legal action. Failing agreement, the competent French courts will have jurisdiction.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">13</span> Contact</h2>
        <p>For any question regarding these Terms: <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
      </div>

      <div class="legal-docnav">
        <a href="/">← Back to home</a>
        <a href="/en/privacy">Privacy Policy →</a>
      </div>

    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">esmy<span class="logo-dot">.</span></a>
        <p>The reputation platform for local businesses. More reviews, a better rating, found first.</p>
        <p style="margin-top:8px;">Made in Provence 🌿</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <a href="/#fonctionnalites">Features</a>
        <a href="/#tarifs">Pricing</a>
        <a href="/demo">Google API demo</a>
        <a href="/login">Dashboard</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="/about">About</a>
        <a href="mailto:contact@esmy.ai">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/en/privacy">Privacy Policy</a>
        <a href="/en/terms">Terms of Service</a>
        <a href="/privacy">Confidentialité (FR)</a>
        <a href="/terms">CGU (FR)</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Esmy · contact@esmy.ai</p>
      <div class="footer-links">
        <a href="/en/privacy">Privacy</a>
        <a href="/en/terms">Terms</a>
      </div>
    </div>
  </div>
</footer>`

export default function TermsEN() {
  return (
    <>
      <Head>
        <title>Terms of Service — Esmy</title>
        <meta name="description" content="Terms of Service for the Esmy platform (esmy.ai)." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
