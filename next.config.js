const { i18n } = require("./next-i18next.config");

const withPrefresh = process.env.NODE_ENV === "development"
  ? require("@prefresh/next")
  : (config) => config;

module.exports = withPrefresh({
  i18n,
  reactStrictMode: true,
  webpack(config) {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
