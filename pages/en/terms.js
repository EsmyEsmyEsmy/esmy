import Head from 'next/head'
import Link from 'next/link'

export default function TermsEN() {
  return (
    <>
      <Head>
        <title>Terms of Service · Esmy</title>
        <meta name="description" content="Terms of Service for the Esmy platform (esmy.ai)." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>

      <main className="legal">
        <header className="topbar">
          <Link href="/" className="wordmark">Esmy</Link>
          <nav className="langnav">
            <Link href="/terms" className="lang">FR</Link>
            <span className="sep">·</span>
            <span className="lang active">EN</span>
          </nav>
        </header>

        <article className="doc">
          <p className="kicker">Esmy · esmy.ai</p>
          <h1>Terms of Service</h1>
          <p className="updated">Last updated: May 2026 · Applicable to all users of esmy.ai</p>

          <section>
            <h2>1. Purpose</h2>
            <p>These Terms of Service ("Terms") govern access to and use of the Esmy platform (esmy.ai), operated by Esmy, a project currently being incorporated, whose representative is domiciled in France. By accessing the platform and creating an account, you accept these Terms in full.</p>
          </section>

          <section>
            <h2>2. Service description</h2>
            <p>Esmy is a SaaS platform for local merchants. It enables:</p>
            <ul>
              <li>Collection of Google reviews through a gamification mechanic (wheel of fortune)</li>
              <li>Automatic generation of review replies using artificial intelligence</li>
              <li>Publishing of replies to Google Business Profile via the official Google API</li>
              <li>Reputation performance tracking through a dashboard</li>
            </ul>
          </section>

          <section>
            <h2>3. Registration and account</h2>
            <p>Access to the service requires creating an account with a valid email address. You are responsible for the confidentiality of your credentials and for any activity carried out under your account.</p>
            <p>You must be a legal entity or an individual acting in a professional capacity (merchant, business manager) to use Esmy.</p>
          </section>

          <section>
            <h2>4. Use of the Google Business Profile API</h2>
            <p>By connecting your Google account to Esmy, you authorize Esmy to:</p>
            <ul>
              <li>Read reviews published on your Google Business Profile</li>
              <li>Publish replies to your reviews after your explicit approval</li>
            </ul>
            <p>Esmy does not use the API to edit, delete, or hide reviews. Access can be revoked at any time from your Google account.</p>
            <p>Esmy's use of the API complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements, as well as with Google's review policies.</p>
          </section>

          <section className="highlight">
            <h2>5. Google compliance &amp; code of conduct</h2>
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
          </section>

          <section>
            <h2>6. Subscription and payment</h2>
            <p>Esmy is offered as a monthly subscription. Current pricing is shown at <a href="https://esmy.ai/#tarifs">esmy.ai/#tarifs</a>. Payment is processed by Stripe. No banking information is stored by Esmy.</p>
            <h3>Termination</h3>
            <p>You may cancel your subscription at any time from your account area. Cancellation takes effect at the end of the current subscription period. No pro-rata refund is issued except where legally required.</p>
          </section>

          <section>
            <h2>7. Service availability</h2>
            <p>Esmy strives to ensure maximum service availability (SLA target: 99.5%). Interruptions may occur for maintenance or in the event of technical failure. Esmy cannot be held liable for the unavailability of the Google Business Profile API.</p>
          </section>

          <section>
            <h2>8. Intellectual property</h2>
            <p>The Esmy platform, its code, interfaces, and content are the exclusive property of Esmy and protected by intellectual property law. The user is granted a personal, non-exclusive, non-transferable right of use.</p>
          </section>

          <section>
            <h2>9. Liability for AI-generated content</h2>
            <p>Esmy provides a feature for automatically generating review replies using artificial intelligence. As such:</p>
            <ul>
              <li>The user remains solely responsible for the content they choose to publish on their Google Business Profile, whether written manually or generated by Esmy's AI.</li>
              <li>No AI-generated reply is published without the merchant's explicit, prior approval. By clicking "Publish", the user validates and assumes full responsibility for the published content.</li>
              <li>The user agrees to review and verify generated replies before publication. Esmy cannot be held liable for errors, inaccuracies, or inappropriate wording contained in a reply approved and published by the user.</li>
              <li>The user warrants that content published via Esmy does not violate any applicable law or third-party right, and complies with Google Business Profile's code of conduct.</li>
            </ul>
          </section>

          <section>
            <h2>10. Limitation of liability</h2>
            <p>Esmy cannot be held liable for:</p>
            <ul>
              <li>Any loss of Google ranking resulting from changes to Google's algorithm</li>
              <li>Reviews published by your customers and their content</li>
              <li>The unavailability of the Google Business Profile API</li>
              <li>Indirect losses, loss of revenue, or commercial damages</li>
            </ul>
            <p>Esmy's liability is limited to the amount actually received during the 3 months preceding the damage.</p>
          </section>

          <section>
            <h2>11. Modification of the Terms</h2>
            <p>Esmy reserves the right to modify these Terms at any time. Users will be notified by email at least 15 days before substantial changes take effect. Continued use of the service after that date constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2>12. Governing law and disputes</h2>
            <p>These Terms are governed by French law. In the event of a dispute, the parties undertake to seek an amicable solution before any legal action. Failing agreement, the competent French courts will have jurisdiction.</p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>For any question regarding these Terms: <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
          </section>

          <footer className="docfoot">
            <Link href="/">← Back to home</Link>
            <Link href="/en/privacy">Privacy Policy →</Link>
          </footer>
        </article>
      </main>

      <style jsx>{`
        .legal {
          --creme: #f7f3ea; --creme-soft: #efe9db; --noir: #1a1714; --noir-soft: #4a443c;
          --gold: #a8843e; --gold-soft: #d8c8a3; --hair: #e2dac9;
          min-height: 100vh; background: var(--creme); color: var(--noir);
          font-family: 'EB Garamond', Georgia, serif; animation: fade .6s ease both;
        }
        @keyframes fade { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: none;} }
        .topbar { max-width: 760px; margin: 0 auto; padding: 28px 24px; display: flex; align-items: baseline; justify-content: space-between; border-bottom: 1px solid var(--hair); }
        .wordmark { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; letter-spacing: .06em; color: var(--noir); text-decoration: none; }
        .langnav { font-size: 14px; letter-spacing: .08em; }
        .lang { color: var(--noir-soft); text-decoration: none; }
        .lang.active { color: var(--gold); font-weight: 500; }
        .sep { color: var(--gold-soft); margin: 0 8px; }
        .doc { max-width: 760px; margin: 0 auto; padding: 56px 24px 96px; }
        .kicker { font-family: 'EB Garamond', serif; text-transform: uppercase; letter-spacing: .22em; font-size: 12px; color: var(--gold); margin: 0 0 14px; }
        h1 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(36px, 6.4vw, 56px); line-height: 1.07; margin: 0 0 12px; }
        .updated { color: var(--noir-soft); font-style: italic; margin: 0 0 36px; }
        section { margin: 0 0 40px; }
        section.highlight { background: var(--creme-soft); border: 1px solid var(--hair); border-radius: 4px; padding: 30px 32px 12px; margin: 0 0 44px; }
        h2 { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 27px; margin: 0 0 16px; padding-bottom: 10px; border-bottom: 1px solid var(--hair); }
        h3 { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 20px; margin: 26px 0 10px; color: var(--noir); }
        p { font-size: 17px; line-height: 1.75; margin: 0 0 14px; color: var(--noir); }
        ul { margin: 0 0 16px; padding-left: 22px; }
        li { font-size: 17px; line-height: 1.7; margin: 0 0 8px; }
        a { color: var(--gold); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
        a:hover { color: var(--noir); }
        .docfoot { margin-top: 64px; padding-top: 28px; border-top: 1px solid var(--hair); display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 15px; }
        .docfoot a { color: var(--noir-soft); text-decoration: none; }
        .docfoot a:hover { color: var(--gold); }
      `}</style>
    </>
  )
}
