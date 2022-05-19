import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/tooltip.css'
import '../styles/carousel.css'
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'
import '@fontsource/sen/400.css'
import '@fontsource/sen/700.css'

import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Contact, Header } from '../components'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Jevon Levin"
        titleTemplate="Jevon Levin"
        defaultTitle="Jevon Levin"
        description="Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!"
        openGraph={{
          url: 'http://www.jevonlevin.com/',
          title: 'Jevon Levin',
          description: "Hey! I'm Jevon, A Fullstack Developer, Photographer, and a Student!",
          // images: [
          //   {
          //     url: 'https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png',
          //     width: 800,
          //     height: 420,
          //     alt: 'Anurag | Frontend Developer',
          //   },
          // ],
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'jevonlevin, Frontend Developer, backend developer, fullstack developer, photographer, JV, JV21-2, jevon, jevon levin, Web Developer, web development, web developer, blogger, tech enthusiast, open source',
          },
        ]}
      />
      <Script src="https://kit.fontawesome.com/0c8f883c59.js" crossOrigin="anonymous"></Script>
      <Head>
        <link rel="icon" type="image/jpg" href="/assets/icon.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
