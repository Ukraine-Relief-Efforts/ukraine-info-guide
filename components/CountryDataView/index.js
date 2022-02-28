import dynamic from "next/dynamic";
import LocationCard from "./LocationCard";
import Spinner from "../Spinner";

const Map = dynamic(() => import("../Map"), { ssr: false });

const CountryDataView = ({ title, data, errorMessage, dataViewRef }) => {
  const { error, general, reception } = data;

  return (
    <section className="country-data-view" ref={dataViewRef}>
      <div className="bg-gray-200 p-3">
        <p className="font-semibold mb-5 uppercase">{title}</p>
        <ul className="country-data-view-info-list list-disc">
          {!error && general &&
            general.map((item, index) => (
              <li className="mb-2" key={index}>
                {item}
              </li>
            ))
          }
        </ul>
        <Spinner enabled={!error && !general && !reception} />
        {error && <p>{errorMessage}</p>}
      </div>
      {!error && reception &&
        <>
          <Map markers={reception} />
          <div className="flex flex-wrap items-center justify-center">
            {reception.map((item, index) => (
              <LocationCard data={item} key={index} />
            ))}
          </div>
        </>
      }
    </section>
  );
};

export default CountryDataView;
