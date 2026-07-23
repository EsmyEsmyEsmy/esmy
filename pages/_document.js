// ============================================================================
// pages/_document.js — En-tête global du site Esmy
// ============================================================================
// Ce fichier s'applique AUTOMATIQUEMENT à toutes les pages du site.
// Il évite d'avoir à répéter les favicons et le logo dans chaque page.
//
// Contient :
//  1. Les déclarations de favicon (onglet navigateur, iOS, Android)
//  2. Le remplacement du logo texte "esmy." par le vrai logo image
// ============================================================================

import { Html, Head, Main, NextScript } from 'next/document'

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

        {/* ─── Logo : remplace le texte "esmy." par le vrai logo ─── */}
        <style dangerouslySetInnerHTML={{ __html: `
          a.logo, .logo {
            display: inline-block !important;
            width: 88px !important;
            height: 34px !important;
            background-image: url('/wordmark-transparent.png') !important;
            background-repeat: no-repeat !important;
            background-position: left center !important;
            background-size: contain !important;
            text-indent: -9999px !important;
            overflow: hidden !important;
            white-space: nowrap !important;
            vertical-align: middle;
          }
          .logo-dot { display: none !important; }
        ` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
