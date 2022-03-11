import cachedKmlHandler from "../../../backend/cachedKmlHandler";

const shelterKmlHandler = cachedKmlHandler({
  kmlUrl: "https://www.google.com/maps/d/u/0/kml?mid=1nv3QreO1QS5_AmRRNLHXu7u99sKJ6JRR&forcekml=1",
  getCachedPath: () => {
    const now = new Date(Date.now());
    const month = now.getMonth();
    const day = now.getDay();
    const hour = now.getHours();
    return `./shelter-kml-${month}-${day}-${hour}.json`;
  },
  oldCacheRegex: /shelter-kml-.*\.json/,
  backupPath: "./public/shelter-kml-backup.json",
  normalizedNames: {
    "Район": "region",
    "Координати укриття": "coords",

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

export default shelterKmlHandler;
