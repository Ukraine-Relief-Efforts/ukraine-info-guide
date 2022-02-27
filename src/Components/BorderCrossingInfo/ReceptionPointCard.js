import { useTranslation } from "react-i18next";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink/NewTabLink";

const ReceptionPointCard = ({ data }) => {
  const { t } = useTranslation();
  const { type, address, thumbnail, qr, lat, lon } = data;
  const mapUrl = lat && lon && coordsToGoogleMapsUrl(lat, lon);

  return (
    <section className="border-card-reception">
      {type &&
        <div className="border-card-type">
          <p>{type}</p>
        </div>
      }
      {address &&
        <div className="border-card-address">
          <p>{address}</p>
        </div>
      }
      {thumbnail &&
        <div className="border-card-thumbnail">
          <img src={thumbnail} alt={address || type} />
        </div>
      }
      {qr &&
        <div className="border-card-qr">
          <img src={qr} alt="QR code" />
        </div>
      }
      {mapUrl &&
        <NewTabLink href={mapUrl} className="border-card-google font-semibold">
          {t("Map")}
        </NewTabLink>
      }
    </section>
  );
}
export default ReceptionPointCard;
