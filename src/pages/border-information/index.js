import Layout from "../../components/Layout";
import CountryDataView from "../../components/CountryDataView";
import useCountryData from "../../hooks/useCountryData";
import { POLAND } from "../../configs/constants";
import HeroChooseCountry from "../../components/Hero/HeroChooseCountry";

const BorderInformationPage = () => {
  const { t, selectedCountryData, dataViewRef } = useCountryData({
    defaultCountry: POLAND,
  });

  const { data, toName } = selectedCountryData;

  return (
    <Layout hero={<HeroChooseCountry title={t("How to cross the border")} />}>
      {data && (
        <CountryDataView
          dataViewRef={dataViewRef}
          title={t(
            "Information for Ukrainian citizens travelling {{to_country}}",
            { to_country: t(toName) }
          )}
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
