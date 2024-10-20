import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosQuery";

export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getCategories: builder.query({ query: () => ({ url: "/categories" }) }),
  }),
});
export const { useGetCategoriesQuery } = categoriesApi;
