import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Variables Supabase manquantes. Contactez le support.')
  return createClient(url, key)
}

export default function Login() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPw, setShowPw] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setSuccess(''); setLoading(true)
    try {
      if (mode === 'signup') {
        const { error } = await getSupabase().auth.signUp({
          email, password,
          options: { data: { full_name: name } }
        })
        if (error) throw error
        setSuccess('Compte créé ! Vérifiez votre email pour confirmer votre inscription.')
      } else {
        const { error } = await getSupabase().auth.signInWithPassword({ email, password })
        if (error) throw error
        window.location.href = '/dashboard'
      }
    } catch (err) {
      const msg = err.message
      setError(
        msg === 'Invalid login credentials' ? 'Email ou mot de passe incorrect.' :
        msg === 'User already registered' ? 'Un compte existe déjà avec cet email.' :
        msg
      )
    } finally { setLoading(false) }
  }

  async function googleLogin() {
    await getSupabase().auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/dashboard' }
    })
  }

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#111827;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;position:relative;overflow:hidden}
    body::before{content:'';position:fixed;top:-200px;right:-200px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.1) 0%,transparent 70%);pointer-events:none}
    .card{background:#1F2937;border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:48px 44px;width:100%;max-width:420px;box-shadow:0 24px 80px rgba(0,0,0,.4);position:relative;z-index:1}
    .logo{display:flex;align-items:center;gap:0;margin-bottom:32px;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:700;letter-spacing:-.02em}
    .logo-icon{width:36px;height:36px;background:#F97316;border-radius:9px;display:flex;align-items:center;justify-content:center}
    
    h1{font-size:24px;font-weight:800;color:white;margin-bottom:6px;letter-spacing:-.5px;text-align:center}
    .sub{font-size:14px;color:rgba(255,255,255,.45);text-align:center;margin-bottom:32px}
    label{display:block;font-size:12px;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px}
    .field{margin-bottom:16px}
    input{width:100%;padding:12px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-family:'Plus Jakarta Sans';font-size:14px;color:white;outline:none;transition:border-color .15s}
    input:focus{border-color:#F97316;background:rgba(255,255,255,.08)}
    input::placeholder{color:rgba(255,255,255,.25)}
    .pw-wrap{position:relative}
    .pw-toggle{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(255,255,255,.35);cursor:pointer;font-size:16px;padding:0;line-height:1}
    .btn{width:100%;padding:14px;background:#F97316;color:white;border:none;border-radius:10px;font-family:'Plus Jakarta Sans';font-size:15px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px}
    .btn:hover{background:#EA6C0A}
    .btn:disabled{opacity:.6;cursor:not-allowed}
    .divider{display:flex;align-items:center;gap:12px;margin:20px 0}
    .divider hr{flex:1;border:none;border-top:1px solid rgba(255,255,255,.1)}
    .divider span{font-size:12px;color:rgba(255,255,255,.3);white-space:nowrap}
    .google-btn{width:100%;padding:12px;background:white;border:none;border-radius:10px;font-family:'Plus Jakarta Sans';font-size:14px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:background .15s;color:#111827}
    .google-btn:hover{background:#f5f5f5}
    .error{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;padding:10px 14px;font-size:13px;color:#FCA5A5;margin-bottom:16px}
    .success{background:rgba(22,163,74,.1);border:1px solid rgba(22,163,74,.25);border-radius:8px;padding:10px 14px;font-size:13px;color:#86EFAC;margin-bottom:16px}
    .toggle{text-align:center;margin-top:20px;font-size:13.5px;color:rgba(255,255,255,.4)}
    .toggle button{background:none;border:none;color:#F97316;font-weight:600;cursor:pointer;font-size:13.5px;font-family:'Plus Jakarta Sans'}
    .toggle button:hover{text-decoration:underline}
    .back{display:block;text-align:center;margin-top:16px;font-size:13px;color:rgba(255,255,255,.3);text-decoration:none}
    .back:hover{color:rgba(255,255,255,.6)}
    @media(max-width:480px){.card{padding:36px 24px}}
  `

  return (
    <>
      <Head>
        <title>{mode === 'login' ? 'Connexion' : 'Créer un compte'} — Esmy</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="card">
        <div className="logo">
esmy<span style={{color:'rgba(255,255,255,.35)',marginLeft:'-3px',letterSpacing:'-.5px'}}>.</span>
        </div>

        <h1>{mode === 'login' ? 'Bon retour 👋' : 'Créer un compte'}</h1>
        <p className="sub">{mode === 'login' ? 'Connectez-vous à votre espace commerçant' : 'Commencez votre essai gratuit de 14 jours'}</p>

        <button className="google-btn" onClick={googleLogin}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuer avec Google
        </button>

        <div className="divider"><hr /><span>ou par email</span><hr /></div>

        {error && <div className="error">⚠ {error}</div>}
        {success && <div className="success">✓ {success}</div>}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="field">
              <label>Votre nom</label>
              <input type="text" placeholder="Marie Dupont" value={name} onChange={e => setName(e.target.value)} required />
            </div>
          )}
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="contact@moncommerce.fr" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label>Mot de passe</label>
            <div className="pw-wrap">
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
                style={{ paddingRight: '42px' }}
              />
              <button type="button" className="pw-toggle" onClick={() => setShowPw(!showPw)}>
                {showPw ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Chargement…' : mode === 'login' ? 'Se connecter' : 'Créer mon compte gratuit'}
          </button>
        </form>

        <div className="toggle">
          {mode === 'login' ? (
            <>Pas encore client ?{' '}
              <button onClick={() => { setMode('signup'); setError(''); setSuccess('') }}>Créer un compte →</button>
            </>
          ) : (
            <>Déjà un compte ?{' '}
              <button onClick={() => { setMode('login'); setError(''); setSuccess('') }}>Se connecter →</button>
            </>
          )}
        </div>
        <a href="/" className="back">← Retour à esmy.ai</a>
      </div>
    </>
  )
}
