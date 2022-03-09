import { useState, useEffect, useRef } from "react";
import { useMap, FeatureGroup } from "react-leaflet";
import MapMarker from "./MapMarker";

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

const getColor = (c) => {
  if (typeof c === "string") {
    c = c.toLowerCase();
    if (c.indexOf("green") > -1) return "green";
    if (c.indexOf("orange") > -1) return "orange";
    if (c.indexOf("red") > -1) return "red";
    if (c.indexOf("tbd") > -1 || c.indexOf("blue") > -1) return "blue";
  }
  return "black";
}

const KmlLayer = ({ t, path, centered }) => {
  const [data, setData] = useState();
  const ref = useRef();
  const map = useMap();

  useEffect(() => {
    const init = async () => {
      const kmlRequest = await fetch(path);
      const kml = await kmlRequest.text();
      const parser = new window.DOMParser();
      const data = parser.parseFromString(kml, "text/xml");
      const places = data.querySelectorAll("Placemark");

      const output = [];

      for (const place of places) {
        const result = {};

        result.name = place.querySelector("name")?.innerHTML;

        const data = place.querySelector("ExtendedData")?.children;
        for (const item of data) {
          const itemName = item.attributes?.name?.value;
          const itemValue = item.querySelector("value")?.innerHTML;
          result[normalizedNames[itemName] || itemName] = itemValue;
        }

        const coords = result.coords;
        if (coords) {
          const parts = coords.split(", ");
          result.lat = parts[0];
          result.lon = parts[1];
          result.position = [ parseFloat(result.lat), parseFloat(result.lon) ];

          result.color = getColor(result.color);

          output.push(result);
        }
      }

      setData(output);
    }

    init();
  }, [path]);

  useEffect(() => {
    if (map && ref.current) {
      const bounds = ref.current.getBounds();
      if (bounds.isValid())
        map.fitBounds(bounds);
    }
  }, [map, centered, data, ref]);

  return (
    <FeatureGroup ref={ref}>
      {
        data && data.map((item, index) => {
          return (
            <MapMarker t={t} key={index} {...item} />
          );
        })
      }
    </FeatureGroup>
  );
}

export default KmlLayer;
