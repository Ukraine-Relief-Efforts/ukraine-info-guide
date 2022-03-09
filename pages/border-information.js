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
  const kmlSource = "https://www.google.com/maps/d/u/0/viewer?mid=1s5tABxCBpgKYxMi1GHqt8zFAisiz7qRF&hl=en_US&ll=47.42056877966478%2C28.175586786855995&z=6";

  return (
    <Layout hero={<Hero title={t("How to cross the border")} compact />}>
      <CountryDataView
        dataViewRef={dataViewRef}
        title={t(
          "Information for Ukrainian citizens travelling {{to_country}}",
          { to_country: t(toName) }
        )}
        errorMessage={t(
          "Sorry! We don't have information about this border at the moment"
        )}
        {...{ data, kmlUrl, kmlSource, availableCountries, setSelectedCountry }}
      />
    </Layout>
  );
};

export default BorderInformationPage;
