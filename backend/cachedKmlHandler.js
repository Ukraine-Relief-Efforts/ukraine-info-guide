import {
  readFile as readFileSync,
  writeFile as writeFileSync,
  readdirSync,
  unlinkSync,
} from "fs";
import { promisify } from "util";
import KmlParser from "./KmlParser";

const readFile = promisify(readFileSync);
const writeFile = promisify(writeFileSync);

const cachedKmlHandler = ({
  kmlUrl,
  getCachedPath,
  oldCacheRegex,
  backupPath,
  normalizedNames,
}) => async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send();
    return;
  }

  const cachedPath = getCachedPath();

  try {
    const cached = await readFile(cachedPath);
    res.status(200).json(JSON.parse(cached));
    return;
  } catch (e) {} // eslint-disable-line

  try {
    const result = await fetch(kmlUrl);
    const text = await result.text();
    const parser = new KmlParser(text);
    const json = parser.toJson(normalizedNames);
    console.log(json);
    res.status(200).json(json);
    console.log("Fetched new KML");

    try {
      readdirSync(".")
        .filter(f => oldCacheRegex.test(f))
        .map(f => unlinkSync(`./${f}`));

      await writeFile(cachedPath, JSON.stringify(json));
    } catch (e) {
      console.log("Failed to cache KML:", e);
    }
  } catch (e) {
    try {
      const text = await readFile(backupPath);
      console.error("Failed to fetch new KML data - using backup instead");
      res.status(200).send(text);
    } catch (e) {
      res.status(500).send("Couldn't fetch KML");
    }
  }
}

export default cachedKmlHandler;
