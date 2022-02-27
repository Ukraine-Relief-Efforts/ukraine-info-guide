import { useTranslation } from "react-i18next";

const ReceptionPointCard = ({ data }) => {
  const { t } = useTranslation();
  const { address, qr, gmaps } = data;

  return (
    <section className="border-card-reception">
      <div className="border-card-address">
        <p>{address}</p>
      </div>
      <div className="border-card-qr">
        <img src={qr} alt="QR code" />
      </div>
      <a href={gmaps} className="border-card-google font-semibold">
        {t("Map")}
      </a>
    </section>
  );
}
export default ReceptionPointCard;
