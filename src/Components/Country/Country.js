import ReceptionPoint from "./ReceptionPoint";

import data from "../../dummydata/poland_data.json";

function Country() {
  return (
    <section className="border-card">
      {/*<p className="text-2xl font-semibold">Poland</p>*/}
      <p className="text-xl font-semibold mb-5">Help for Ukrainian citizens</p>
      <div className="bg-gray-200 p-3">
        <ul className="border-information-info-list list-disc">
          <p className="font-semibold mb-5">
            INFORMATION FOR UKRAINE CITIZENS WHO ARE TRYING TO TRAVEL TO POLAND
          </p>
          {data.general.map((item) => {
            return (
              <li className="mb-2" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center">
        {data.reception.map((item) => {
          return <ReceptionPoint data={item} />;
        })}
      </div>
    </section>
  );
}
export default Country;
