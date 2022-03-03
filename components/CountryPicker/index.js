import { useTranslation } from "next-i18next";
import { SelectCountryIcon } from "./CountryIconSelector";
import IconPicker from "../IconPicker";

const CountryPicker = ({
  availableCountries,
  setSelectedCountry,
  selectedCountryData,
}) => {
  const { t } = useTranslation();

  const options = availableCountries.map(({ name, code }) => ({
    name: t(name),
    icon: SelectCountryIcon[code],
    onClick: () => setSelectedCountry(code),
  }));

  return (
    <IconPicker options={options} />
  );
};

export default CountryPicker;
