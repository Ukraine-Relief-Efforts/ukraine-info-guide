import { apiGetFetch } from "./apiFetch";

export const fetchCountryBorderInfo = (countryName, language) =>
  apiGetFetch("country", {
    country: `${countryName}-${language}`,
  });
