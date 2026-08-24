// ============================================================================
// pages/essai.js (site vitrine esmy.ai) — L'adresse des supports imprimés
// ============================================================================
// esmy.ai/essai est l'URL encodée dans les QR codes (cartes de visite,
// flyers...). Elle ne change JAMAIS — c'est sa raison d'être : les supports
// imprimés ne périment pas.
//
// Elle redirige vers l'inscription de l'app, en mode "créer un compte".
// Le jour où le dashboard bascule sur app.esmy.ai : changer APP_URL ici,
// et toutes les cartes déjà imprimées suivent automatiquement.
// ============================================================================

const APP_URL = 'https://app.esmy.ai'

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `${APP_URL}/login?mode=signup`,
      permanent: false, // 307 — jamais mis en cache
    },
  }
}

export default function EssaiRedirect() {
  return null
}
