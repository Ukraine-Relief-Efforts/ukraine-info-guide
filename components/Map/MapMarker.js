import { Marker, Popup } from "react-leaflet";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink";

const makeIcon = (url) => typeof window !== "undefined" && new window.L.Icon({
  iconUrl: url,
  shadowUrl: '/markers/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom markers taken from https://github.com/pointhi/leaflet-color-markers
const icons = {
  green: makeIcon("/markers/marker-icon-2x-green.png"),
  blue: makeIcon("/markers/marker-icon-2x-blue.png"),
  red: makeIcon("/markers/marker-icon-2x-red.png"),
  orange: makeIcon("/markers/marker-icon-2x-orange.png"),
  black: makeIcon("/markers/marker-icon-2x-black.png"),
}

const OldStyleContent = ({ address, url }) => (
  <NewTabLink href={url} className="text-center">
    {address && address.length &&
      <p className="font-semibold">{address}</p>}
  </NewTabLink>
);

const NewStyleContent = ({
  t,
  name,
  delayByBus,
  delayByCar,
  delayByFoot,
  recommendedTime,
  trafficData,
  url,
}) => (
  <div className="flex flex-col items-center">
    <span className="font-semibold mb-3">{name}</span>
    {delayByBus && <span>{t("Delay by bus")}: {delayByBus}</span>}
    {delayByCar && <span>{t("Delay by car")}: {delayByCar}</span>}
    {delayByFoot && <span>{t("Delay by foot")}: {delayByFoot}</span>}
    {recommendedTime && <span>{t("Recommended time")}: {recommendedTime}</span>}
    {trafficData && trafficData.length &&
      <NewTabLink href={trafficData}>
        {t("Traffic Data")}
      </NewTabLink>
    }
    <span className="link mt-3">
      <NewTabLink href={url}>{t("Google Maps")}</NewTabLink>
    </span>
  </div>
);

const MapMarker = (props) => {
  const { address, lat, lon, position, color = "blue" } = props;
  if (!position || Number.isNaN(lat) || Number.isNaN(lon))
    return null;

  const url = coordsToGoogleMapsUrl(lat, lon);

  return (
    <Marker position={position} icon={icons[color]}>
      <Popup>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {
            address
              ? <OldStyleContent address={address} url={url} />
              : <NewStyleContent {...props} url={url} />
          }
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
