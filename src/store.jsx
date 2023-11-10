import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartSlice from "../src/Features/Cart/CartSlice"
import ProductSlice from "../src/Features/Products/ProductSlice"
let initialState = {};
let store = configureStore(
  {
    reducer: {
      products: ProductSlice,
      carts: CartSlice,
    },
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setupListeners(store.dispatch);

export default store;