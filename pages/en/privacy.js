import Head from 'next/head'
import Link from 'next/link'

export default function PrivacyEN() {
  return (
    <>
      <Head>
        <title>Privacy Policy · Esmy</title>
        <meta name="description" content="Esmy's Privacy Policy — protection of merchant data and compliance with the Google Business Profile API and Google API Services User Data Policy." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>

      <main className="legal">
        <header className="topbar">
          <Link href="/" className="wordmark">Esmy</Link>
          <nav className="langnav">
            <Link href="/privacy" className="lang">FR</Link>
            <span className="sep">·</span>
            <span className="lang active">EN</span>
          </nav>
        </header>

        <article className="doc">
          <p className="kicker">Esmy · esmy.ai</p>
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: May 2026</p>

          <div className="summary">
            <p><strong>In short.</strong> Your data and your customers' data are never sold, nor shared with third parties for commercial purposes. No advertising. Data received from Google is used only to operate your dashboard. You can revoke access and request deletion of your data at any time.</p>
          </div>

          <section>
            <h2>1. Who we are</h2>
            <p>Esmy (esmy.ai) is a project currently being incorporated, operated by a representative domiciled in France. The data controller is Esmy's founder, reachable at <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a> or <a href="mailto:contact@esmy.ai">contact@esmy.ai</a>.</p>
          </section>

          <section>
            <h2>2. Data we collect</h2>
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
          </section>

          <section className="highlight">
            <h2>3. Google Business Profile API integration</h2>

            <p className="limited-use"><strong>Compliance — Limited Use.</strong> Esmy's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>

            <h3>OAuth scope requested</h3>
            <p>Esmy requests only the following scope:</p>
            <p className="code">https://www.googleapis.com/auth/business.manage</p>

            <h3>Endpoints used</h3>
            <ul>
              <li><span className="mono">accounts.list</span> — identify the merchant's Google Business account</li>
              <li><span className="mono">locations.get</span> — retrieve the business name and address</li>
              <li><span className="mono">reviews.list</span> — read published reviews (read-only)</li>
              <li><span className="mono">reviews.updateReply</span> — publish a reply (only after the merchant's approval)</li>
            </ul>

            <h3>How Google data is used</h3>
            <ul>
              <li>Display reviews in the relevant merchant's Esmy dashboard</li>
              <li>Generate and then publish review replies, after the merchant's explicit approval</li>
              <li>Produce statistics internal to that merchant's account only</li>
            </ul>
            <p>Data obtained from the Google API is <strong>never</strong>: shared between different merchants, sold or transferred to third parties, used for advertising purposes, or used to train generalized or human-independent artificial intelligence models.</p>
            <p>Review data is deleted 90 days after the contract ends. The merchant can revoke access at any time from their Google account or from their Esmy account.</p>
          </section>

          <section>
            <h2>4. Purposes of processing</h2>
            <ul>
              <li>Providing the Esmy service (dashboard, AI replies, gamification)</li>
              <li>Account-related communication (alerts, notifications)</li>
              <li>Billing and account management</li>
              <li>Service improvement (aggregated and anonymized data)</li>
            </ul>
            <p>Legal basis: performance of the contract (Art. 6.1.b GDPR) and legitimate interest (Art. 6.1.f GDPR) for service improvement.</p>
          </section>

          <section>
            <h2>5. Data retention</h2>
            <ul>
              <li>Merchant account data: subscription duration + 3 years (legal obligations)</li>
              <li>Google review data: 90 days after contract termination</li>
              <li>End-customer data (optional email): rolling 12 months</li>
              <li>Technical logs: 6 months</li>
            </ul>
          </section>

          <section>
            <h2>6. Security</h2>
            <ul>
              <li>Data at rest encryption: AES-256</li>
              <li>Communications encryption: TLS 1.3</li>
              <li>OAuth tokens stored encrypted — never exposed to the frontend</li>
              <li>Data access restricted to Esmy team members who need it</li>
            </ul>
          </section>

          <section>
            <h2>7. Your rights (GDPR)</h2>
            <p>You have the following rights over your personal data:</p>
            <ul>
              <li><strong>Access</strong> — obtain a copy of your data</li>
              <li><strong>Rectification</strong> — correct inaccurate data</li>
              <li><strong>Erasure</strong> — request deletion of your data</li>
              <li><strong>Portability</strong> — receive your data in a structured format</li>
              <li><strong>Objection</strong> — object to certain processing</li>
            </ul>
            <p>To exercise these rights: <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>. Response within 30 days. You may also lodge a complaint with the French data protection authority, the CNIL (<a href="https://www.cnil.fr/en" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>
          </section>

          <section>
            <h2>8. Data deletion and access revocation</h2>
            <p>At any time, you can:</p>
            <ul>
              <li>Revoke Esmy's access to your Google profile at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>;</li>
              <li>Delete your account and all your data from your Esmy account, or by writing to <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</li>
            </ul>
            <p>Deletion results in the erasure of associated data within 30 days, except for legally required retention.</p>
          </section>

          <section>
            <h2>9. Cookies</h2>
            <p>Esmy uses only cookies strictly necessary for the platform to function (session, authentication). No advertising or third-party tracking cookies are used.</p>
          </section>

          <section>
            <h2>10. Sub-processors</h2>
            <ul>
              <li><strong>Stripe</strong> — payment processing (PCI-DSS compliant)</li>
              <li><strong>Vercel</strong> — web platform hosting</li>
              <li><strong>Supabase</strong> — database and authentication (hosted in the European Union)</li>
              <li><strong>Resend</strong> — transactional email delivery</li>
              <li><strong>Anthropic</strong> — AI API for generating review replies. Data sent through the API is not used to train Anthropic's models.</li>
            </ul>
            <p>All sub-processors are bound by a GDPR-compliant Data Processing Agreement (DPA).</p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>For any question regarding this policy: <a href="mailto:privacy@esmy.ai">privacy@esmy.ai</a>.</p>
          </section>

          <footer className="docfoot">
            <Link href="/">← Back to home</Link>
            <Link href="/en/terms">Terms of Service →</Link>
          </footer>
        </article>
      </main>

      <style jsx>{`
        .legal {
          --creme: #f7f3ea;
          --creme-soft: #efe9db;
          --noir: #1a1714;
          --noir-soft: #4a443c;
          --gold: #a8843e;
          --gold-soft: #d8c8a3;
          --hair: #e2dac9;
          min-height: 100vh;
          background: var(--creme);
          color: var(--noir);
          font-family: 'EB Garamond', Georgia, serif;
          animation: fade .6s ease both;
        }
        @keyframes fade { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: none;} }
        .topbar {
          max-width: 760px; margin: 0 auto; padding: 28px 24px;
          display: flex; align-items: baseline; justify-content: space-between;
          border-bottom: 1px solid var(--hair);
        }
        .wordmark { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 600; letter-spacing: .06em; color: var(--noir); text-decoration: none; }
        .langnav { font-size: 14px; letter-spacing: .08em; }
        .lang { color: var(--noir-soft); text-decoration: none; }
        .lang.active { color: var(--gold); font-weight: 500; }
        .sep { color: var(--gold-soft); margin: 0 8px; }
        .doc { max-width: 760px; margin: 0 auto; padding: 56px 24px 96px; }
        .kicker { font-family: 'EB Garamond', serif; text-transform: uppercase; letter-spacing: .22em; font-size: 12px; color: var(--gold); margin: 0 0 14px; }
        h1 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: clamp(38px, 7vw, 60px); line-height: 1.05; margin: 0 0 12px; }
        .updated { color: var(--noir-soft); font-style: italic; margin: 0 0 36px; }
        .summary { background: var(--creme-soft); border-left: 3px solid var(--gold); padding: 22px 26px; margin: 0 0 48px; border-radius: 2px; }
        .summary p { margin: 0; font-size: 18px; line-height: 1.65; }
        section { margin: 0 0 40px; }
        section.highlight { background: var(--creme-soft); border: 1px solid var(--hair); border-radius: 4px; padding: 30px 32px 12px; margin: 0 0 44px; }
        h2 { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 27px; margin: 0 0 16px; padding-bottom: 10px; border-bottom: 1px solid var(--hair); }
        h3 { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 20px; margin: 26px 0 10px; color: var(--noir); }
        p { font-size: 17px; line-height: 1.75; margin: 0 0 14px; color: var(--noir); }
        ul { margin: 0 0 16px; padding-left: 22px; }
        li { font-size: 17px; line-height: 1.7; margin: 0 0 8px; }
        a { color: var(--gold); text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
        a:hover { color: var(--noir); }
        .limited-use { background: #fff; border: 1px solid var(--gold-soft); border-left: 3px solid var(--gold); padding: 18px 22px; border-radius: 2px; font-size: 16.5px; }
        .code { font-family: ui-monospace, 'SF Mono', Menlo, monospace; font-size: 14.5px; background: var(--noir); color: var(--creme); padding: 12px 16px; border-radius: 4px; overflow-x: auto; margin: 0 0 18px; }
        .mono { font-family: ui-monospace, 'SF Mono', Menlo, monospace; font-size: 14.5px; color: var(--noir-soft); }
        .docfoot { margin-top: 64px; padding-top: 28px; border-top: 1px solid var(--hair); display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 15px; }
        .docfoot a { color: var(--noir-soft); text-decoration: none; }
        .docfoot a:hover { color: var(--gold); }
      `}</style>
    </>
  )
}
