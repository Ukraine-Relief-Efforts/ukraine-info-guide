import { API_BASE_URL } from "../configs/constants";

const buildUrl = (endpoint, getParams = {}) => {
  let url = endpoint[0] === "/"
    ? `${endpoint}`
    : `${API_BASE_URL}${endpoint}`;

  if (Object.keys(getParams).length > 0) {
    url += "?";

    for (const param in getParams)
      url += `${param}=${getParams[param]}&`;
  }

  return url;
}

const handleResponse = async (response) => {
  if (response.status !== 200)
    throw new Error("Failed to fetch API data:", response.status);

  const json = await response.json();

  if (!json || Object.keys(json).length < 1)
    throw new Error("Invalid response");

  return json;
}

export const apiGetFetch = async (endpoint, getParams) => {
  const url = buildUrl(endpoint, getParams);

  const response = await fetch(url, {
    method: "GET",
  });

  return await handleResponse(response);
}

export const apiPostFetch = async (endpoint, data) => {
  const url = buildUrl(endpoint);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await handleResponse(response);
}
