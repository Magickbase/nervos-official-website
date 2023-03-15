export const getTimeFormatter = (locale = 'en-US') => new Intl.DateTimeFormat(locale, { dateStyle: 'long' })
