import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./features/propertySlice";

export const store = configureStore({
  reducer: {
    propertyPrediction: propertyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
