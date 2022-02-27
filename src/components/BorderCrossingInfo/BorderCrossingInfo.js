import ReceptionPointCard from "./ReceptionPointCard";
import Map from "../Map/Map";

const BorderCrossingInfo = ({ title, data }) => {
  const { general, reception } = data;

  return (
    <section className="border-card">
      <div className="bg-gray-200 p-3">
        <ul className="border-information-info-list list-disc">
          <p className="font-semibold mb-5 uppercase">{title}</p>
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
      <div className="flex flex-wrap items-center justify-center">
        {reception.map((item, index) => {
          return <ReceptionPointCard data={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default BorderCrossingInfo;
