import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import LocationCard from "./LocationCard";
import Spinner from "../Spinner";

const Map = dynamic(() => import("../Map"), { ssr: false });

const Attribution = ({ children }) => (
  <p className="my-3 opacity-70 text-right">
    {children}
  </p>
);

const CountryDataView = ({ title, data, errorMessage, dataViewRef }) => {
  const { t } = useTranslation();
  const { error, general, reception, source, isoFormat } = data;
  const stamp = new Date(isoFormat);
  const time = `${stamp.toLocaleTimeString()} ${stamp.toLocaleDateString()}`;

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
        {source && source.length > 0 &&
          <Attribution>
            <a href={source} className="link">{t("Source")}</a>
          </Attribution>
        }
        {isoFormat && isoFormat.length > 0 &&
          <Attribution>
            {t("Retrieved at {{time}}", { time })}
          </Attribution>
        }
        <Spinner enabled={!error && !general && !reception} />
        {error && <p>{errorMessage}</p>}
      </div>
      {!error && reception && reception.length > 0 &&
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
