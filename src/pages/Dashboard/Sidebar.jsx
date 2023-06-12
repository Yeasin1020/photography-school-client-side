import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { FcDvdLogo, FcHome, FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { AuthContext } from "../../Provider/AuthProvider";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://photo-server-production.up.railway.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);
  //todo

  // const isAdmin = true;

  // const  isUser = true;

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const [isActive, setActive] = useState("false");
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center bg-rose-100 mx-auto">
              <Link to="/">
                {" "}
                <FcHome className="w-10 h-10"></FcHome>
              </Link>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <>
                <label
                  htmlFor="Toggle3"
                  className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
                >
                  <input
                    onChange={toggleHandler}
                    id="Toggle3"
                    type="checkbox"
                    className="hidden peer"
                  />

                  {/* Button */}

                  {users.map((us) => (
                    <Button key={us._id}>
                      {us.role === "admin"
                        ? "Admin Dashboard"
                        : us.role === "instructor"
                        ? "Instructor Dashboard"
                        : "Student Dashboard"}
                    </Button>
                  ))}
                </label>

                {users.map((u) => (
                  <div>
                    {
                      u.role === "admin" ? 
                        <>
                          {/* For Admin */}
                          <NavLink
                            to="allUser"
                            className={({ isActive }) =>
                              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                                isActive
                                  ? "bg-gray-300  text-gray-700"
                                  : "text-gray-600"
                              }`
                            }
                          >
                            <span className="mx-4 font-medium">All User</span>
                          </NavLink>
                          <NavLink
                            to="manageClasses"
                            className={({ isActive }) =>
                              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                                isActive
                                  ? "bg-gray-300  text-gray-700"
                                  : "text-gray-600"
                              }`
                            }
                          >
                            <span className="mx-4 font-medium">
                              Manage Classes
                            </span>
                          </NavLink>
                        </>
                       : u.role === "instructor"? 
                      <>
                       
                        {/* for Instructor */}
                        <NavLink
                          to="add-class"
                          className={({ isActive }) =>
                            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                              isActive
                                ? "bg-gray-300  text-gray-700"
                                : "text-gray-600"
                            }`
                          }
                        >
                          <span className="mx-4 font-medium">
                            Add Class
                          </span>
                        </NavLink>
                      

                      <NavLink
                        to="bookingClass"
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                            isActive
                              ? "bg-gray-300  text-gray-700"
                              : "text-gray-600"
                          }`
                        }
                      >
                        <span className="mx-4 font-medium">
                          Booking Class
                        </span>
                      </NavLink>
                    </>
                    :
                    <>
                        
                    {/* for Instructor */}
                    <NavLink
                      to="/dashboard/SelectedClasses"
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                          isActive
                            ? "bg-gray-300  text-gray-700"
                            : "text-gray-600"
                        }`
                      }
                    >
                      <span className="mx-4 font-medium">My Classes</span>
                    </NavLink>
                  

                  <NavLink
                    to="/bookingClass"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <span className="mx-4 font-medium">
                      Enroll Class
                    </span>
                  </NavLink>
                </>

               }
                  </div>
                ))}
              </>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
