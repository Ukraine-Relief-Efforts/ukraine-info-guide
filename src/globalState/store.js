import { configureStore } from "@reduxjs/toolkit";
// can delete line below, just keeping for now as a reference
// import exampleReducer from "./slices/exampleSlice";

export const store = configureStore({
  reducer: {
    //  exampleReducer,
  },
});
