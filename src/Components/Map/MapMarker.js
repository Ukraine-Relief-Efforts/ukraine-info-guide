import { Marker, Popup } from "react-leaflet";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink/NewTabLink";

const MapMarker = ({ qr, address, lat, lon, position }) => {
  if (!position || !lat || !lon) return null;

  const url = coordsToGoogleMapsUrl(lat, lon);

  return (
    <Marker position={position}>
      <Popup>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <NewTabLink href={url} className="text-center">
            <p className="font-semibold">{address}</p>
            <img
              src={qr}
              alt={address}
              width="100"
              height="100"
              style={{ margin: "auto" }}
            />
          </NewTabLink>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
