const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ua', 'ru', 'it', 'de', 'es', 'pl', 'kr', 'rs'],
    defaultNS: "translation",
    fallbackLng: 'en',
    returnEmptyString: false,
    reloadOnPrerender: IS_DEVELOPMENT,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  },
};
