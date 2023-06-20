import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import links from "./links";
import shorten from "./shorten";

export const store = configureStore({
  reducer: { links, shorten },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
