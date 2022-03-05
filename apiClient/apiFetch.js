import { API_BASE_URL } from "../configs/constants";

export const apiGetFetch = async (endpoint, getParams) => {
  let url = endpoint[0] === "/"
    ? `${endpoint}?`
    : `${API_BASE_URL}${endpoint}?`;
  for (const param in getParams)
    url += `${param}=${getParams[param]}&`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (response.status !== 200)
    throw new Error("Failed to fetch API data:", response.status);

  const json = await response.json();

  if (!json || Object.keys(json).length < 1)
    throw new Error("Invalid response");

  return json;
}
