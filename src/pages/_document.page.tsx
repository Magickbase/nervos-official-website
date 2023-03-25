import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Nervos Network</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:title" content="Nervos Network" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A BLOCKCHAIN PLATFORM FOR UNIVERSAL APPLICATIONS The Nervos Network is an open source public blockchain ecosystem and collection of protocols creating the foundation for a universal internet-like public network Beyond Interoperability, Towards Universal Application Early internet applications lived on segregated networks needing different ways to access and interact. Now, in today’s decentralized world we again see this segregation into different ... Read More"
        />
        <meta property="og:url" content="https://nervos.org" />
        <meta property="og:site_name" content="Nervos Network" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@NervosNetwork" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
