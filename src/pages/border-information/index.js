import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import BorderCrossingInfo from "../../Components/BorderCrossingInfo/BorderCrossingInfo";
import CountryPickerV2 from "../../Components/CountryPicker/CountryPickerV2";
import useCountryData from "../../hooks/useCountryData";

const BorderInformationPage = () => {
  const {
    t,
    availableCountries,
    selectedCountryData,
    setSelectedCountry,
  } = useCountryData({ defaultCountry: "pl" });

  const { data, toName } = selectedCountryData;

  return (
    <Layout
      hero={
        <Hero
          title={t("How to cross the border")}
          subcomponent={
            <section className="mt-5 text-center text-blue-ukraine">
              <p className="text-xl font-semibold">{t("Choose a country")}:</p>
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
      {data && (
        <BorderCrossingInfo
          title={t(
            "Information for Ukrainian citizens travelling {{to_country}}",
            { to_country: t(toName) }
          )}
          data={data}
        />
      )}
    </Layout>
  );
};

export default BorderInformationPage;
