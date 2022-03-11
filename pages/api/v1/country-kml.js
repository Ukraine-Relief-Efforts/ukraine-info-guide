import {
  readFile as readFileSync,
  writeFile as writeFileSync,
  readdirSync,
  unlinkSync,
} from "fs";
import { promisify } from "util";
import KmlParser from "../../../backend/KmlParser";

const readFile = promisify(readFileSync);
const writeFile = promisify(writeFileSync);

const regex = /country-kml-.*\.json/;

const kmlUrl= "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1s5tABxCBpgKYxMi1GHqt8zFAisiz7qRF";

const getLocalPath = () => {
  const now = new Date(Date.now());
  const month = now.getMonth();
  const day = now.getDay();
  const hour = now.getHours();
  return `./country-kml-${month}-${day}-${hour}.json`;
}

const normalizedNames = {
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
};

const countryKmlHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send();
    return;
  }

  const path = getLocalPath();

  try {
    const cached = await readFile(path);
    res.status(200).json(JSON.parse(cached));
    return;
  } catch (e) {} // eslint-disable-line

  try {
    const result = await fetch(kmlUrl);
    const text = await result.text();
    const parser = new KmlParser(text);
    const json = parser.toJson(normalizedNames);
    res.status(200).json(json);
    console.log("Fetched new countries kml");

    try {
      readdirSync(".")
        .filter(f => regex.test(f))
        .map(f => unlinkSync(`./${f}`));

      await writeFile(path, JSON.stringify(json));
    } catch (e) {
      console.log("Failed to cache countries kml:", e);
    }
  } catch (e) {
    try {
      const text = await readFile("./public/country-kml-backup.json");
      console.error("Failed to fetch new KML data - using backup instead");
      res.status(200).send(text);
    } catch (e) {
      res.status(500).send("Couldn't fetch KML");
    }
  }
}

export default countryKmlHandler;
