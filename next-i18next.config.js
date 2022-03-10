const languages = require("./configs/languages");

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  i18n: {
    defaultLocale: 'ua',
    locales: languages.map(({ value }) => value),
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
