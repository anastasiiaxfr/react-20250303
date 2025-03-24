import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphone/slice";
import { cartSlice } from "./entities/cart/slice";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
