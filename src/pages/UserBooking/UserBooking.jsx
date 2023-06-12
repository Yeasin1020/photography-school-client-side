import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserBooking = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-white">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Status</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClass.map((cls, i) => (
              <tr key={cls._id}>
                <th>
                  <td>{i+1}</td>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.classPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cls.className}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {cls.instructorName}
                </td>
                <td>
				{cls.status}
                </td>
                
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBooking;
