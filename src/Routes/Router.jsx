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
import AddClass from "../pages/AddClass/AddClass";
import UserBooking from "../pages/UserBooking/UserBooking";
import AllUser from "../pages/AllUser/AllUser";
import ManageClasses from "../Admin/ManageClasses/ManageClasses";
import AllClasses from "../AllClasses/AllClasses";
import NavInstructor from "../pages/NavInstructor/NavInstructor";
import StudentAllClasses from "../Student/StudentAllClasses/StudentAllClasses";
import UpdateClass from "../pages/UpdateClass/UpdateClass";

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
			path: '/classDetails/:id',
			element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
			loader: ({ params }) =>
          fetch(`https://photo-server-production.up.railway.app/classDetails/${params.id}`),
		},
		{
			path: '/classes',
			element: <AllClasses></AllClasses>
		},
		{
			path: '/instructor',
			element: <NavInstructor></NavInstructor>
		}
	  ]
	},
	{
		path: "*",
		element: <Error></Error>,
	  },
	  {
		path: '/dashboard',
		element: <DashboardLayout></DashboardLayout>,
		children: [
			{path: '/dashboard/add-class',
			 element:<AddClass></AddClass>
			},
			{
				path: '/dashboard/bookingClass',
				element: <UserBooking></UserBooking>
			},
			{
				path: '/dashboard/allUser',
				element: <AllUser></AllUser>
			},
			{
				path: '/dashboard/manageClasses',
				element: <ManageClasses></ManageClasses>
			},
			{
				path: '/dashboard/SelectedClasses',
				element: <StudentAllClasses></StudentAllClasses>
			},
			{
				path: '/dashboard/updateClass/:id',
				element: <UpdateClass></UpdateClass>,
				loader: ({params}) => fetch(`https://photo-server-production.up.railway.app/classDetails/${params.id}`)
			}
	]
	},
	
  ]);