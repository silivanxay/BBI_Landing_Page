import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bamboo BI</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
      </Head>
      <Script
        src="js/humberger.js"
        strategy="beforeInteractive"
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
