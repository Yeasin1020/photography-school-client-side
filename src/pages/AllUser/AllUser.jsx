import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    dataReload()
  }, []);

  const dataReload = () => {
    fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
  }

  //handle Make Admin

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          dataReload()
          Swal.fire({
            title: `${user.name} is now Admin`,
            confirmButtonColor: "#3085d6",
            showCancelButton: false,
            confirmButtonText: "Ok",
          });
        }
      });
  };

  //handle Make instructor

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: `${user.name} is now instructor`,
            confirmButtonColor: "#3085d6",
            showCancelButton: false,
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="text-white">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <td>{index + 1}</td>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>

                <td>
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <th className="flex">
                  {user.role === "admin" ? (
                    <Button className=" ml-4" disabled fullWidth>
                      <Link>Admin</Link>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleMakeAdmin(user)}
                      className="ml-3 "
                      fullWidth
                    >
                      <Link>Make Admin</Link>
                    </Button>
                  )}

                  {user.role === "instructor" ? (
                    <Button className=" ml-4" disabled fullWidth>
                      <Link>instructor</Link>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleMakeInstructor(user)}
                      className="ml-3"
                      fullWidth
                    >
                      <Link>MakeInstructor</Link>
                    </Button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
