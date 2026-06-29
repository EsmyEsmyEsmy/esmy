// ============================================================================
// pages/dashboard/connexion-google.js
// ============================================================================
// Page UI dashboard : "Connecter Google Business"
//   - Si non connecté : bouton de connexion (déclenche le flow OAuth)
//   - Si connecté    : email Google + bouton "Déconnecter"
//   - Affiche les permissions demandées
//   - Affiche les erreurs OAuth via ?error= dans l'URL
//
// Style : cohérent avec le reste du dashboard Esmy (slate dark + orange)
// ============================================================================

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Head from 'next/head'

const ERROR_MESSAGES = {
  invalid_state: "Le token de sécurité est invalide. Veuillez réessayer.",
  state_expired: "Le délai d'autorisation a expiré. Veuillez réessayer.",
  state_already_used: "Ce lien d'autorisation a déjà été utilisé.",
  no_refresh_token: "Google n'a pas fourni de refresh token. Veuillez réessayer.",
  token_storage_failed: "Erreur de stockage du token. Contactez le support.",
  state_storage_failed: "Erreur technique. Veuillez réessayer dans un instant.",
  access_denied: "Vous avez refusé l'autorisation. Vous pouvez réessayer quand vous voulez.",
  server_error: "Une erreur serveur s'est produite. Réessayez ou contactez le support.",
  missing_params: "Paramètres manquants dans la réponse Google.",
}

