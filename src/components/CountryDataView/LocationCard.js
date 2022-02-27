import { useTranslation } from "react-i18next";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink";

const LocationCard = ({ data }) => {
  const { t } = useTranslation();
  const { type, address, thumbnail, qr, lat, lon } = data;
  const mapUrl = lat && lon && coordsToGoogleMapsUrl(lat, lon);

  return (
    <section className="location-card-reception">
      {type &&
        <div className="location-card-type">
          <p>{type}</p>
        </div>
      }
      {address &&
        <div className="location-card-address">
          <p>{address}</p>
        </div>
      }
      {thumbnail &&
        <div className="location-card-thumbnail">
          <img src={thumbnail} alt={address || type} />
        </div>
      }
      {qr &&
        <div className="location-card-qr">
          <img src={qr} alt="QR code" />
        </div>
      }
      {mapUrl &&
        <NewTabLink href={mapUrl} className="location-card-google font-semibold">
          {t("Map")}
        </NewTabLink>
      }
    </section>
  );
}
export default LocationCard;
