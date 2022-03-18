import { useMap, TileLayer } from "react-leaflet";

const osm = "&copy; <a target='_blank' rel='noopener noreferrer' href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>";

const Tiles = ({ source }) => {
  const map = useMap();

  map.attributionControl.setPrefix(false);

  source = source
    ? `<a target='_blank' rel='noopener noreferrer' href="${source}">Data Source</a> | `
    : "";

  return (
    <TileLayer
      attribution={source + osm}
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}

export default Tiles;
