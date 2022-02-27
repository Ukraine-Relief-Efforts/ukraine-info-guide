import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import CountryDataView from "../../Components/CountryDataView/CountryDataView";
import CountryPicker from "../../Components/CountryPicker/CountryPicker";
import useCountryData from "../../hooks/useCountryData";
import { POLAND } from "../../Constants/countryCodes";

// TEMP
import dummyData from "../../dummydata/foodshelter_data.json";

const FoodAndShelterPage = () => {
  const {
    t,
    availableCountries,
    selectedCountryData,
    setSelectedCountry,
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
