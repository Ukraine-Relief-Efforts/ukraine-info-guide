import { readFile } from "fs";

const kmlUrl= "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1s5tABxCBpgKYxMi1GHqt8zFAisiz7qRF";

const countryKmlHandler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send();
    return;
  }

  try {
    const result = await fetch(kmlUrl);
    const text = await result.text();
    res.status(200).send(text);
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
