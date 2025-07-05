// https://library-api-gules.vercel.app/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allBookApi = createApi({
  reducerPath: "allbook",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-api-7qik.onrender.com/api/",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: () => "books",
      providesTags: ["Books"],
    }),
    // delete
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    //  update

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/edit-book/${id}`, // ✅ Use correct REST path
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    // post book

    postBooks: builder.mutation({
      query: (data) => ({
        url: "/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllbooksQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostBooksMutation,
} = allBookApi;
