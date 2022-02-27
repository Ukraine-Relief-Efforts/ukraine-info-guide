import Layout from "../../components/Layout";
import CountryDataView from "../../components/CountryDataView";
import HeroChooseCountry from "../../components/Hero/HeroChooseCountry";
import useCountryData from "../../hooks/useCountryData";
import { POLAND } from "../../configs/constants";

// TEMP
import dummyData from "../../dummydata/foodshelter_data.json";

const FoodAndShelterPage = () => {
  const { t, selectedCountryData, dataViewRef } = useCountryData({
    defaultCountry: POLAND,
    fetchApiDataCallback: () => dummyData,
  });

  const { data, inName } = selectedCountryData;

  return (
    <Layout
      hero={
        <HeroChooseCountry
          title={t("Available locations for food and shelter")}
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
