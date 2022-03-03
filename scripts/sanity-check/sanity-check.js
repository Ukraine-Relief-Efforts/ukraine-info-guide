const fetch = require("node-fetch");
const languages = require("../../configs/languages");
const { API_BASE_URL } = require("../../configs/constants");

const hasDuplicates = array => (new Set(array)).size !== array.length;

describe("Check 'country' endpoint sanity", () => {
	const countries = [
		"poland",
		"moldova",
		"romania",
		"hungary",
	];

	const locales = languages.map(({ value }) => value);

	const testEndpoint = (endpoint) => async () => {
		const url = `${API_BASE_URL}country?country=${endpoint}`;
		const response = await fetch(url);
		expect(response.status).toBe(200);

		const {
			country,
			source,
			isoFormat,
			dateTime,
			general,
			reception,
		} = await response.json();

		expect(typeof country).toBe("string");
		expect(country).toBe(endpoint);

		expect(typeof source).toBe("string");
		expect(source.length).toBeGreaterThan(0);

		expect(typeof isoFormat).toBe("string");
		expect((new Date(isoFormat)).getTime()).toBeGreaterThan(1646000000000);

		expect(typeof dateTime).toBe("string");
		expect((new Date(dateTime)).getTime()).toBeGreaterThan(1646000000000);

		expect(Array.isArray(general)).toBe(true);
		expect(general.length).toBeGreaterThan(0);
		expect(hasDuplicates(general)).toBe(false);
		for (const item of general) {
			expect(typeof item).toBe("string");
			expect(item.length).toBeGreaterThan(0);
		}

		expect(Array.isArray(reception)).toBe(true);
		expect(general.length).toBeGreaterThan(0);
		for (const item of reception) {
			expect(typeof item).toBe("object");
			const { name, address, lon, lat } = item;

			expect(typeof name).toBe("string");
			expect(name.length).toBeGreaterThan(0);

			expect(typeof address).toBe("string");
			expect(address.length).toBeGreaterThan(0);

			expect(typeof lon).toBe("string");
			const lonF = parseFloat(lon);
			expect(typeof lonF).toBe("number");
			expect(Number.isFinite(lonF)).toBe(true);
			expect(Number.isNaN(lonF)).toBe(false);
			expect(lonF >= -180).toBe(true);
			expect(lonF <= 180).toBe(true);

			expect(typeof lat).toBe("string");
			const latF = parseFloat(lat);
			expect(typeof latF).toBe("number");
			expect(Number.isFinite(latF)).toBe(true);
			expect(Number.isNaN(latF)).toBe(false);
			expect(latF >= -90).toBe(true);
			expect(latF <= 90).toBe(true);
		}
	}

	for (const country of countries) {
		for (const locale of locales) {
			const endpoint = `${country}-${locale}`;
			test(`Country '${endpoint}'`, testEndpoint(endpoint))
		}
	}
});
