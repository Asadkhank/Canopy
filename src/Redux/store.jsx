// src/Redux/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice"; // Adjust path if necessary

// Create the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
