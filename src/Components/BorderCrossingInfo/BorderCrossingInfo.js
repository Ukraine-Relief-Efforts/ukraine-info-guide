import ReceptionPointCard from "./ReceptionPointCard";
import Map from "../Map/Map";

const BorderCrossingInfo = ({ title, data }) => {
  const { error, general, reception } = data;

  return (
    <section className="border-card">
      <div className="bg-gray-200 p-3">
        <ul className="border-information-info-list list-disc">
          <p className="font-semibold mb-5 uppercase">{title}</p>
          {!error && general
            ? general.map((item, index) => (
              <li className="mb-2" key={index}>
                {item}
              </li>
            ))
            : <li>{error}</li>
          }
        </ul>
      </div>
      {!error && reception &&
        <>
          <Map markers={reception} />
          <div className="flex flex-wrap items-center justify-center">
            {reception.map((item, index) => {
              return <ReceptionPointCard data={item} key={index} />;
            })}
          </div>
        </>
      }
    </section>
  );
};

export default BorderCrossingInfo;
