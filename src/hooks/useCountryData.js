import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchCountryBorderInfo } from "../api/CountryApi";

const allCountries = (() => {
  // We don't want to translate yet but we do want i18next-parser
  // to find these strings
  const t = (s) => s;

  return {
    pl: {
      code: "pl",
      name: t("Poland"),
      toName: t("to Poland"),
      inName: t("in Poland"),
      apiName: "poland",
    },
    md: {
      code: "md",
      name: t("Moldova"),
      toName: t("to Moldova"),
      inName: t("in Moldova"),
      apiName: "moldova",
    },
    hu: {
      code: "hu",
      name: t("Hungary"),
      toName: t("to Hungary"),
      inName: t("in Hungary"),
      apiName: "hungary",
    },
    sk: {
      code: "sk",
      name: t("Slovakia"),
      toName: t("to Slovakia"),
      inName: t("in Slovakia"),
      apiName: "slovakia",
    },
  };
})();

const useCountryData = ({
  defaultCountry = null,
  availableCountries = [],
  fetchApiDataCallback = fetchCountryBorderInfo,
}) => {
  availableCountries = availableCountries.length
    ? availableCountries.map(code => allCountries[code])
    : Object.values(allCountries);

  defaultCountry = defaultCountry || availableCountries[0];

  const [library, setLibrary] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const fetchCountryData = async (countryName) => {
    let data;
    try {
      data = await fetchApiDataCallback(countryName, language);
    } catch (error) {
      data = { error };
    }

    setLibrary({
      ...library,
      [language]: {
        ...library[language],
        [countryName]: data,
      },
    });
  }

  const getCountryData = (countryName) => {
    const countries = library[language];
    if (countries) {
      const data = countries[countryName];
      if (data) {
        return data;
      }
    }

    fetchCountryData(countryName);
    return null;
  }

  const countryData = getCountryData(allCountries[selectedCountry].apiName)

  return {
    t,
    availableCountries,
    selectedCountryData: {
      ...allCountries[selectedCountry],
      data: countryData,
    },
    setSelectedCountry,
  };
}

export default useCountryData;
