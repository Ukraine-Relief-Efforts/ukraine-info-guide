import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import CountryDataView from "../../components/CountryDataView";
import CountryPicker from "../../components/CountryPicker";
import useCountryData from "../../hooks/useCountryData";
import { POLAND } from "../../configs/constants";

// TEMP
import dummyData from "../../dummydata/foodshelter_data.json";

const FoodAndShelterPage = () => {
  const {
    t,
    availableCountries,
    selectedCountryData,
    setSelectedCountry,
    dataViewRef,
  } = useCountryData({
    defaultCountry: POLAND,
    fetchApiDataCallback: () => dummyData,
  });

  const { data, inName } = selectedCountryData;

  return (
    <Layout
      hero={
        <Hero
          title={t("Available locations for food and shelter")}
          subcomponent={
            <section className="mt-10 text-center">
              <p className="text-xl font-semibold">
                {t("Choose a country")}:
              </p>
              <CountryPicker {...{
                availableCountries,
                selectedCountryData,
                setSelectedCountry,
              }} />
            </section>
          }
        />
      }
    >
      {data && (
        <CountryDataView
          dataViewRef={dataViewRef}
          title={t(
            "Information for Ukrainian citizens {{in_country}}",
            { in_country: t(inName) },
          )}
          errorMessage={t("Sorry! We don't have information about this country at the moment")}
          data={data}
        />
      )}
    </Layout>
  );
};

export default FoodAndShelterPage;
