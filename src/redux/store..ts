

import { configureStore } from '@reduxjs/toolkit'
import { allBookApi } from './api/allBookApi'
import { borrowBookApi } from './api/borrowBooksApi'


export const store = configureStore({
  reducer: {


    [allBookApi.reducerPath]:allBookApi.reducer,
    [borrowBookApi.reducerPath]:borrowBookApi.reducer
    
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allBookApi.middleware).concat(borrowBookApi.middleware),


})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch