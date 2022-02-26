import ReceptionPoint from "./ReceptionPoint";
import Map from "../Map/Map";

const BorderCrossingInfo = ({ data }) => {
  const { general, reception } = data;

  return (
    <section className="border-card">
      {/*<p className="text-2xl font-semibold">Poland</p>*/}
      <p className="text-xl font-semibold mb-5">Help for Ukrainian citizens</p>
      <div className="bg-gray-200 p-3">
        <ul className="border-information-info-list list-disc">
          <p className="font-semibold mb-5">
            INFORMATION FOR UKRAINE CITIZENS WHO ARE TRYING TO TRAVEL TO POLAND
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
          return <ReceptionPoint data={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default BorderCrossingInfo;
