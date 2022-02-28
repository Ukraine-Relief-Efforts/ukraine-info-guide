const { i18n } = require("./next-i18next.config");

module.exports = {
	keepRemoved: false,
	js: ['JsxLexer'],
	jsx: ['JsxLexer'],
	locales: i18n.locales,
	output: 'public/locales/$LOCALE/$NAMESPACE.json',
	input: [
		'components/**/*.js',
		'configs/**/*.js',
		'hooks/**/*.js',
		'pages/**/*.js',
		'utils/**/*.js',
	],
};
