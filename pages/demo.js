import Head from 'next/head'

const STYLES = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--slate:#111827;--slate2:#1F2937;--orange:#F97316;--cream:#FAFAF6;--g100:#F4F4F1;--g200:#E8E8E2;--g400:#9B9B8E;--g600:#5A5A50;--text:#111827;--sub:#5A6478;--green:#16A34A}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--cream);color:var(--text);line-height:1.6}
.container{max-width:1060px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1060px;margin:0 auto;padding:0 24px}
.logo{display:flex;align-items:center;gap:10px;color:white;text-decoration:none;font-weight:800;font-size:20px}
.logo-icon{width:32px;height:32px;background:var(--orange);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px}
.nav-links a{color:rgba(255,255,255,.7);text-decoration:none;font-size:14px;margin-left:24px;font-weight:500}

.page-hero{background:linear-gradient(145deg,#111827 0%,#1a2538 100%);padding:130px 0 70px;text-align:center}
.eyebrow{font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.page-hero h1{font-size:clamp(28px,4.5vw,46px);font-weight:800;color:white;letter-spacing:-1.5px;margin-bottom:14px;line-height:1.1}
.page-hero p{font-size:16px;color:rgba(255,255,255,.6);max-width:560px;margin:0 auto;line-height:1.7}
.compliance-row{display:flex;justify-content:center;gap:10px;margin-top:24px;flex-wrap:wrap}
.cp-tag{background:rgba(22,163,74,.15);border:1px solid rgba(22,163,74,.3);border-radius:100px;padding:5px 14px;font-size:12.5px;color:#4ADE80;font-weight:600}

section{padding:72px 0}

/* Steps */
.steps-header{text-align:center;margin-bottom:52px}
.steps-header h2{font-size:clamp(24px,3.5vw,36px);font-weight:800;letter-spacing:-1px;margin-bottom:10px}
.steps-header p{font-size:15px;color:var(--sub);max-width:480px;margin:0 auto}

.step-block{display:grid;grid-template-columns:200px 1fr;gap:40px;align-items:start;margin-bottom:48px;padding:36px;background:white;border:1px solid var(--g200);border-radius:20px;box-shadow:0 2px 12px rgba(17,24,39,.06)}
.step-left{text-align:center}
.step-num-big{width:56px;height:56px;background:var(--slate);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;margin:0 auto 12px}
.step-block:nth-child(2) .step-num-big{background:var(--orange)}
.step-block:nth-child(3) .step-num-big{background:var(--green)}
.step-block:nth-child(4) .step-num-big{background:#7C3AED}
.step-block:nth-child(5) .step-num-big{background:#0891B2}
.step-ico{font-size:32px;margin-bottom:8px}
.step-label{font-size:11px;color:var(--sub);font-weight:600;text-transform:uppercase;letter-spacing:.08em;line-height:1.4}

.step-right{}
.step-title{font-size:20px;font-weight:800;margin-bottom:10px;letter-spacing:-.4px}
.step-desc{font-size:15px;color:var(--sub);line-height:1.7;margin-bottom:18px}
.step-details{display:flex;flex-direction:column;gap:8px}
.step-detail{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:var(--g600)}
.step-detail::before{content:'✓';color:var(--orange);font-weight:700;flex-shrink:0;margin-top:1px}

.endpoint-tag{display:inline-flex;align-items:center;gap:6px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:600;color:var(--green);margin-top:12px;font-family:monospace}

/* Visual mockup */
.demo-visual{background:var(--slate);padding:56px 0}
.demo-visual-inner{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
.demo-visual h2{color:white;font-size:clamp(22px,3vw,32px);font-weight:800;letter-spacing:-.8px;margin-bottom:12px}
.demo-visual p{color:rgba(255,255,255,.6);font-size:15px;line-height:1.7}

.flow-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px}
.flow-step{display:flex;align-items:center;gap:12px;padding:12px 14px;background:rgba(255,255,255,.04);border-radius:10px;margin-bottom:8px}
.flow-step:last-child{margin-bottom:0}
.flow-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.fi-1{background:rgba(249,115,22,.2)}
.fi-2{background:rgba(22,163,74,.2)}
.fi-3{background:rgba(124,58,237,.2)}
.fi-4{background:rgba(8,145,178,.2)}
.flow-text{font-size:13px;color:rgba(255,255,255,.75)}
.flow-code{font-size:11px;color:rgba(255,255,255,.4);font-family:monospace;margin-top:2px}

footer{background:var(--slate);padding:36px 0 22px}
.footer-inner{display:flex;align-items:center;justify-content:space-between}
.footer-inner p{font-size:13px;color:rgba(255,255,255,.35)}
.footer-links a{font-size:13px;color:rgba(255,255,255,.35);text-decoration:none;margin-left:20px}

@media(max-width:900px){.step-block{grid-template-columns:1fr}.step-left{text-align:left;display:flex;align-items:center;gap:14px}.step-num-big{margin:0}.demo-visual-inner{grid-template-columns:1fr}}`

const BODY = `<nav>
  <div class="nav-inner">
    <a href="/" class="logo"><div class="logo-icon">⭐</div>esmy</a>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/#tarifs">Tarifs</a>
      <a href="/about">About</a>
    </div>
  </div>
</nav>

<div class="page-hero">
  <div class="container">
    <div class="eyebrow">Google Business Profile API — Demo</div>
    <h1>How Esmy integrates with<br>Google Business Profile</h1>
    <p>Esmy is an approved partner of the Google Business Profile API. Here is a transparent overview of how we connect to your Google listing — securely and officially.</p>
    <div class="compliance-row">
      <span class="cp-tag">✓ Official Google API Partner</span>
      <span class="cp-tag">✓ OAuth 2.0 Secure</span>
      <span class="cp-tag">✓ GDPR Compliant</span>
      <span class="cp-tag">✓ Read-only unless you publish</span>
    </div>
  </div>
</div>

<section>
  <div class="container">
    <div class="steps-header">
      <div style="font-size:12px;font-weight:700;color:var(--orange);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px">Integration flow</div>
      <h2>5 steps — from onboarding to live</h2>
      <p>The entire flow is transparent, reversible, and under your control at all times.</p>
    </div>

    <div class="step-block">
      <div class="step-left">
        <div class="step-ico">🔐</div>
        <div class="step-num-big">1</div>
        <div class="step-label">Merchant Authorization</div>
      </div>
      <div class="step-right">
        <div class="step-title">You authorize Esmy via Google</div>
        <div class="step-desc">During onboarding, you click "Connect Google Business". You are redirected to Google's official OAuth consent screen — the same screen you use to authorize any Google app. You choose which Google Business account to connect. Esmy never sees your Google password.</div>
        <div class="step-details">
          <div class="step-detail">Standard Google OAuth 2.0 flow — no credentials shared with Esmy</div>
          <div class="step-detail">You select exactly which Business Profile to connect</div>
          <div class="step-detail">Revocable at any time from your Google Account settings</div>
          <div class="step-detail">Esmy stores only an encrypted refresh token — never your credentials</div>
        </div>
        <div class="endpoint-tag">→ accounts.list · locations.get</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left">
        <div class="step-ico">📋</div>
        <div class="step-num-big">2</div>
        <div class="step-label">Review Fetching</div>
      </div>
      <div class="step-right">
        <div class="step-title">Esmy reads your incoming reviews</div>
        <div class="step-desc">Every 15 minutes, Esmy polls the Google Business Profile API to fetch new reviews for your connected location. Reviews appear in your Esmy dashboard alongside AI-generated reply suggestions. No reviews are altered or filtered.</div>
        <div class="step-details">
          <div class="step-detail">Reviews fetched every 15 minutes — all ratings (1★ to 5★) displayed</div>
          <div class="step-detail">No reviews are hidden, delayed, or filtered based on rating</div>
          <div class="step-detail">Read-only — Esmy never modifies your existing reviews</div>
          <div class="step-detail">Review data stored securely — AES-256 encryption at rest</div>
        </div>
        <div class="endpoint-tag">→ reviews.list (READ ONLY)</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left">
        <div class="step-ico">🤖</div>
        <div class="step-num-big">3</div>
        <div class="step-label">AI Reply Generation</div>
      </div>
      <div class="step-right">
        <div class="step-title">AI drafts a reply — you approve</div>
        <div class="step-desc">For each new review, Esmy's AI generates a natural, personalized reply in your brand voice. The reply is shown to you in the dashboard for approval. Nothing is published automatically without your explicit action.</div>
        <div class="step-details">
          <div class="step-detail">Reply drafted based on review content, rating, and your tone preferences</div>
          <div class="step-detail">You can edit, regenerate, or discard the suggestion</div>
          <div class="step-detail">Urgent negative reviews trigger an immediate alert</div>
          <div class="step-detail">One-click approval from dashboard or mobile</div>
        </div>
        <div class="endpoint-tag">→ AI processing only — no API call at this step</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left">
        <div class="step-ico">✅</div>
        <div class="step-num-big">4</div>
        <div class="step-label">Reply Publishing</div>
      </div>
      <div class="step-right">
        <div class="step-title">You publish — one click</div>
        <div class="step-desc">When you click "Publish" on an approved reply, Esmy calls the Google Business Profile API to post your response. The reply appears on Google under your business listing within seconds. You can also choose to auto-publish — but that's always opt-in, never the default.</div>
        <div class="step-details">
          <div class="step-detail">Reply only published after your explicit approval — always</div>
          <div class="step-detail">Published via official Google API — not bots or browser automation</div>
          <div class="step-detail">Appears on Google under your name within seconds of publishing</div>
          <div class="step-detail">Full audit log of every reply published via Esmy</div>
        </div>
        <div class="endpoint-tag">→ reviews.updateReply (WRITE — only after approval)</div>
      </div>
    </div>

    <div class="step-block">
      <div class="step-left">
        <div class="step-ico">📊</div>
        <div class="step-num-big">5</div>
        <div class="step-label">Analytics & Ranking</div>
      </div>
      <div class="step-right">
        <div class="step-title">Track your Google ranking progression</div>
        <div class="step-desc">Your Esmy dashboard shows your review count evolution, average rating, response rate, and estimated Local Pack position over time. More reviews + more replies = higher Google ranking in "near me" searches.</div>
        <div class="step-details">
          <div class="step-detail">Weekly review count and rating evolution charts</div>
          <div class="step-detail">Response rate tracked — a key Google ranking signal</div>
          <div class="step-detail">Multi-location view for businesses with several establishments</div>
          <div class="step-detail">Disconnect anytime — your Google reviews are always yours</div>
        </div>
        <div class="endpoint-tag">→ Dashboard analytics · No additional API calls</div>
      </div>
    </div>
  </div>
</section>

<div class="demo-visual">
  <div class="container">
    <div class="demo-visual-inner">
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:2px;margin-bottom:12px">API Flow Summary</div>
        <h2>What Esmy does — and what it never does</h2>
        <p style="margin-top:0;margin-bottom:20px">Esmy uses 4 endpoints only. Every action is transparent, logged, and under merchant control.</p>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7)"><span style="color:#4ADE80">✓</span> Reads reviews (accounts.list, locations.get)</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7)"><span style="color:#4ADE80">✓</span> Fetches new reviews every 15 min (reviews.list)</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.7)"><span style="color:#4ADE80">✓</span> Publishes merchant-approved replies (reviews.updateReply)</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span> Never deletes or flags reviews</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span> Never publishes without approval</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span> Never incentivizes specific ratings</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:rgba(255,255,255,.55)"><span style="color:#EF4444">✗</span> Never shares your data with third parties</div>
        </div>
      </div>
      <div>
        <div class="flow-card">
          <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px">Live API Flow</div>
          <div class="flow-step">
            <div class="flow-icon fi-1">🔐</div>
            <div><div class="flow-text">Merchant connects via Google OAuth</div><div class="flow-code">accounts.list → locations.get</div></div>
          </div>
          <div class="flow-step">
            <div class="flow-icon fi-2">📋</div>
            <div><div class="flow-text">New review detected → dashboard alert</div><div class="flow-code">reviews.list · every 15 min</div></div>
          </div>
          <div class="flow-step">
            <div class="flow-icon fi-3">🤖</div>
            <div><div class="flow-text">AI generates reply suggestion</div><div class="flow-code">Internal · Claude API processing</div></div>
          </div>
          <div class="flow-step">
            <div class="flow-icon fi-4">✅</div>
            <div><div class="flow-text">Merchant approves → published on Google</div><div class="flow-code">reviews.updateReply · after approval</div></div>
          </div>
        </div>
        <div style="margin-top:14px;padding:14px;background:rgba(22,163,74,.12);border:1px solid rgba(22,163,74,.25);border-radius:10px">
          <div style="font-size:12.5px;color:#4ADE80;font-weight:600;margin-bottom:4px">✓ Full compliance with Google's review policies</div>
          <div style="font-size:12px;color:rgba(255,255,255,.5);line-height:1.5">Rewards are given for any rating (1★–5★). We never incentivize positive reviews specifically. No filtering of negative reviews.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<section style="background:white;padding:56px 0;text-align:center">
  <div class="container">
    <h2 style="margin-bottom:12px">Questions about our Google integration?</h2>
    <p style="font-size:15px;color:var(--sub);margin-bottom:24px">Our team is happy to answer any technical or compliance question from Google's review team or our merchants.</p>
    <a href="mailto:contact@esmy.ai" style="display:inline-flex;align-items:center;gap:8px;background:var(--orange);color:white;padding:13px 26px;border-radius:100px;font-size:14px;font-weight:700;text-decoration:none">Contact us · contact@esmy.ai</a>
    <div style="margin-top:20px;font-size:13px;color:var(--sub)">Privacy Policy: <a href="/privacy" style="color:var(--orange)">esmy.ai/privacy</a> · Terms: <a href="/terms" style="color:var(--orange)">esmy.ai/terms</a></div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-inner">
      <p>© 2026 Esmy · contact@esmy.ai</p>
      <div class="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms</a>
      </div>
    </div>
  </div>
</footer>`



export default function Page() {
  return (
    <>
      <Head>
        <title>Esmy — Google Business Profile API Demo</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
      
    </>
  )
}
