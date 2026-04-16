import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'

export default function Confirm() {
  const [status, setStatus] = useState('loading') // loading | success | error

  useEffect(() => {
    const hash = window.location.hash
    if (hash.includes('error')) {
      setStatus('error')
      return
    }
    // Supabase auto-handles the token in the URL hash
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        setStatus('success')
        setTimeout(() => { window.location.href = '/dashboard' }, 2500)
      }
    })
    // If no event after 3s, check session
    setTimeout(async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        setStatus('success')
        setTimeout(() => { window.location.href = '/dashboard' }, 2500)
      } else if (status === 'loading') {
        setStatus('error')
      }
    }, 3000)
  }, [])

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#111827;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
    .card{background:#1F2937;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:48px 44px;width:100%;max-width:420px;text-align:center;box-shadow:0 24px 80px rgba(0,0,0,.4)}
    .icon{font-size:56px;margin-bottom:20px;display:block}
    h1{font-size:24px;font-weight:800;color:white;margin-bottom:10px;letter-spacing:-.5px}
    p{font-size:15px;color:rgba(255,255,255,.5);line-height:1.65;margin-bottom:20px}
    .btn{display:inline-flex;align-items:center;background:#F97316;color:white;border:none;padding:13px 28px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;text-decoration:none;transition:background .2s}
    .btn:hover{background:#EA6C0A}
    .loader{width:40px;height:40px;border:3px solid rgba(255,255,255,.1);border-top-color:#F97316;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 20px}
    @keyframes spin{to{transform:rotate(360deg)}}
    .logo{display:flex;align-items:center;gap:0;justify-content:center;margin-bottom:32px;font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:700;letter-spacing:-.02em;color:white;text-decoration:none}
    
    
    .redirect{font-size:13px;color:rgba(255,255,255,.3);margin-top:12px}
  `

  return (
    <>
      <Head>
        <title>Confirmation — Esmy</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="card">
        <div className="logo">
          esmy<span style={{color:'#F97316',marginLeft:'-2px',letterSpacing:'-.5px'}}>.</span>
        </div>

        {status === 'loading' && (
          <>
            <div className="loader"></div>
            <h1>Confirmation en cours…</h1>
            <p>On vérifie votre email, ça prend quelques secondes.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <span className="icon">🎉</span>
            <h1>Bienvenue sur Esmy !</h1>
            <p>Votre compte est confirmé. Vous allez être redirigé vers votre tableau de bord dans quelques secondes.</p>
            <a href="/dashboard" className="btn">Accéder à mon dashboard →</a>
            <p className="redirect">Redirection automatique dans 3 secondes…</p>
          </>
        )}

        {status === 'error' && (
          <>
            <span className="icon">⚠️</span>
            <h1>Lien expiré</h1>
            <p>Ce lien de confirmation n'est plus valide. Créez un nouveau compte ou reconnectez-vous pour recevoir un nouveau lien.</p>
            <a href="/login" className="btn">Retourner à la connexion</a>
          </>
        )}
      </div>
    </>
  )
}
