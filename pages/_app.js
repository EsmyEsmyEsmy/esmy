import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='0' fill='%230f0f0f'/><text x='12' y='68' font-size='58' font-family='Georgia,serif' font-weight='700' fill='white' letter-spacing='-2'>e</text><text x='56' y='68' font-size='58' font-family='Georgia,serif' font-weight='700' fill='%23c8c8c8'>.</text></svg>" />
        <meta name="theme-color" content="#0f0f0f" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
