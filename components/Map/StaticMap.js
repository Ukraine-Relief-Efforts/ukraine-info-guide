import { useTranslation } from "next-i18next";
import { MapContainer, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Marker } from "react-leaflet";
import { useState } from "react";
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

  const data = markers
    .filter((m) => m.lat && m.lon && m.lat.length && m.lon.length)
    .map((m) => ({
      ...m,
      position: [ parseFloat(m.lat), parseFloat(m.lon) ],
    }));

  const position = data.length > 0 ? findCenter(data) : [45, 23];

  const [enableGeolocation, setEnableGeolocation] = useState(false)
  let location = useGeoLocation(enableGeolocation)
  const allowLocation = () => {
    setEnableGeolocation(true)
    console.log("enable geo:" + enableGeolocation)
  }

  /*
  let showMyLocation = () => { // either fix this or make it just request permission for location, or both
    if(location.loaded && !location.error){
      mapRef.current.leafletElement.flyTo([location.coordinates.lat, location.coordinates.lng], zoomLevel, {animate: true})
    } else {
      console.log("geolocation failed") //alert(location.error.message)
    }
  }
  */

  return (
    <div ref={mapRef}>
      {features.geolocation &&
        <div>
          <button className="showlocation-button" onClick={allowLocation}>Show My Location</button>
        </div>
      }
      <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false}>
        <Tiles source={kmlSource} />
        {
          kmlUrl
            ? <KmlLayer t={t} path={kmlUrl} centered />
            : <LayerGroup>
              {data && data.map((m, index) => (
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
