import ReceptionPoint from "./ReceptionPoint";

import data from "../../dummydata/poland_data.json";

function BorderCard() {
  return (
    <section className="border-card">
      <p className="text-2xl font-semibold">Poland</p>
      <p className="text-xl font-semibold mb-5">Help for Ukrainian citizens</p>
      <ul className="text-center">
        <p className="font-semibold">INFORMATION FOR UKRAINE CITIZENS</p>
        {data.general.map((item) => {
          return (
            <li className="border-card-point" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <ReceptionPoint />
    </section>
  );
}
export default BorderCard;
