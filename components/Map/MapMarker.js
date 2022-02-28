import { Marker, Popup } from "react-leaflet";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink";

const MapMarker = ({ qr, address, lat, lon, position }) => {
  if (!position || !Number.isFinite(lat) || !Number.isFinite(lon))
    return null;

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
            {address && address.length &&
              <p className="font-semibold">{address}</p>}
            {qr && qr.length &&
              <img
                src={qr}
                alt={"QR code"}
                width="100"
                height="100"
                style={{ margin: "auto" }}
              />}
          </NewTabLink>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
