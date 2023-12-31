import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { GiEntangledTyphoon } from "react-icons/gi";
import { Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div
      
      className="navbar bg-base-100 shadow-sm "
    >
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructor">Instructors</Link>
          </li>
          <li>
            <Link to='/classes'>Classes</Link>
          </li>
          {user ? 
          <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>: ''  
        }
          </ul>
        </div>
        <GiEntangledTyphoon className="w-10 h-10"></GiEntangledTyphoon>
        <a className="ml-5 font-bold normal-case text-xl">Photography School</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructor">Instructors</Link>
          </li>
          <li>
            <Link to='/classes'>Classes</Link>
          </li>
          {user ? 
          <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>: ''  
        }
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <>
              <Avatar
              title={user?.displayName}
              className=" h-10 w-10 mr-5 rounded-2xl"
              src={user?.photoURL}
              alt="avatar"
              rounded={true}
               />
            </>
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
