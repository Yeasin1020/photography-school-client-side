import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { DiTypo3 } from "react-icons/di";
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
           {user? 
             <li>
             <Link>Dashboard</Link>
           </li>: '' 
          }
          </ul>
        </div>
        <DiTypo3 className="w-10 h-10"></DiTypo3>
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
