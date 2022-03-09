import { useTranslation } from "next-i18next";
import { MapContainer, TileLayer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Marker } from "react-leaflet";
import MapMarker from "./MapMarker";
import KmlLayer from "./KmlLayer";
import Tiles from "./Tiles";
import useGeoLocation from  "../../hooks/useGeoLocation";
import features from "../../configs/features";

const findCenter = (data) =>
  data
    .map((m) => m.position)
    .reduce(
      (prev, cur) => (cur ? prev.map((n, i) => n + cur[i]) : prev),
      [0, 0]
    )
    .map((n) => n / data.length);

const Map = ({ markers = [], kmlUrl, kmlSource, mapRef }) => {
  const { t } = useTranslation();

  const zoomLevel = 7;

  let location = useGeoLocation();

  const data = markers
    .filter((m) => m.lat && m.lon && m.lat.length && m.lon.length)
    .map((m) => ({
      ...m,
      position: [ parseFloat(m.lat), parseFloat(m.lon) ],
    }));

  if (data.length < 1)
    return null;

  const position = findCenter(data);

  //const mapRef = useRef()
  let showMyLocation = () => { // either fix this or make it just request permission for location, or both
    /*
    if(location.loaded && !location.error){
      mapRef.current.leafletElement.flyTo([location.coordinates.lat, location.coordinates.lng], zoomLevel, {animate: true})
    } else {
      alert(location.error.message)
    }
    */
  }

  return (
    <div ref={mapRef}>
      {features.geolocation &&
        <div>
          <button className="showlocation-button" onClick={showMyLocation}>
            Show My Location
          </button>
        </div>
      }
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
        <Tiles source={kmlSource} />
        {
          kmlUrl
            ? <KmlLayer t={t} path={kmlUrl} centered />
            : <LayerGroup>
              {data.map((m, index) => (
                <MapMarker {...m} key={index} />
              ))}
            </LayerGroup>
        }
        {features.geolocation && location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
