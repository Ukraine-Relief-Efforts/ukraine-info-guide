import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import CountryDataView from "../components/CountryDataView";
import HeroChooseCountry from "../components/Hero/HeroChooseCountry";
import useCountryData from "../hooks/useCountryData";
import { POLAND } from "../configs/constants";

import jsonData from "../data/foodshelter_poland.json";

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
    availableCountries: [ POLAND ],
    fetchApiDataCallback: () => jsonData,
  });

  const { data, inName } = selectedCountryData;

  return (
    <Layout
      hero={
        <HeroChooseCountry
          title={t("Available locations for food and shelter")}
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
