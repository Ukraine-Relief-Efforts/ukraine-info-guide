import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import CountryDataView from "../components/CountryDataView";
import HeroChooseCountry from "../components/Hero/HeroChooseCountry";
import useCountryData from "../hooks/useCountryData";
import {
  POLAND,
  HUNGARY,
  ROMANIA,
  SLOVAKIA,
  MOLDOVA,
} from "../configs/constants";

import polandFSdata from "../data/foodshelter_poland.json";
import hungaryFSdata from "../data/foodshelter_hungary.json";
import romaniaFSdata from "../data/foodshelter_romania.json";
import slovakiaFSdata from "../data/foodshelter_slovakia.json";
import moldovaFSdata from "../data/foodshelter_moldova.json";

const fsData = {
  "poland": polandFSdata,
  "hungary": hungaryFSdata,
  "romania": romaniaFSdata,
  "slovakia": slovakiaFSdata,
  "moldova": moldovaFSdata,
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const FoodAndShelterPage = () => {
  const {
    t,
    selectedCountryData,
    dataViewRef,
    availableCountries,
    setSelectedCountry,
  } = useCountryData({
    defaultCountry: POLAND,
    availableCountries: [ POLAND, HUNGARY, ROMANIA, SLOVAKIA, MOLDOVA ],
    fetchApiDataCallback: (countryName, language) => fsData[countryName],
  });

  const { data, inName } = selectedCountryData;

  return (
    <Layout
      hero={
        <HeroChooseCountry
          title={t("Available locations for food, shelter, and accodomation")}
          {...{
            availableCountries,
            setSelectedCountry,
          }}
        />
      }
    >
      {data && (
        <CountryDataView
          dataViewRef={dataViewRef}
          title={t("Information for Ukrainian citizens {{in_country}}", {
            in_country: t(inName),
          })}
          errorMessage={t(
            "Sorry! We don't have information about this country at the moment"
          )}
          data={data}
        />
      )}
    </Layout>
  );
};

export default FoodAndShelterPage;
