import { apiGetFetch } from "./apiFetch";

export const fetchMissileAlerts = (lang, count) =>
  apiGetFetch(`/api/v1/missileAlerts`, {
    lang,
    count,
  });
