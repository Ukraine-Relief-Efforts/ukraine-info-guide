import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import CountryDataView from "../../Components/CountryDataView/CountryDataView";
import CountryPicker from "../../Components/CountryPicker/CountryPicker";
import useCountryData from "../../hooks/useCountryData";
import { POLAND } from "../../Constants/countryCodes";

const BorderInformationPage = () => {
  const {
    t,
    availableCountries,
    selectedCountryData,
    setSelectedCountry,
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
          title={t(
            "Information for Ukrainian citizens travelling {{to_country}}",
            { to_country: t(toName) }
          )}
          data={data}
          t={t}
        />
      )}
    </Layout>
  );
};

export default BorderInformationPage;
