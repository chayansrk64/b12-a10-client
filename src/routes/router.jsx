import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddListing from "../pages/AddListing/AddListing";
import MyListings from "../pages/MyListings/MyListings";
import MyOrders from "../pages/MyOrders/MyOrders";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ListingDetails from "../pages/ListingDetails/ListingDetails";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import PetsAndSupplies from "../pages/PetsAndSupplies/PetsAndSupplies";
import UpdateListing from "../components/UpdateListing/UpdateListing";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";



const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/my-and-supplies',
                Component: PetsAndSupplies
            },
            {
                path: '/listing-details/:id',
                loader: ({params}) => fetch(`http://localhost:3000/listings/${params.id}`),
                element: <ListingDetails></ListingDetails>,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            },
            {
                path: '/listing-update/:id',
                loader: ({params}) => fetch(`http://localhost:3000/listings/${params.id}`),
                element: <UpdateListing></UpdateListing>,
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>
            },
            {
                path: '/category/:categoryName',
                element: <CategoryPage></CategoryPage>
            },
            {
                path: '/add-listing',
                element: <PrivateRoute><AddListing></AddListing></PrivateRoute>
            },
            {
                path: '/my-listings',
                element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
            },
            {
                path: '/my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;