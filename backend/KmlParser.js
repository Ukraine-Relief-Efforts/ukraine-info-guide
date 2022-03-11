import jsdom from "jsdom";

class KmlParser {
	constructor(kml) {
		this.dom = new jsdom.JSDOM(kml, "text/xml");
	}

	toJson(normalizedNames) {
		const places = this.dom.window.document.querySelectorAll("Placemark");

		const output = [];

		for (const place of places) {
			const result = {};

			result.name = place.querySelector("name")?.innerHTML;

			const data = place.querySelector("ExtendedData")?.children || [];
			for (const item of data) {
				const itemName = item.attributes?.name?.value.trim();
				const itemValue = item.querySelector("value")?.innerHTML.trim();
				result[normalizedNames[itemName] || itemName] = itemValue;
			}

			const coords = result.coords;
			if (coords) {
				const parts = coords.split(", ");
				result.lat = parts[0];
				result.lon = parts[1];
				result.position = [
					parseFloat(result.lat),
					parseFloat(result.lon),
				];

				result.color = KmlParser.getColor(result.color);

				output.push(result);
			}
		}

		return output;
	}

	static getColor(c) {
		if (typeof c === "string") {
			c = c.toLowerCase();
			if (c.indexOf("green") > -1) return "green";
			if (c.indexOf("orange") > -1) return "orange";
			if (c.indexOf("red") > -1) return "red";
			if (c.indexOf("tbd") > -1 || c.indexOf("blue") > -1) return "blue";
		}
		return "black";
	}
}

export default KmlParser;
