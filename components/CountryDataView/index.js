import { useRef } from "react";
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

  const hasMap = !error && reception && reception.length > 0;

  const mapRef = useRef();

  const scrollToMap = () =>
      mapRef.current && mapRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });

  return (
    <section className="country-data-view" ref={dataViewRef}>
      <div className="bg-gray-200 p-3">
        <div className="text-center">
          <p className="font-semibold mt-5 mb-5 uppercase">
            {title}
          </p>
          {hasMap &&
            <p className="mb-7">
              <a className="link cursor-pointer" onClick={scrollToMap}>
                {t("Map")}
              </a>
            </p>
          }
        </div>
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
      {hasMap &&
        <>
          <p className="mt-10 font-semibold text-center uppercase">
            {t("Border Crossings")}
          </p>
          <Map markers={reception} mapRef={mapRef} />
          <p className="mt-10 mb-1 font-semibold text-center uppercase">
            {t("Locations")}
          </p>
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
