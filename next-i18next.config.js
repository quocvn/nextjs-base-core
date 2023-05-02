/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
}
