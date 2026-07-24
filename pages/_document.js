// ============================================================================
// pages/_document.js — En-tête global du site Esmy
// ============================================================================
// S'applique automatiquement à TOUTES les pages (présentes et futures).
//
// Contient :
//  1. Les favicons (onglet navigateur, iOS, Android)
//  2. Le remplacement du logo texte "esmy." par le vrai logo
//
// Technique du logo : masque CSS + currentColor.
// Le logo prend automatiquement la couleur définie par chaque page
// (foncé sur fond clair, blanc sur fond sombre) — une seule image suffit.
// Si le navigateur ne supporte pas les masques CSS, le texte "esmy."
// reste affiché : dégradation gracieuse, jamais de logo invisible.
//
// Variantes couvertes :
//   .logo        → nav et footer (toutes les pages)
//   .modal-logo  → modale "Planifions votre démo" (page d'accueil)
// ============================================================================

import { Html, Head, Main, NextScript } from 'next/document'

const LOGO_CSS = `
@supports ((-webkit-mask-image: url("/wordmark-transparent.png")) or (mask-image: url("/wordmark-transparent.png"))) {
  .logo,
  .modal-logo {
    display: inline-block !important;
    font-size: 0 !important;
    line-height: 0 !important;
    vertical-align: middle;
    background-color: currentColor;
    -webkit-mask-image: url("/wordmark-transparent.png");
            mask-image: url("/wordmark-transparent.png");
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-position: left center;
            mask-position: left center;
    -webkit-mask-size: contain;
            mask-size: contain;
  }

  /* Nav et footer */
  .logo { width: 84px; height: 32px; }

  /* Modale — logo légèrement plus petit */
  .modal-logo { width: 70px; height: 26px; margin-bottom: 16px; }

  .logo-dot,
  .modal-logo-dot { display: none !important; }
}
`

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* ─── Favicons (toutes les pages) ─── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" />

        {/* ─── Logo global ─── */}
        <style dangerouslySetInnerHTML={{ __html: LOGO_CSS }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
