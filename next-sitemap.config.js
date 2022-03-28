/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: "https://uasafety.org/",
	sitemapSize: 7000,
	exclude: [
		"*/admin*",
		"*/food-and-shelter",
		"*/poland-form",
	],
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: "/admin*",
			}
		],
	},
};
