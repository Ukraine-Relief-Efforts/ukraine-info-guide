import Hero from ".";
import CountryPicker from "../CountryPicker";
import { useTranslation } from "next-i18next";

const HeroChooseCountry = ({
  title,
  availableCountries,
  setSelectedCountry,
  selectedCountryData,
}) => {
  const { t } = useTranslation();
  return (
    <Hero
      title={title}
      subcomponent={
        <section className="mt-5 text-center text-blue-ukraine">
          <p className="text-xl font-semibold">{t("Choose a country")}:</p>
          <CountryPicker
            {...{
              availableCountries,
              setSelectedCountry,
              selectedCountryData,
            }}
          />
        </section>
      }
    />
  );
};

export default HeroChooseCountry;
