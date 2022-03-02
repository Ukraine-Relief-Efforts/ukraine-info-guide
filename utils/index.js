export const coordsToGoogleMapsUrl = (lat, lon) =>
  `https://maps.google.com/?q=${lat},${lon}`;

export const removeArrayDuplicates =
  (arr) => arr.filter((v, i, a) => a.indexOf(v) === i);

export const localeToTelegramAlertChannel = (locale) => {
  const channels = {
    "it": "IT",
    "rs": "SE",
    "ru": "RU",
    "ua": "UK",
    "en": "EN",
    "pl": "PO",
    "de": "GE",
    "es": "SP",
    "kr": "KO",
  };

  return `LeaveUkraineAlerts${channels[locale] || "EN"}`;
}
