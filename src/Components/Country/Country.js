import ReceptionPoint from "./ReceptionPoint";
import Map from "../Map/Map";

import data from "../../dummydata/poland_data.json";

function Country() {
  return (
    <section className="border-card">
      <p className="text-2xl font-semibold">Poland</p>
      <p className="text-xl font-semibold mb-5">Help for Ukrainian citizens</p>
      <ul className="text-center">
        <p className="font-semibold">INFORMATION FOR UKRAINE CITIZENS</p>
        {data.general.map((item, index) => {
          return (
            <li className="border-card-point" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    <Map markers={data.reception} />
      <div className="flex flex-wrap w-full items-center justify-center">
        {data.reception.map((item, index) => {
          return <ReceptionPoint data={item} key={index} />;
        })}
      </div>
    </section>
  );
}
export default Country;
