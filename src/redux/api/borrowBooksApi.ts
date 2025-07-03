import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";






export const borrowBookApi= createApi({
    reducerPath:'borrowBook',
    baseQuery:fetchBaseQuery({baseUrl:'https://library-api-7qik.onrender.com/api/'
    }),
    tagTypes:['Borrow'],
    endpoints:(builder)=>({
        getborrowBooks:builder.query({
            query:()=> '/borrow'

        }),


        // borrow post 

        borrowBooks:builder.mutation({
            query:({ quantity, dueDate,book})=>({
                url:'borrow',
                method:'POST',
                body:{ quantity, dueDate,book},

                
            }),
            invalidatesTags:['Borrow'],
            // 


        })

    })





})

export const {useGetborrowBooksQuery,useBorrowBooksMutation} = borrowBookApi;