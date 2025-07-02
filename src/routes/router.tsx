import App from "@/App";
import AddBook from "@/page/AddBook";
import Book from "@/page/Book";
import BookSummary from "@/page/BookSummary";
import { createBrowserRouter } from "react-router-dom";




 export const router = createBrowserRouter([


    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Book/>,
            },
            {
                path:'/add-book',
                element:<AddBook/>
            },
            {
                path:'/book-summary',
                element:<BookSummary/>
            }
        ]
    }



])