import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "slices/charts";

const store = configureStore({
  reducer: {
    charts: chartReducer,
  },
  devTools: true,
});
export default store;