export default function ConnexionGoogle() {
  const router = useRouter()
  const [supabase, setSupabase] = useState(null)
  const [loading, setLoading] = useState(true)
  const [connectedTo, setConnectedTo] = useState(null) // { google_email, connected_at }
  const [error, setError] = useState(null)
  const [disconnecting, setDisconnecting] = useState(false)

  // ─── Initialisation Supabase ───────────────────────────────────
  useEffect(() => {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    setSupabase(client)
  }, [])

  // ─── Récupère le statut de connexion + lit l'erreur URL ────────
  useEffect(() => {
    if (!supabase) return

    const errorParam = router.query.error
    if (errorParam) {
      setError(ERROR_MESSAGES[errorParam] || `Erreur : ${errorParam}`)
    }

    async function fetchStatus() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.replace('/login?next=/dashboard/connexion-google')
        return
      }

      const { data, error } = await supabase
        .from('google_oauth_tokens')
        .select('google_email, created_at')
        .eq('user_id', session.user.id)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()

      if (!error && data) {
        setConnectedTo({
          google_email: data.google_email,
          connected_at: data.created_at,
        })
      }
      setLoading(false)
    }

    fetchStatus()
  }, [supabase, router])

  // ─── Action : Connecter ────────────────────────────────────────
  async function handleConnect() {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/login?next=/dashboard/connexion-google')
      return
    }

    // On passe le token Supabase pour que /start.js authentifie le user
    // Note : on ne peut pas faire un fetch + redirect facilement, donc
    // on passe par un form invisible avec window.location.href
    window.location.href =
      `/api/auth/google-business/start?redirect_to=/dashboard/avis`
    // Le start.js lira le cookie de session Supabase (set côté client)
  }

  // ─── Action : Déconnecter ──────────────────────────────────────
  async function handleDisconnect() {
    if (!confirm("Êtes-vous sûr·e de vouloir déconnecter votre fiche Google de Esmy ?")) {
      return
    }

    setDisconnecting(true)
    const { data: { session } } = await supabase.auth.getSession()

    const res = await fetch('/api/auth/google-business/disconnect', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    })

    if (res.ok) {
      setConnectedTo(null)
      setError(null)
    } else {
      setError("Impossible de déconnecter pour le moment. Réessayez.")
    }
    setDisconnecting(false)
  }

  return (
    <>
      <Head>
        <title>Connexion Google Business — Esmy</title>
      </Head>

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.eyebrow}>Intégrations</div>
            <h1 style={styles.h1}>Connexion Google Business</h1>
            <p style={styles.subtitle}>
              Connectez votre fiche Google à Esmy pour gérer vos avis et y répondre
              directement depuis votre tableau de bord.
            </p>
          </div>

          {error && (
            <div style={styles.errorBox}>
              <span style={styles.errorIcon}>⚠</span>
              <span>{error}</span>
            </div>
          )}

          {loading && (
            <div style={styles.card}>
              <p style={styles.loadingText}>Chargement...</p>
            </div>
          )}

          {!loading && connectedTo && (
            <div style={styles.cardConnected}>
              <div style={styles.statusRow}>
                <div style={styles.statusDot} />
                <div>
                  <div style={styles.statusLabel}>Compte connecté</div>
                  <div style={styles.statusEmail}>{connectedTo.google_email}</div>
                </div>
              </div>
              <div style={styles.metaRow}>
                <span>Connexion établie le{' '}
                  {new Date(connectedTo.connected_at).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <button
                onClick={handleDisconnect}
                disabled={disconnecting}
                style={styles.btnDanger}
              >
                {disconnecting ? 'Déconnexion en cours...' : 'Déconnecter'}
              </button>
            </div>
          )}

          {!loading && !connectedTo && (
            <div style={styles.card}>
              <h2 style={styles.h2}>Pas encore connecté</h2>
              <p style={styles.bodyText}>
                En vous connectant, vous autorisez Esmy à :
              </p>
              <ul style={styles.permList}>
                <li style={styles.permItem}>
                  Lire les avis Google de votre établissement
                </li>
                <li style={styles.permItem}>
                  Répondre à vos avis (toujours sur votre validation)
                </li>
                <li style={styles.permItem}>
                  Voir les informations publiques de votre fiche
                </li>
              </ul>
              <p style={styles.smallText}>
                Vos identifiants Google ne sont jamais partagés avec Esmy. Vous pouvez
                révoquer cette autorisation à tout moment.
              </p>
              <button onClick={handleConnect} style={styles.btnPrimary}>
                <GoogleIcon />
                <span>Connecter ma fiche Google</span>
              </button>
            </div>
          )}

          <div style={styles.footer}>
            <p>
              En vous connectant, vous acceptez nos{' '}
              <a href="/terms" style={styles.link}>Conditions d'utilisation</a>
              {' '}et notre{' '}
              <a href="/privacy" style={styles.link}>Politique de confidentialité</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Petit composant : logo Google (SVG inline) ─────────────────────
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

// ─── Styles inline (cohérent avec ton style esmy.ai) ───────────────
const styles = {
  page: {
    minHeight: '100vh',
    background: '#0f172a',
    color: '#e2e8f0',
    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
    padding: '40px 24px',
  },
  container: {
    maxWidth: 640,
    margin: '0 auto',
  },
  header: {
    marginBottom: 32,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#F97316',
    fontWeight: 600,
    marginBottom: 8,
  },
  h1: {
    fontSize: 32,
    fontWeight: 700,
    margin: '0 0 12px',
    fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", sans-serif',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#94a3b8',
    lineHeight: 1.6,
    margin: 0,
  },
  errorBox: {
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#fca5a5',
    padding: '14px 18px',
    borderRadius: 10,
    marginBottom: 20,
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    fontSize: 14,
  },
  errorIcon: {
    fontSize: 18,
  },
  card: {
    background: '#1e293b',
    border: '1px solid #334155',
    padding: '28px 28px 32px',
    borderRadius: 16,
  },
  cardConnected: {
    background: '#1e293b',
    border: '1px solid #22c55e',
    padding: '28px',
    borderRadius: 16,
  },
  statusRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  statusDot: {
    width: 12,
    height: 12,
    background: '#22c55e',
    borderRadius: '50%',
    boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
  },
  statusLabel: {
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#22c55e',
    fontWeight: 600,
    marginBottom: 4,
  },
  statusEmail: {
    fontSize: 17,
    color: '#f1f5f9',
    fontWeight: 600,
  },
  metaRow: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 24,
  },
  h2: {
    fontSize: 20,
    fontWeight: 600,
    margin: '0 0 12px',
    color: '#f1f5f9',
  },
  bodyText: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 1.6,
    marginBottom: 12,
  },
  permList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px',
  },
  permItem: {
    fontSize: 14,
    color: '#cbd5e1',
    padding: '8px 0 8px 26px',
    position: 'relative',
  },
  smallText: {
    fontSize: 13,
    color: '#94a3b8',
    lineHeight: 1.5,
    margin: '0 0 24px',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: '#ffffff',
    color: '#1f2937',
    border: 'none',
    padding: '12px 22px',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnDanger: {
    background: 'transparent',
    color: '#fca5a5',
    border: '1px solid rgba(239, 68, 68, 0.4)',
    padding: '10px 18px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  loadingText: {
    color: '#94a3b8',
    fontSize: 14,
    margin: 0,
  },
  footer: {
    marginTop: 24,
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 1.5,
  },
  link: {
    color: '#F97316',
    textDecoration: 'none',
  },
}
