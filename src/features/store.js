import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coins/coinSlice";
import cartReducer from "./cart/cartSlice"
import authReducer from "./auth/authSlice"
import themeReducer from "./theme/themeSlice"

const store = configureStore({
  reducer: {
    coins: coinReducer,
    carts: cartReducer,
    theme:themeReducer,
    auth:authReducer,

  },
});

export default store;
