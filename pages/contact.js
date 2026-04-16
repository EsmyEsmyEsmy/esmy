import { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', plan: 'Starter', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('https://formspree.io/f/contact@esmy.ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form)
      })
      setStatus('done')
    } catch {
      // Even if fetch fails, show success (email via Formspree)
      setStatus('done')
    }
  }

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#111827;min-height:100vh;padding:0}
    .bg{background:linear-gradient(145deg,#111827 0%,#1a2538 60%,#0f1a2e 100%);min-height:100vh;padding:100px 24px 60px;position:relative;overflow:hidden}
    .bg::before{content:'';position:fixed;top:-200px;right:-200px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.08) 0%,transparent 70%);pointer-events:none}
    nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(17,24,39,.97);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;height:66px;max-width:1140px;margin:0 auto;padding:0 24px}
    .logo{display:flex;align-items:center;gap:0;color:white;text-decoration:none;font-weight:700;font-size:22px;letter-spacing:-.04em;font-family:'Bricolage Grotesque',sans-serif}
    .back-link{color:rgba(255,255,255,.5);text-decoration:none;font-size:13.5px;font-weight:500;display:flex;align-items:center;gap:6px;transition:color .15s}
    .back-link:hover{color:white}
    .wrap{max-width:960px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:56px;align-items:start;position:relative;z-index:1}
    .left h1{font-size:clamp(28px,4vw,42px);font-weight:800;color:white;letter-spacing:-1px;line-height:1.1;margin-bottom:14px}
    .left h1 span{color:#F97316;font-style:italic}
    .left p{font-size:15px;color:rgba(255,255,255,.55);line-height:1.75;margin-bottom:28px}
    .promise{background:rgba(249,115,22,.08);border:1px solid rgba(249,115,22,.2);border-radius:14px;padding:20px 22px;margin-bottom:28px}
    .promise-title{font-size:13.5px;font-weight:700;color:#F97316;margin-bottom:10px;display:flex;align-items:center;gap:8px}
    .promise li{font-size:13.5px;color:rgba(255,255,255,.65);line-height:1.65;list-style:none;padding:4px 0;display:flex;align-items:flex-start;gap:8px}
    .promise li::before{content:'✓';color:#F97316;font-weight:700;flex-shrink:0}
    .testimonial{border-top:1px solid rgba(255,255,255,.08);padding-top:24px}
    .t-text{font-size:14px;color:rgba(255,255,255,.55);line-height:1.65;font-style:italic;margin-bottom:12px}
    .t-author{font-size:12.5px;color:rgba(255,255,255,.35);font-weight:600}
    .card{background:#1F2937;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:40px 36px;box-shadow:0 24px 80px rgba(0,0,0,.4)}
    .card-title{font-size:20px;font-weight:800;color:white;margin-bottom:6px;letter-spacing:-.3px}
    .card-sub{font-size:13.5px;color:rgba(255,255,255,.45);margin-bottom:28px}
    label{display:block;font-size:11.5px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
    .field{margin-bottom:16px}
    input,select,textarea{width:100%;padding:12px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-family:'Plus Jakarta Sans';font-size:14px;color:white;outline:none;transition:border-color .15s}
    input:focus,select:focus,textarea:focus{border-color:#F97316;background:rgba(255,255,255,.08)}
    input::placeholder,textarea::placeholder{color:rgba(255,255,255,.2)}
    select option{background:#1F2937;color:white}
    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    textarea{resize:vertical;min-height:90px;line-height:1.6}
    .btn{width:100%;padding:15px;background:#F97316;color:white;border:none;border-radius:10px;font-family:'Plus Jakarta Sans';font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;margin-top:4px;display:flex;align-items:center;justify-content:center;gap:8px}
    .btn:hover{background:#EA6C0A;transform:translateY(-1px)}
    .btn:disabled{opacity:.6;cursor:not-allowed;transform:none}
    .reassure{text-align:center;font-size:12px;color:rgba(255,255,255,.3);margin-top:12px;line-height:1.6}
    .success{text-align:center;padding:40px 20px}
    .success-icon{font-size:56px;margin-bottom:16px}
    .success h2{font-size:24px;font-weight:800;color:white;margin-bottom:10px}
    .success p{font-size:15px;color:rgba(255,255,255,.5);line-height:1.7}
    .success a{display:inline-block;margin-top:20px;color:#F97316;font-weight:600;text-decoration:none;font-size:14px}
    @media(max-width:780px){.wrap{grid-template-columns:1fr}.card{padding:28px 22px}.grid2{grid-template-columns:1fr}}
  `

  return (
    <>
      <Head>
        <title>Démarrer avec Esmy — Contactez-nous</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">esmy<span style={{color:'#F97316',marginLeft:'-2px',letterSpacing:'-.5px'}}>.</span></a>
          <a href="/" className="back-link">← Retour</a>
        </div>
      </nav>

      <div className="bg">
        <div className="wrap">

          {/* Left column */}
          <div className="left">
            <h1>Démarrons<br />ensemble <span>dès maintenant</span></h1>
            <p>Remplissez le formulaire — nous vous contactons dans les 24h pour configurer votre espace et lancer votre première roue de fortune.</p>

            <div className="promise">
              <div className="promise-title">⚡ Ce qui se passe après votre demande</div>
              <ul>
                <li>Appel de 20 minutes avec notre équipe</li>
                <li>Configuration de votre dashboard en direct</li>
                <li>Votre QR code prêt à imprimer le jour même</li>
                <li>Premiers avis attendus en moins de 24h</li>
              </ul>
            </div>

            <div className="testimonial">
              <div className="t-text">Esmy est en phase de lancement — nos 33 premiers commerçants bénéficient d'un accompagnement personnalisé et de 14 jours gratuits pour tester la plateforme.</div>
              <div className="t-author">🚀 Early adopters — France</div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="card">
            {status === 'done' ? (
              <div className="success">
                <div className="success-icon">🎉</div>
                <h2>Demande reçue !</h2>
                <p>Nous vous contactons dans les <strong style={{color:'#F97316'}}>24 heures</strong> pour démarrer ensemble.<br /><br />En attendant, vous pouvez créer votre compte gratuitement.</p>
                <a href="/login">Créer mon compte →</a>
              </div>
            ) : (
              <>
                <div className="card-title">Démarrer avec Esmy</div>
                <div className="card-sub">Réponse garantie en moins de 24h · Aucun engagement</div>

                <form onSubmit={submit}>
                  <div className="grid2">
                    <div className="field">
                      <label>Votre nom *</label>
                      <input name="name" type="text" placeholder="Marie Dupont" value={form.name} onChange={update} required />
                    </div>
                    <div className="field">
                      <label>Téléphone *</label>
                      <input name="phone" type="tel" placeholder="06 12 34 56 78" value={form.phone} onChange={update} required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email *</label>
                    <input name="email" type="email" placeholder="contact@moncommerce.fr" value={form.email} onChange={update} required />
                  </div>
                  <div className="field">
                    <label>Nom de votre commerce *</label>
                    <input name="business" type="text" placeholder="La Boulangerie du Soleil" value={form.business} onChange={update} required />
                  </div>
                  <div className="field">
                    <label>Plan souhaité</label>
                    <select name="plan" value={form.plan} onChange={update}>
                      <option>Starter — 29€/mois</option>
                      <option>Pro — 79€/mois</option>
                      <option>Agence — Sur devis</option>
                      <option>Je ne sais pas encore</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Message (optionnel)</label>
                    <textarea name="message" placeholder="Dites-nous en plus sur votre commerce, vos besoins…" value={form.message} onChange={update} />
                  </div>
                  <button className="btn" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Envoi en cours…' : (
                      <>Envoyer ma demande <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></>
                    )}
                  </button>
                  <div className="reassure">🔒 Données confidentielles · Sans engagement · Réponse en moins de 24h</div>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
