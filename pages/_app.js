
import '../styles/bootstrap/css/bootstrap.min.css';
import '../styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Premium Bootstrap themes, templates, UI/UX Kits, PHP Scripts, CMS and more</title>
      </Head>

      <Component {...pageProps} />

      <Script src='../styles/bootstrap/js/bootstrap.bundle.min.js'></Script>
    </>
  )
}

export default MyApp
