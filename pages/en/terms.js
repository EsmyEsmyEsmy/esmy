// ============================================================================
// pages/index.js — Page racine V2 : redirige selon l'état de connexion
// ============================================================================
// Si connecté -> /dashboard
// Si non connecté -> /login
// ============================================================================

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getSupabaseClient } from '../lib/supabase'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    let mounted = true
    async function checkAuth() {
      try {
        const supabase = getSupabaseClient()
        const { data } = await supabase.auth.getSession()
        if (!mounted) return
        if (data.session) {
          router.replace('/dashboard')
        } else {
          router.replace('/login')
        }
      } catch (e) {
        // If env vars missing, redirect to login (will show error there)
        if (mounted) router.replace('/login')
      }
    }
    checkAuth()
    return () => { mounted = false }
  }, [router])

  return (
    <>
      <Head>
        <title>Esmy</title>
      </Head>
      <style dangerouslySetInnerHTML={{ __html: `
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#111827;min-height:100vh;display:flex;align-items:center;justify-content:center}
        .loader{width:44px;height:44px;border:3px solid rgba(255,255,255,.1);border-top-color:#F97316;border-radius:50%;animation:spin 1s linear infinite}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}} />
      <div className="loader" />
    </>
  )
}
