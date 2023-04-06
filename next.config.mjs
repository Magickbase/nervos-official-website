const i18nConfig = (await import('./next-i18next.config.js')).default

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(suffix => `page.${suffix}`),

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: i18nConfig.i18n,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    // https://dhanrajsp.me/snippets/customize-css-loader-options-in-nextjs
    const oneOf = config.module.rules.find(rule => typeof rule.oneOf === 'object')
    if (oneOf) {
      const moduleSassRule = oneOf.oneOf.find(rule => regexEqual(rule.test, /\.module\.(scss|sass)$/))
      if (moduleSassRule) {
        // Get the config object for css-loader plugin
        const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'))
        if (cssLoader) {
          cssLoader.options = {
            ...cssLoader.options,
            modules: {
              ...cssLoader.options.modules,
              mode: 'local',
            },
          }
        }
      }
    }

    return config
  },
  redirects: async () => {
    const ARCHIVE_URL = 'https://archive.nervos.org'
    return ['/blog', '/blog/:slug', '/trailblazer', '/developer/grants', '/godwoken'].map(source => ({
      source,
      destination: `${ARCHIVE_URL}${source}`,
      permanent: false,
    }))
  },
}

/**
 * Stolen from https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 */
function regexEqual(x, y) {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  )
}

export default config
