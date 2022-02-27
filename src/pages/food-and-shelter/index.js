import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { loadCountryData } from "../../store/slices/borderCrossingData";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import FoodAndShelterInfo from "../../components/FoodAndShelterInfo/FoodAndShelterInfo";
import CountryPicker from "../../components/CountryPicker/CountryPicker";

const FoodAndShelterPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const availableCountries = useSelector((state) =>
    state.borderCrossingData.availableCountries);
  const selectedCountry = useSelector((state) =>
    state.borderCrossingData.selectedCountry);

  const { data, inName } = availableCountries.find(({ code }) =>
    code === selectedCountry);

  useEffect(() => {
    if (!data)
      dispatch(loadCountryData(selectedCountry));
  }, [selectedCountry, data, dispatch]);

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
              <CountryPicker {...{ availableCountries, selectedCountry }} />
            </section>
          }
        />
      }
    >
      {data && <FoodAndShelterInfo
        title={t(
          "Information for Ukrainian citizens {{in_country}}",
          { in_country: t(inName) },
        )}
        data={data}
      />}
    </Layout>
  );
};

export default FoodAndShelterPage;
