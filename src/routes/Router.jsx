import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import AllUsers from "../pages/AdminDashBoard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import MyOrder from "../pages/MyOrder/MyOrder";
import ManageOrders from "../pages/AdminDashBoard/ManageOrders/ManageOrders";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ManageSliders from "../pages/AdminDashBoard/ManageSliders/ManageSliders";
import AddNewSlider from "../pages/AdminDashBoard/AddNewSlider/AddNewSlider";
import UpdateSlider from "../pages/AdminDashBoard/UpdateSlider/UpdateSlider";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: "checkout",
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
            },
            {
                path: "payment",
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            {
                path: "payment-history",
                element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
            },
            {
                path: "myOrder",
                element: <PrivateRoutes><MyOrder></MyOrder></PrivateRoutes>
            },
            // * ADMIN DASHBOARD LINK :
            {
                path: "allUsers",
                element: <PrivateRoutes><AdminRoutes><AllUsers></AllUsers></AdminRoutes></PrivateRoutes>
            },
            {
                path: "manageOrders",
                element: <PrivateRoutes><AdminRoutes><ManageOrders></ManageOrders></AdminRoutes></PrivateRoutes>
            },
            {
                path: "sliders",
                element: <PrivateRoutes><AdminRoutes><ManageSliders></ManageSliders></AdminRoutes></PrivateRoutes>
            },
            {
                path: "addSlider",
                element: <PrivateRoutes><AdminRoutes><AddNewSlider></AddNewSlider></AdminRoutes></PrivateRoutes>
            },
            {
                path: "updateSlider/:id",
                element: <PrivateRoutes><AdminRoutes><UpdateSlider></UpdateSlider></AdminRoutes></PrivateRoutes>
            }
        ]
    },
]);

export default router;