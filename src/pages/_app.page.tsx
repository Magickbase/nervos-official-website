import { useEffect } from 'react'
import { type AppType } from 'next/app'
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
    <main
      // Here as redundancy in server-side rendering.
      className={fontArticulatCF.className}
    >
      <Component {...pageProps} />
    </main>
  )
}

export default api.withTRPC(appWithTranslation(App))
