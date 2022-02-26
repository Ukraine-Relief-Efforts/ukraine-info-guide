module.exports = {
	keepRemoved: false,
	js: ['JsxLexer'],
	locales: ['en', 'ua', 'ru', 'it', 'de'],
	output: 'public/locales/$LOCALE/$NAMESPACE.json',
	input: 'src/**/*.js',
};
