import { useRef } from "react";
import { useTranslation } from "next-i18next";
import LocationCard from "./LocationCard";
import Spinner from "../Spinner";
import Map from "../Map";
import CountryPicker from "../CountryPicker";

const Attribution = ({ children }) => (
  <p className="my-3 opacity-70 text-right">
    {children}
  </p>
);

const CountryDataView2 = ({
  title,
  data,
  kmlUrl,
  kmlSource,
  availableCountries,
  setSelectedCountry,
  errorMessage,
}) => {
  const { t } = useTranslation();

  const { error, general, reception, source, isoFormat } = data || {
    general: [],
    reception: [],
  };

  const stamp = new Date(isoFormat);
  const time = `${stamp.toLocaleTimeString()} ${stamp.toLocaleDateString()}`;

  const hasMap = (!error && reception && reception.length > 0) || kmlUrl;

  const mapRef = useRef();

  return (
    <section className="country-data-view w-full">
      {hasMap &&
        <div className="w-full">
          <Map {...{ kmlUrl, kmlSource, mapRef }} />
        </div>
      }
      <div className="bg-gray-200 p-3 rounded pt-10">
        <p className="text-xl font-semibold text-blue-ukraine text-center">
          {t("Choose a country")}:
        </p>
        <CountryPicker {...{ availableCountries, setSelectedCountry }} />
        <div className="text-center mt-10 mb-5">
          <p className="font-semibold uppercase">
            {title}
          </p>
        </div>
        <ul className="country-data-view-info-list list-disc">
          {!error && general &&
            general.length
              ? general.map((item, index) => (
                <li className="mb-2" key={index}>
                  {item}
                </li>
              ))
              : <Spinner />
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

export default CountryDataView2;
