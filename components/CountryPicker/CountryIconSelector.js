import {
  POLAND,
  MOLDOVA,
  ROMANIA,
  HUNGARY,
  SLOVAKIA,
} from "../../configs/constants";

const iconPath = (icon) => `/CountryButtonIcons/${icon}`;

// See https://github.com/djaiss/mapsicon

export const SelectCountryIcon = {
  [POLAND]: iconPath("polandicon.svg"),
  [MOLDOVA]: iconPath("moldovaicon.svg"),
  [ROMANIA]: iconPath("romaniaicon.svg"),
  [HUNGARY]: iconPath("hungaryicon.svg"),
  [SLOVAKIA]: iconPath("slovakiaicon.svg"),
}
