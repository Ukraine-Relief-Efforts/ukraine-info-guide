export const coordsToGoogleMapsUrl = (lat, lon) =>
  `https://maps.google.com/?q=${lat},${lon}`;

export const removeArrayDuplicates =
	(arr) => arr.filter((v, i, a) => a.indexOf(v) === i);
