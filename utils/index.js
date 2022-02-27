import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

export const coordsToGoogleMapsUrl = (lat, lon) =>
  `https://maps.google.com/?q=${lat},${lon}`;

export const removeArrayDuplicates =
  (arr) => arr.filter((v, i, a) => a.indexOf(v) === i);

export const getCommonStaticProps = async ({ locale }) => ({
  ...await serverSideTranslations(locale, [], nextI18NextConfig),
});
