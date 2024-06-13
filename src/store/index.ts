import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
