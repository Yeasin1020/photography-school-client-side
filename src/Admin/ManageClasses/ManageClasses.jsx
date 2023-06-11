import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    dataRefresh();
  }, []);

  const dataRefresh = () => {
    fetch("http://localhost:5000/allClass")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  };

  // handlePending

  const handleMakePending = (user) => {
    fetch(`http://localhost:5000/class/pending/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          dataRefresh();
          Swal.fire({
            title: "This class is Pending",
            confirmButtonColor: "#3085d6",
            showCancelButton: false,
            confirmButtonText: "Ok",
          });
        }
      });
  };

  // handleApprove

  const handleMakeApprove = (user) => {
    fetch(`http://localhost:5000/class/approve/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          dataRefresh();
          Swal.fire({
            title: "This class is Approve",
            confirmButtonColor: "#3085d6",
            showCancelButton: false,
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto text-white">
      <table className="table text-white">
        {/* head */}
        <thead className="text-white">
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Class Name</th>
            <th>Instructor name & Email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {allData.map((data) => (
            <tr key={data._id}>
              <th></th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={data?.classPhoto}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{data?.className}</div>
                  </div>
                </div>
              </td>
              <td>
                {data.instructorName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {data?.email}
                </span>
              </td>
              <td>{data?.seats}</td>
              <td>${data?.Price}</td>
              <th>
                {data?.status === "pending"
                  ? "Pending"
                  : data?.status === "approve"
                  ? "Approved"
                  : data?.status === "denied"
                  ? "Denied"
                  : "No Status"}
              </th>
              <th>
                {data.status === "pending" ? (
                  <Button className=" ml-3 mb-2" disabled fullWidth>
                    <Link>Pending</Link>
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleMakePending(data)}
                    className="ml-3 mb-2"
                    fullWidth
                  >
                    <Link>Make Pending</Link>
                  </Button>
                )}

                {data.status === "approve" ? (
                  <Button className=" ml-3" disabled fullWidth>
                    <Link>Approved</Link>
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleMakeApprove(data)}
                    className="ml-3"
                    fullWidth
                  >
                    <Link>Make Approved</Link>
                  </Button>
                )}
              </th>
            </tr>
          ))}

          {/* row 2 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageClasses;
