// @ts-check
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
    locales: ['en', 'zh', 'ko', 'tr'],
  },

  localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
