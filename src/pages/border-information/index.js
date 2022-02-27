import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import CountryDataView from "../../components/CountryDataView";
import CountryPicker from "../../components/CountryPicker";
import useCountryData from "../../hooks/useCountryData";
import { POLAND } from "../../configs/constants";

const BorderInformationPage = () => {
  const {
    t,
    availableCountries,
    selectedCountryData,
    setSelectedCountry,
    dataViewRef,
  } = useCountryData({ defaultCountry: POLAND });

  const { data, toName } = selectedCountryData;

  return (
    <Layout
      hero={
        <Hero
          title={t("How to cross the border")}
          subcomponent={
            <section className="mt-5 text-center text-blue-ukraine">
              <p className="text-xl font-semibold">{t("Choose a country")}:</p>
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
            "Information for Ukrainian citizens travelling {{to_country}}",
            { to_country: t(toName) }
          )}
          errorMessage={t("Sorry! We don't have information about this border at the moment")}
          data={data}
        />
      )}
    </Layout>
  );
};

export default BorderInformationPage;
