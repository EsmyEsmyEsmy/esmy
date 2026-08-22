// ============================================================================
// pages/login.js (site vitrine esmy.ai) — Redirection vers l'app
// ============================================================================
// Le dashboard vit sur son propre domaine. Une session créée ici ne se
// transmettrait pas là-bas (domaines différents = stockages séparés).
// La seule architecture saine : UNE page de connexion, celle de l'app.
// Cette page redirige donc côté serveur — instantané, sans écran blanc.
//
// Le jour où le dashboard bascule sur app.esmy.ai : changer APP_URL ici.
// ============================================================================

const APP_URL = 'https://version-2-jet.vercel.app'

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `${APP_URL}/login`,
      permanent: false, // 307 — jamais mis en cache, on pourra changer la cible
    },
  }
}

export default function LoginRedirect() {
  return null
}
