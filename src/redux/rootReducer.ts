import { baseApi } from "./api/baseApi";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  cart: cartReducer,
};
