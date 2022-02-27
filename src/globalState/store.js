import { configureStore } from "@reduxjs/toolkit";
import currentPage from "./slices/currentPage";

export const store = configureStore({
  reducer: {
    currentPage,
  },
});
