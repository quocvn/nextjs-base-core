module.exports = {
  input: [
    'src/**/*.{ts,tsx}',
    // Use ! to filter out files or directories
    '!src/**/*.test.{ts,tsx}',
  ],
  output: './public',
  options: {
    debug: true,
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx'],
    },
    trans: false,
    lngs: ['en', 'vi'],
    ns: ['common', 'login'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue(lng, ns, key) {
      return key
    },
    removeUnusedKeys: false,
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
}
