import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// TODO: Replace this with an API call
import dummyData from "../../dummydata/poland_data.json";

export const loadCountryData = createAsyncThunk(
  "loadBorderCrossingCountry",
  async (code) => {
    // TODO: Fetch the data from the API
    return {
      code,
      data: dummyData,
    };
  },
);

// We don't want to translate yet but we do want i18next-parser
// to find these strings
const t = (s) => s;

const borderCrossingData = createSlice({
  name: "borderCrossingData",
  initialState: {
    availableCountries: [
      {
        name: t("Poland"),
        toName: t("to Poland"),
        code: "pl",
        link: "https://www.gov.pl/web/udsc/ukraina-en",
        data: null,
      },
      {
        name: t("Moldova"),
        toName: t("to Moldova"),
        code: "md",
        data: null,
      },
      {
        name: t("Hungary"),
        toName: t("to Hungary"),
        code: "hu",
        data: null,
      },
      {
        name: t("Slovakia"),
        toName: t("to Slovakia"),
        code: "sk",
        data: null,
      },
    ],
    selectedCountry: "pl",
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    [loadCountryData.fulfilled.type]: (state, action) => {
      console.log(state, action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountryData.fulfilled, (state, action) => {
      const { code, data } = action.payload;
      state.availableCountries = state.availableCountries.map(country =>
        country.code === code
          ? { ...country, data }
          : country);
    });
  },
});

export const { setSelectedCountry } = borderCrossingData.actions;

export default borderCrossingData.reducer;
