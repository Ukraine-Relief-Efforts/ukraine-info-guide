import {
  readFile as readFileSync,
  writeFile as writeFileSync,
  readdirSync,
  unlinkSync,
} from "fs";
import { promisify } from "util";

const readFile = promisify(readFileSync);
const writeFile = promisify(writeFileSync);

const regex = /country-kml-.*\.kml/;

const kmlUrl= "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1s5tABxCBpgKYxMi1GHqt8zFAisiz7qRF";

const getLocalPath = () => {
  const now = new Date(Date.now());
  const month = now.getMonth();
  const day = now.getDay();
  const hour = now.getHours();
  return `./country-kml-${month}-${day}-${hour}.kml`;
}

const countryKmlHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send();
    return;
  }

  const path = getLocalPath();

  try {
    const cached = await readFile(path);
    res.status(200).send(cached);
    return;
  } catch (e) {
  }

  try {
    const result = await fetch(kmlUrl);
    const text = await result.text();
    res.status(200).send(text);
    console.log("Fetched new countries kml");

    try {
      readdirSync(".")
        .filter(f => regex.test(f))
        .map(f => unlinkSync(`./${f}`));

      await writeFile(path, text);
    } catch (e) {
      console.log("Failed to cache countries kml:", e);
    }
  } catch (e) {
    try {
      const text = await readFile("./public/ukraine-border.kml");
      console.error("Failed to fetch new KML data - using cache instead");
      res.status(200).send(text);
    } catch (e) {
      res.status(500).send("Couldn't fetch KML");
    }
  }
}

export default countryKmlHandler;
