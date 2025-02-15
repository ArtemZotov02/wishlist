import '../styles/pages/index.scss';
import Head from 'next/head';

function MyApp ({ Component, pageProps }) {
    return (
      <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
          </Head>
          <Component {...pageProps} />      
      </>
    )     
}

export default MyApp
