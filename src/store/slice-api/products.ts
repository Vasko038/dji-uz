import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosQuery";

export const productsApi = createApi({
  reducerPath: "product",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: "/products" }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
