
// https://library-api-gules.vercel.app/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const allBookApi = createApi({
    reducerPath:'allbook',
    baseQuery:fetchBaseQuery({baseUrl:'https://library-api-7qik.onrender.com/api/'}),
    endpoints:(builder)=>({
        getAllbooks:builder.query({
            query:()=> 'books'

        })
    })



})

export const {useGetAllbooksQuery} = allBookApi;