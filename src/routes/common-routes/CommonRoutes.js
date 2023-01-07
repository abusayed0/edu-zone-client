import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/main/Main";
import Blog from "../../pages/blog/Blog";
import Checkout from "../../pages/checkout/Checkout";
import Courses from "../../pages/courses/Courses";
import Faq from "../../pages/faq/Faq";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/resgister/Register";
import SingleCourseDetails from "../../pages/single-course-details/SingleCourseDetails";
import PrivateRoute from "../private-route/PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                loader:()=>fetch("http://localhost:5000/courses"),
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
                path:"/courses/:id",
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
                element:<SingleCourseDetails></SingleCourseDetails>
            },
            {
                path:"/checkout/:id",
                loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`),
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]
    }
])