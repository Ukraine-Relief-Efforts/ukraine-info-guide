import { loadCountryData } from "../../globalState/slices/borderCrossingData";
import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import FoodAndShelterInfo from "../../Components/FoodAndShelterInfo/FoodAndShelterInfo";
import CountryPickerV2 from "../../Components/CountryPicker/CountryPickerV2";
import useCountryData from "../../hooks/useCountryData";

// TEMP
import dummyData from "../../dummydata/foodshelter_data.json";

const FoodAndShelterPage = () => {
  const {
    t,
    availableCountries,
    selectedCountryData,
    setSelectedCountry,
  } = useCountryData({
    defaultCountry: "pl",
    fetchApiDataCallback: () => dummyData,
  });

  const { error, data, inName } = selectedCountryData;

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
              <CountryPickerV2 {...{
                availableCountries,
                selectedCountryData,
                setSelectedCountry,
              }} />
            </section>
          }
        />
      }
    >
      {!error && data && <FoodAndShelterInfo
        title={t(
          "Information for Ukrainian citizens {{in_country}}",
          { in_country: t(inName) },
        )}
        data={data}
      />}
      {error && <p>{error}</p>}
    </Layout>
  );
};

export default FoodAndShelterPage;
