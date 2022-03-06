import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import CountryDataView from "../components/CountryDataView";
import HeroChooseCountry from "../components/Hero/HeroChooseCountry";
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
  });

  const { data, toName } = selectedCountryData;

  return (
    <Layout
      hero={
        <HeroChooseCountry
          title={t("How to cross the border")}
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
          title={t(
            "Information for Ukrainian citizens travelling {{to_country}}",
            { to_country: t(toName) }
          )}
          mapTitle={t("Border Crossings")}
          errorMessage={t(
            "Sorry! We don't have information about this border at the moment"
          )}
          data={data}
        />
      )}
    </Layout>
  );
};

export default BorderInformationPage;
