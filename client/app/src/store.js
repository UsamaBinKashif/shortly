import { configureStore } from "@reduxjs/toolkit";
import urlSlice from "./features/url.slice";
export const store = configureStore({
  reducer: {
    url: urlSlice,
  },
});
