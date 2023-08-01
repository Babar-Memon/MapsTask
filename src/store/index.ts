import { configureStore } from "@reduxjs/toolkit";

import { venuesApi } from "../services/venuesService";
import venueSlice from "./slices/venueSlice";

export const store = configureStore({
  reducer: {
    venue: venueSlice,
    [venuesApi.reducerPath]: venuesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(venuesApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
