import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";

export  const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Main></Main>,
	  children: [
		{
			path: '/',
			element: <Home></Home>
		},
		{
			path: '/logIn',
			element: <LogIn></LogIn>
		},
		{
			path: '/register',
			element: <Register></Register>
		}
	  ]
	},
	{
		path: "*",
		element: <Error></Error>,
	  },
  ]);