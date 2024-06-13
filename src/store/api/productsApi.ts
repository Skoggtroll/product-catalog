import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "../../schemas/types/Product";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct[], unknown>({
      query: () => "products",
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
