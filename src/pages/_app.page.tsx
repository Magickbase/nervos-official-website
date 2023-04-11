import { useEffect } from 'react'
import { type AppType } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import localFont from 'next/font/local'
import { api } from '../utils/api'
import 'swiper/css'
import '../styles/globals.scss'

const fontArticulatCF = localFont({
  src: [
    { path: '../styles/fonts/ArticulatCF-Normal.woff2', weight: '400' },
    { path: '../styles/fonts/ArticulatCF-Medium.woff2', weight: '500' },
    { path: '../styles/fonts/ArticulatCF-DemiBold.woff2', weight: '600' },
    { path: '../styles/fonts/ArticulatCF-Bold.woff2', weight: '700' },
    { path: '../styles/fonts/ArticulatCF-ExtraBold.woff2', weight: '800' },
  ],
  preload: true,
})

const App: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.classList.add(fontArticulatCF.className)
    return () => document.body.classList.remove(fontArticulatCF.className)
  }, [])

  return (
    <>
      <Head>
        <title>Nervos Network</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:title" content="Nervos Network" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="The Nervos Network is a flexible blockchain platform, secured by proof of work, which allows developers freedom of choice in cryptographic primitives and decentralized application architecture."
        />
        <meta property="og:url" content="https://nervos.org" />
        <meta property="og:site_name" content="Nervos Network" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@NervosNetwork" />
      </Head>
      <main
        // Here as redundancy in server-side rendering.
        className={fontArticulatCF.className}
      >
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default api.withTRPC(appWithTranslation(App))
