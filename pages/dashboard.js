import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'

export default function Dashboard() {
  const [checking, setChecking] = useState(true)
  const [iframeSrc, setIframeSrc] = useState(null)

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        window.location.href = '/login'
        return
      }
      // Pass access token to iframe via URL param so it can make authenticated requests
      const token = data.session.access_token
      const userId = data.session.user.id
      setIframeSrc(`/dashboard-app.html?auth=1&token=${encodeURIComponent(token)}&uid=${userId}`)
      setChecking(false)
    })
  }, [])

  if (checking) return (
    <>
      <Head><title>Esmy — Dashboard</title></Head>
      <style dangerouslySetInnerHTML={{ __html: `
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#111827;min-height:100vh;display:flex;align-items:center;justify-content:center}
        .loader{width:44px;height:44px;border:3px solid rgba(255,255,255,.1);border-top-color:#F97316;border-radius:50%;animation:spin 1s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}} />
      <div className="loader" />
    </>
  )

  if (!iframeSrc) return null

  return (
    <iframe
      src={iframeSrc}
      style={{ width: '100vw', height: '100vh', border: 'none', display: 'block' }}
      title="Esmy Dashboard"
    />
  )
}
