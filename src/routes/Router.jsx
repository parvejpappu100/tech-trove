import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "dashboard",
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "shop",
                element: <Shop></Shop>
            }
        ]
    },
]);

export default router;