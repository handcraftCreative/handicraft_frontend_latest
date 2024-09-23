import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import ForgotPassowrd from "../Pages/ForgotPassowrd";
import AdminPanel from "../Pages/AdminPanel";
import Alluser from "../Pages/Alluser";
import AllProducts from "../Pages/AllProducts";
import Details from "../components/ProductDetails/Details";
import AllReviewsPage from "../Pages/AllReviewsPage";
import ResetPassword from "../Pages/ResetPassword";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "sign-up",
				element: <SignUp />,
			},
			{
				path: "forgot-password",
				element: <ForgotPassowrd />,
			},
			{
				path: "reset-password/:token",
				element: <ResetPassword />,
			},
			{
				path: "product-details/:id",
				element: <Details />,
			},

			{
				path: "admin-panel",
				element: <AdminPanel />,
				children: [
					{
						path: "all-products",
						element: <AllProducts />,
					},
					{
						path: "all-users",
						element: <Alluser />,
					},
					{
						path: "all-reviews",
						element: <AllReviewsPage />,
					},
				],
			},
		],
	},
]);

export default router;
