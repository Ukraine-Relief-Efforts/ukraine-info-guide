import PolandButton from "../../assets/CountryButtonIcons/polandicon.svg";
import HungaryButton from "../../assets/CountryButtonIcons/hungaryicon.svg";
import MoldovaButton from "../../assets/CountryButtonIcons/moldovaicon.svg";
import SlovakiaButton from "../../assets/CountryButtonIcons/slovakiaicon.svg";
import * as CountryCodes from "../../Constants/countryCodes";

export const CountryIconSelector = (countryCode) => {
  switch (countryCode) {
    case CountryCodes.HUNGARY:
      return HungaryButton;
    case CountryCodes.MOLDOVA:
      return MoldovaButton;
    case CountryCodes.SLOVAKIA:
      return SlovakiaButton;
    case CountryCodes.POLAND:
      return PolandButton;
    default:
      return undefined;
  }
};
