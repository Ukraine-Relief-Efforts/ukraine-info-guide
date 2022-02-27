import { useTranslation } from "react-i18next";

const FoodShelterPointCard = ({ data }) => {
  const { t } = useTranslation();
  const { type, address, thumbnail, gmaps } = data;

  return (
    <section className="foodshelter-card-reception">
    <div className="foodshelter-card-type">
        <p>{type}</p>
      </div>
      <div className="foodshelter-card-address">
        <p>{address}</p>
      </div>
      <div className="foodshelter-card-thumbnail">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <a href={gmaps} className="foodshelter-card-google font-semibold">
        {t("Map")}
      </a>
    </section>
  );
}
export default FoodShelterPointCard;
