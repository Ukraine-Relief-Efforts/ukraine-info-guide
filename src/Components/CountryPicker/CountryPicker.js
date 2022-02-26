import { useDispatch } from "react-redux";
import { setSelectedCountry } from "../../globalState/slices/borderCrossingData";

const CountryPicker = ({ availableCountries, selectedCountry }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row">
      {
        availableCountries.map(({ name, code }) =>
          <p
            key={code}
            className="m-4 link cursor-pointer"
            onClick={() => dispatch(setSelectedCountry(code))}
          >{name}</p>
        )
      }
    </div>
  );
}

export default CountryPicker;
