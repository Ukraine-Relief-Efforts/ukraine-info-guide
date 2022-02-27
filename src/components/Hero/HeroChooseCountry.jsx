import Hero from ".";
import useCountryData from "../../hooks/useCountryData";
import CountryPicker from "../CountryPicker";
import { POLAND } from "../../configs/constants";

const HeroChooseCountry = ({ title }) => {
  const { t, availableCountries, selectedCountryData, setSelectedCountry } =
    useCountryData({ defaultCountry: POLAND });
  return (
    <Hero
      title={title}
      subcomponent={
        <section className="mt-5 text-center text-blue-ukraine">
          <p className="text-xl font-semibold">{t("Choose a country")}:</p>
          <CountryPicker
            {...{
              availableCountries,
              selectedCountryData,
              setSelectedCountry,
            }}
          />
        </section>
      }
    />
  );
};

export default HeroChooseCountry;
