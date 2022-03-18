import cachedKmlHandler from "../../../backend/cachedKmlHandler";

const countryKmlHandler = cachedKmlHandler({
  kmlUrl: "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1s5tABxCBpgKYxMi1GHqt8zFAisiz7qRF",
  getCachedPath: () => {
    const now = new Date(Date.now());
    const month = now.getMonth();
    const day = now.getDay();
    const hour = now.getHours();
    return `./country-kml-${month}-${day}-${hour}.json`;
  },
  oldCacheRegex: /country-kml-.*\.json/,
  backupPath: "./public/country-kml-backup.json",
  normalizedNames: {
    "CONTACT NO.": "phone",
    "Colour": "color",
    "CODE": "color",
    "Coordinates": "coords",
    "GMAPS COORDINATES": "coords",
    "GEOLOCATION": "coords",
    "DATE LAST CONTACTED": "dateLastContacted",
    "TIME LAST CONTACTED": "timeLastContacted",
    "DELAY BY BUS": "delayByBus",
    "Затримка автобусом": "delayByBus",
    "DELAY BY CAR": "delayByCar",
    "Затримка на машині": "delayByCar",
    "DELAY BY FOOT": "delayByFoot",
    "Затримка пішки": "delayByFoot",
    "Дані про трафік": "trafficData",
    "Рекомендований час прибуття": "recommendedTime",
  },
});

export default countryKmlHandler;
