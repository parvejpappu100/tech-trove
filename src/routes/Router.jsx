import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import Wishlist from "../pages/Wishlist/Wishlist";


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
                path: "shop/:category",
                element: <Shop></Shop>
            },
            {
                path: "productDetails/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "myCart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            },
            {
                path: 'wishlist',
                element: <PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>
            }
        ]
    },
]);

export default router;