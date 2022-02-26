import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "./Map.css";
import MapMarker from "./MapMarker";

const gmapsAddressToCoords = (gmaps) => {
  if ((gmaps = gmaps.split("@")[1])) {
    const lat = parseFloat(gmaps);
    const lng = parseFloat(gmaps.split(",")[1]);
    return lat && lng ? [lat, lng] : undefined;
  }
};

const findCenter = (data) =>
  data
    .map((m) => m.position)
    .reduce(
      (prev, cur) => (cur ? prev.map((n, i) => n + cur[i]) : prev),
      [0, 0]
    )
    .map((n) => n / data.length);

const Map = ({ markers }) => {
  const data = markers.map((m) => ({
    ...m,
    position: gmapsAddressToCoords(m.gmaps),
  }));

  const position = findCenter(data);

  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((m, index) => (
        <MapMarker {...m} key={index} />
      ))}
    </MapContainer>
  );
};

export default Map;
