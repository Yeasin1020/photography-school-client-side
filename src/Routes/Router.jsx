import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import ClassDetails from "../pages/classDetails/ClassDetails";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import DashboardLayout from "../pages/DashboardLayout/DashboardLayout";

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
		},
		{
			path: '/class/:id',
			element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
		},
		
	  ]
	},
	{
		path: "*",
		element: <Error></Error>,
	  },
	  {
		path: '/dashboard',
		element: <DashboardLayout></DashboardLayout>,
		children: [{path: '/dashboard/add-class', element:<p>Add room form</p>}]
	}
  ]);