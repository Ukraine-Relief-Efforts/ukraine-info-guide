export const apiGetFetch = async (endpoint, getParams) => {
  const baseUrl = "https://g11d3ghry9.execute-api.us-east-1.amazonaws.com/v1/";

  let url = `${baseUrl}${endpoint}?`;
  for (const param in getParams)
    url += `${param}=${getParams[param]}`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (response.status !== 200)
    throw new Error("Failed to fetch API data:", response.status);

  const json = await response.json();

  if (!json)
    throw new Error("Invalid response");

  return json;
}
