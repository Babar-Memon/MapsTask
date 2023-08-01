import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../constants/api";

export const venuesApi = createApi({
  reducerPath: "venuesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
  }),
  endpoints: (builder) => ({
    getVenues: builder.query({
      query: () => "/venues",
    }),
  }),
});

export const { useGetVenuesQuery } = venuesApi;
