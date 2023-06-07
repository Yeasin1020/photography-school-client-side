import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Avatar } from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div
      
      className="navbar bg-base-100"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Instructors</a>
            </li>
            <li>
              <a>Classes</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <a className="ml-5 font-bold normal-case text-xl">Photography School</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Instructors</a>
          </li>
          <li>
            <a>Classes</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <li>
              <Avatar
                title={user?.photoURL}
                className=" h-10 w-10 mr-5 rounded-2xl"
                img={user?.displayName}
                rounded={true}
              />
            </li>
            <li className=" list-none">
              <Button onClick={handleLogOut} className=" bg-red-600" fullWidth>
                LogOut
              </Button>
            </li>
          </>
        ) : (
          <li className=" list-none">
            <Button className="" fullWidth>
              <Link to="/logIn">Login</Link>
            </Button>
          </li>
        )}
      </div>
    </div>
  );
};

export default NavBar;
