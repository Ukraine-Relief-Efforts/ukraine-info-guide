import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setSelectedCountry } from "../../globalState/slices/borderCrossingData";

const CountryPicker = ({ availableCountries, selectedCountry }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="flex flex-row">
      {availableCountries.map(({ name, code }) => (
        <p key={code} className="m-4 link cursor-pointer" onClick={() => dispatch(setSelectedCountry(code))}>
          {t(name)}
        </p>
      ))}
    </div>
  );
};

export default CountryPicker;
