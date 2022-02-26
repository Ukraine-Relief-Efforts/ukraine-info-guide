import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { loadCountryData } from "../../globalState/slices/borderCrossingData";
import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import BorderCrossingInfo from "../../Components/BorderCrossingInfo/BorderCrossingInfo";
import CountryPicker from "../../Components/CountryPicker/CountryPicker";

const BorderInformationPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const availableCountries = useSelector((state) =>
    state.borderCrossingData.availableCountries);
  const selectedCountry = useSelector((state) =>
    state.borderCrossingData.selectedCountry);

  const { data, toName } = availableCountries.find(({ code }) =>
    code === selectedCountry);

  useEffect(() => {
    if (!data)
      dispatch(loadCountryData(selectedCountry));
  }, [selectedCountry, data, dispatch]);

  return (
    <Layout
      hero={
        <Hero
          title={t("How to cross the border")}
          subcomponent={
            <section className="mt-10 text-center">
              <p className="text-xl font-semibold">
                {t("Choose a country")}:
              </p>
              <CountryPicker {...{ availableCountries, selectedCountry }} />
            </section>
          }
        />
      }
    >
      {data && <BorderCrossingInfo
        title={t(
          "Information for Ukrainian citizens travelling {{to_country}}",
          { to_country: toName },
        )}
        data={data}
      />}
    </Layout>
  );
};

export default BorderInformationPage;
