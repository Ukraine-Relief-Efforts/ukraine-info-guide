import ReceptionPointCard from "./ReceptionPointCard";
import Map from "../Map/Map";
import Spinner from "../Spinner/Spinner";

const BorderCrossingInfo = ({ t, title, data }) => {
  const { error, general, reception } = data;

  return (
    <section className="border-card">
      <div className="bg-gray-200 p-3">
        <p className="font-semibold mb-5 uppercase">{title}</p>
        <ul className="border-information-info-list list-disc">
          {!error && general &&
            general.map((item, index) => (
              <li className="mb-2" key={index}>
                {item}
              </li>
            ))
          }
        </ul>
        <Spinner enabled={!error && !general && !reception} />
        {error && <p>
          {t("Sorry! We don't have this information at the moment")}
        </p>}
      </div>
      {!error && reception &&
        <>
          <Map markers={reception} />
          <div className="flex flex-wrap items-center justify-center">
            {reception.map((item, index) => (
              <ReceptionPointCard data={item} key={index} />
            ))}
          </div>
        </>
      }
    </section>
  );
};

export default BorderCrossingInfo;
