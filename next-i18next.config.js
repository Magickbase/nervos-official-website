/**
 * next-i18next not support mjs config
 */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    // TODO: 'ko' has been temporarily removed until the Korean translation file is ready.
    locales: ['en', 'zh', 'es'],
    // TODO: This is because there is currently no full i18n translation support,
    // so switching to other languages is temporarily disabled.
    localeDetection: false,
  },
  localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
