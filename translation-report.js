const { i18n } = require("./next-i18next.config");
const fs = require("fs");

const result = [];

const locales = i18n.locales;

for (const locale of locales) {
	if (locale === "en")
		continue;

	const path = `./public/locales/${locale}/translation.json`;
	const translations = JSON.parse(fs.readFileSync(path));
	const keys = Object.keys(translations);
	const total = keys.length;

	let missing = 0;

	for (const key of keys)
		if (!translations[key] || translations[key].length < 1)
			missing++;

	const translated = total - missing;
	const percent = parseFloat((100 * translated / total).toFixed(2));

	result.push({
		locale,
		translated,
		missing,
		total,
		percent,
	});
}

console.log("\nTRANSLATION REPORT");

console.table(result);
