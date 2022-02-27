import { POLAND, MOLDOVA, HUNGARY, SLOVAKIA } from "../../configs/constants";

const iconPath = (icon) => `/CountryButtonIcons/${icon}`;

export const SelectCountryIcon = {
  [POLAND]: iconPath("polandicon.svg"),
  [MOLDOVA]: iconPath("moldovaicon.svg"),
  [HUNGARY]: iconPath("hungaryicon.svg"),
  [SLOVAKIA]: iconPath("slovakiaicon.svg"),
}
