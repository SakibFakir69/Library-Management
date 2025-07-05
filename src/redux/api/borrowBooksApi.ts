import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";






export const borrowBookApi= createApi({
    reducerPath:'borrowBook',
    baseQuery:fetchBaseQuery({baseUrl:'https://library-api-7qik.onrender.com/api/borrow'
    }),
    tagTypes:['Borrow','Books'],
    endpoints:(builder)=>({
        getborrowBooks:builder.query({
            query:()=> '/borrow-summary'

        }),


        // borrow post 

        borrowBooks:builder.mutation({
            query:({bookId,data})=>({
                url:`/${bookId}`,
                method:'POST',
                body:data,

                
            }),
            invalidatesTags:['Borrow','Books'],
            // 
        


        })

    })





})

export const {useGetborrowBooksQuery,useBorrowBooksMutation} = borrowBookApi;