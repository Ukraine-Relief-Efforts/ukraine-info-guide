import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import CountryDataView from "../components/CountryDataView/CountryDataView2";
import Hero from "../components/Hero";
import useCountryData from "../hooks/useCountryData";
import {
  POLAND,
  MOLDOVA,
  ROMANIA,
  HUNGARY,
} from "../configs/constants";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const BorderInformationPage = () => {
  const {
    t,
    selectedCountryData,
    dataViewRef,
    availableCountries,
    setSelectedCountry,
  } = useCountryData({
    defaultCountry: POLAND,
    availableCountries: [ POLAND, MOLDOVA, ROMANIA, HUNGARY ],
    useLocationFalse: false,
  });

  const { data, toName } = selectedCountryData;

  const kmlUrl = "/api/v1/country-kml";

  return (
    <Layout hero={<Hero title={t("How to cross the border")}/>}>
      <CountryDataView
        dataViewRef={dataViewRef}
        title={t(
          "Information for Ukrainian citizens travelling {{to_country}}",
          { to_country: t(toName) }
        )}
        errorMessage={t(
          "Sorry! We don't have information about this border at the moment"
        )}
        {...{ data, kmlUrl, availableCountries, setSelectedCountry }}
      />
    </Layout>
  );
};

export default BorderInformationPage;
