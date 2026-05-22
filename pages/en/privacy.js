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
    <h1>Privacy Policy</h1>
    <p class="legal-updated">Last updated: May 2026</p>
    <div class="legal-lang"><a href="/privacy">FR</a><span class="sep">·</span><span class="active">EN</span></div>
  </div>
</section>

<section class="legal-body">
  <div class="container">
    <div class="legal-card">

      <div class="legal-summary">
        <p><strong>In short.</strong> Your data and your customers' data are never sold, nor shared with third parties for commercial purposes. No advertising. Data received from Google is used only to operate your dashboard. You can revoke access and request deletion of your data at any time.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">1</span> Who we are</h2>
        <p>Esmy (esmy.ai) is a project currently being incorporated, operated by a representative domiciled in France. The data controller is Esmy's founder, reachable at <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a> or <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">2</span> Data we collect</h2>
        <h3>2.1 Merchant data (dashboard users)</h3>
        <ul>
          <li>First name, last name, professional email address</li>
          <li>Business name and address</li>
          <li>Google Business Profile OAuth token (encrypted, never exposed to the browser)</li>
          <li>Billing data (processed by Stripe — not stored by Esmy)</li>
          <li>Platform usage logs</li>
        </ul>
        <h3>2.2 End-customer data (visitors of the game page)</h3>
        <ul>
          <li>Email address (optional — only if the customer voluntarily provides it)</li>
          <li>Game outcome (prize won, reward code)</li>
          <li>Date and time of participation</li>
          <li>No precise location data is collected</li>
        </ul>
        <h3>2.3 Data from the Google Business Profile API</h3>
        <ul>
          <li>Published Google reviews (text, rating, reviewer display name, date)</li>
          <li>Review replies (published only with your explicit consent)</li>
          <li>Business information (name, address, category)</li>
        </ul>
        <p>This data is accessed through the official Google Business Profile API, exclusively after the merchant's explicit OAuth authorization.</p>
      </div>

      <div class="legal-highlight">
        <div class="legal-section">
          <h2><span class="num">3</span> Google Business Profile API integration</h2>
          <div class="limited-use"><strong>Compliance — Limited Use.</strong> Esmy's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</div>
          <h3>OAuth scope requested</h3>
          <p>Esmy requests only the following scope:</p>
          <div class="scope-code">https://www.googleapis.com/auth/business.manage</div>
          <h3>Endpoints used</h3>
          <ul>
            <li><span class="mono">accounts.list</span> — identify the merchant's Google Business account</li>
            <li><span class="mono">locations.get</span> — retrieve the business name and address</li>
            <li><span class="mono">reviews.list</span> — read published reviews (read-only)</li>
            <li><span class="mono">reviews.updateReply</span> — publish a reply (only after the merchant's approval)</li>
          </ul>
          <h3>How Google data is used</h3>
          <ul>
            <li>Display reviews in the relevant merchant's Esmy dashboard</li>
            <li>Generate and then publish review replies, after the merchant's explicit approval</li>
            <li>Produce statistics internal to that merchant's account only</li>
          </ul>
          <p>Data obtained from the Google API is <strong>never</strong>: shared between different merchants, sold or transferred to third parties, used for advertising purposes, or used to train generalized or human-independent artificial intelligence models.</p>
          <p>Review data is deleted 90 days after the contract ends. The merchant can revoke access at any time from their Google account or from their Esmy account.</p>
        </div>
      </div>

      <div class="legal-section">
        <h2><span class="num">4</span> Purposes of processing</h2>
        <ul>
          <li>Providing the Esmy service (dashboard, AI replies, gamification)</li>
          <li>Account-related communication (alerts, notifications)</li>
          <li>Billing and account management</li>
          <li>Service improvement (aggregated and anonymized data)</li>
        </ul>
        <p>Legal basis: performance of the contract (Art. 6.1.b GDPR) and legitimate interest (Art. 6.1.f GDPR) for service improvement.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">5</span> Data retention</h2>
        <ul>
          <li>Merchant account data: subscription duration + 3 years (legal obligations)</li>
          <li>Google review data: 90 days after contract termination</li>
          <li>End-customer data (optional email): rolling 12 months</li>
          <li>Technical logs: 6 months</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">6</span> Security</h2>
        <ul>
          <li>Data at rest encryption: AES-256</li>
          <li>Communications encryption: TLS 1.3</li>
          <li>OAuth tokens stored encrypted — never exposed to the frontend</li>
          <li>Data access restricted to Esmy team members who need it</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2><span class="num">7</span> Your rights (GDPR)</h2>
        <p>You have the following rights over your personal data:</p>
        <ul>
          <li><strong>Access</strong> — obtain a copy of your data</li>
          <li><strong>Rectification</strong> — correct inaccurate data</li>
          <li><strong>Erasure</strong> — request deletion of your data</li>
          <li><strong>Portability</strong> — receive your data in a structured format</li>
          <li><strong>Objection</strong> — object to certain processing</li>
        </ul>
        <p>To exercise these rights: <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>. Response within 30 days. You may also lodge a complaint with the French data protection authority, the CNIL (<a href="https://www.cnil.fr/en" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">8</span> Data deletion and access revocation</h2>
        <p>At any time, you can:</p>
        <ul>
          <li>Revoke Esmy's access to your Google profile at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>;</li>
          <li>Delete your account and all your data from your Esmy account, or by writing to <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</li>
        </ul>
        <p>Deletion results in the erasure of associated data within 30 days, except for legally required retention.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">9</span> Cookies</h2>
        <p>Esmy uses only cookies strictly necessary for the platform to function (session, authentication). No advertising or third-party tracking cookies are used.</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">10</span> Sub-processors</h2>
        <ul>
          <li><strong>Stripe</strong> — payment processing (PCI-DSS compliant)</li>
          <li><strong>Vercel</strong> — web platform hosting</li>
          <li><strong>Supabase</strong> — database and authentication (hosted in the European Union)</li>
          <li><strong>Resend</strong> — transactional email delivery</li>
          <li><strong>Anthropic</strong> — AI API for generating review replies. Data sent through the API is not used to train Anthropic's models.</li>
        </ul>
        <p>All sub-processors are bound by a GDPR-compliant Data Processing Agreement (DPA).</p>
      </div>

      <div class="legal-section">
        <h2><span class="num">11</span> Contact</h2>
        <p>For any question regarding this policy: <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</p>
      </div>

      <div class="legal-docnav">
        <a href="/">← Back to home</a>
        <a href="/en/terms">Terms of Service →</a>
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

export default function PrivacyEN() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Esmy</title>
        <meta name="description" content="Esmy's Privacy Policy — protection of merchant data and compliance with the Google Business Profile API and Google API Services User Data Policy." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </>
  )
}
