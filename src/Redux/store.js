import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});
