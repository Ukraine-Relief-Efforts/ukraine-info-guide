import { useTranslation } from "react-i18next";
import { coordsToGoogleMapsUrl } from "../../utils";
import NewTabLink from "../NewTabLink/NewTabLink";

const ReceptionPointCard = ({ data }) => {
  const { t } = useTranslation();
  const { address, qr, lat, lon } = data;
  const url = coordsToGoogleMapsUrl(lat, lon);

  return (
    <section className="border-card-reception">
      <div className="border-card-address">
        <p>{address}</p>
      </div>
      <div className="border-card-qr">
        <img src={qr} alt="QR code" />
      </div>
      <NewTabLink href={url} className="border-card-google font-semibold">
        {t("Map")}
      </NewTabLink>
    </section>
  );
}
export default ReceptionPointCard;
