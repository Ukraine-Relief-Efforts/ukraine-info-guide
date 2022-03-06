import { apiGetFetch, apiPostFetch } from "./apiFetch";
import { getAccessToken } from "../utils";

export const fetchTranslations = (lang) =>
  apiGetFetch(`/locales/${lang}/translation.json`, {});

export const updateTranslations = async (lang, data) =>
  apiPostFetch(
    "/api/v1/translations",
    { lang, data },
  );
