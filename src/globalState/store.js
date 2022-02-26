import { configureStore } from "@reduxjs/toolkit";
// feel free to delete line below - keeping it just as a reference
//import exampleSlice from "./slices/exampleSlice";
import currentPage from "./slices/currentPage";

export const store = configureStore({
  reducer: {
    currentPage,
  },
});
