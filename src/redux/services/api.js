import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => "/products",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsByHeadphoneId: builder.query({
      query: (headphoneId) => `/reviews?productId=${headphoneId}`,
      providesTags: [{ type: "reviews", id: "all" }],
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        url: `/review/${headphoneId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
  useGetUsersQuery,
  useGetReviewsByHeadphoneIdQuery,
  useAddReviewMutation,
} = api;
