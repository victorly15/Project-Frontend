import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../ui/page/ProductListingPage";
import ErrorPage from "../ui/page/ErrorPage";
// import ProductDetail from "../ui/page/ProductDetailPage/ProductDetailPage.tsx";
import LoginPage from "../ui/page/LoginPage";
import Checkout from "../ui/page/Checkout";
import ThankYou from "../ui/page/ThankYou/ThankYou.tsx";
import RegisterPage from "../ui/page/RegisterPage";
// import ShoppingCartPage from "../ui/page/ShoppingCartPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListingPage/>,
        errorElement: <ErrorPage/>
    },
    // {
    //     path: "/product/:productId",
    //     element: <ProductDetail/>
    // },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/checkout/:transactionId",
        element: <Checkout/>
    },
    {
        path: "/thankyou",
        element: <ThankYou/>
    },
    {
        path: "/error",
        element: <ErrorPage/>
    }
])

