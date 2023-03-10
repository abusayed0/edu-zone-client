import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/main/Main";
import Blog from "../../pages/blog/Blog";
import Checkout from "../../pages/checkout/Checkout";
import Courses from "../../pages/courses/Courses";
import Faq from "../../pages/faq/Faq";
import Login from "../../pages/login/Login";
import Register from "../../pages/resgister/Register";
import SingleCourseDetails from "../../pages/single-course-details/SingleCourseDetails";
import PrivateRoute from "../private-route/PrivateRoute";
import Error from "../../pages/error/Error";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                loader:()=>fetch("http://localhost:5000/"),
                element:<Courses></Courses>,
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/faq",
                element:<Faq></Faq>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/course/:id",
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`),
                element:<SingleCourseDetails></SingleCourseDetails>
            },
            {
                path:"/checkout/:id",
                loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`),
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]
    },
    {
        path:"*",
        element:<Error></Error>
    }
])