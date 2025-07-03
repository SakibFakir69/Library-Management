import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const borrowBookApi= createApi({
    reducerPath:'borrowBook',
    baseQuery:fetchBaseQuery({baseUrl:'https://library-api-7qik.onrender.com/api'
    }),
    tagTypes:['Borrow'],
    endpoints:(builder)=>({
        getborrowBooks:builder.query({
            query:()=> '/borrow'

        })

    })





})

export const {useGetborrowBooksQuery} = borrowBookApi;