import { categoriesApi } from "./slice-api/categories";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slice-api/products";
// import themeMode from "./slice/mode";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    // mode: themeMode,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
