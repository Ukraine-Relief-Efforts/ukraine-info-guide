import { configureStore } from "@reduxjs/toolkit";
import currentPage from "./slices/currentPage";
import borderCrossingData from "./slices/borderCrossingData";

export const store = configureStore({
  reducer: {
    currentPage,
    borderCrossingData,
  },
});
