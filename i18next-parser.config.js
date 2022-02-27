module.exports = {
	keepRemoved: false,
	js: ['JsxLexer'],
	jsx: ['JsxLexer'],
	locales: ['en', 'ua', 'ru', 'it', 'de', 'es', 'pl', 'kr'],
	output: 'public/locales/$LOCALE/$NAMESPACE.json',
	input: [ 'src/**/*.js', 'src/**/*.jsx' ],
};
