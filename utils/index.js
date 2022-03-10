import {
  POLAND, ENGLAND, GERMANY, KOREAN, SPAIN,
  HUNGARY, ROMANIA, RUSSIA, SERBIA, UKRAINE
} from "../configs/constants";

export const coordsToGoogleMapsUrl = (lat, lon) =>
  `https://maps.google.com/?q=${lat},${lon}`;

export const removeArrayDuplicates =
  (arr) => arr.filter((v, i, a) => a.indexOf(v) === i);

export const localeToTelegramAlertChannel = (locale) => {
  const channels = {
    "it": "IT",
    [SERBIA]: "SE",
    [RUSSIA]: "RU",
    [UKRAINE]: "UK",
    [ENGLAND]: "EN",
    [POLAND]: "PO",
    [GERMANY]: "GE",
    [SPAIN]: "SP",
    [KOREAN]: "KO",
    [HUNGARY]: "HU",
    [ROMANIA]: "RO",
  };

  return `UkraineAlerts${channels[locale] || ENGLAND}`;
}
