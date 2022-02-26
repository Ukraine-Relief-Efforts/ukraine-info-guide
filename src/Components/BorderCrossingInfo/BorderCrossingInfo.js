import { useTranslation } from "react-i18next";
import ReceptionPointCard from "./ReceptionPointCard";
import Map from "../Map/Map";

const BorderCrossingInfo = ({ data }) => {
  const { t } = useTranslation();
  const { general, reception } = data;

  return (
    <section className="border-card">
      <p className="text-xl font-semibold mb-5">
        {t("Help for Ukrainian citizens")}
      </p>
      <div className="bg-gray-200 p-3">
        <ul className="border-information-info-list list-disc">
          <p className="font-semibold mb-5 uppercase">
            {t("Information for Ukrainian citizens trying to travel to Poland")}
          </p>
          {general.map((item) => {
            return (
              <li className="mb-2" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <Map markers={reception} />
      <div className="flex flex-wrap w-full items-center justify-center">
        {reception.map((item, index) => {
          return <ReceptionPointCard data={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default BorderCrossingInfo;
