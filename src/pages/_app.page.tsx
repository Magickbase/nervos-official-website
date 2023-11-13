import { type AppType } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import localFont from 'next/font/local'
import { IS_PROD, api } from '../utils'
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
        {IS_PROD ? (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-WVH440CNZ3" />
            <script async src="/scripts/google-analytics.js" />
            <script async src="/scripts/twitter.js" />
          </>
        ) : null}
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
