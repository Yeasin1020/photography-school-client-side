import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

const StudentAllClasses = () => {
	useEffect(()=> {
        document.title = "Photography-School || MyClass"
      },[])
  const { user } = useContext(AuthContext);
  const [allData, setData] = useState([]);
  useEffect(() => {
   reload()
  }, []);

  const reload = () =>{
	return  fetch(`https://photo-server-production.up.railway.app/myClass/${user?.email}`)
	.then((res) => res.json())
	.then((data) => setData(data));
  }



  const handleDelete = id => {
	console.log(id)


  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`https://photo-server-production.up.railway.app/classDelete/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
		reload()
        console.log(data);
        if(data.deletedCount> 0){
          Swal.fire(
            'Deleted!',
            'Your class has been deleted.',
            'success'
          )
         
        }
      })


     
    }
  })
  }
  return (
    <div>
      <div className="overflow-x-auto text-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>
                <label></label>
              </th>
			  
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
			 
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allData.map((data) => (
              <tr key={data._id}>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={data.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {data.name}
                </td>
                <td>{data.price}</td>
               
				<th>
					<Button onClick={()=>handleDelete(data._id)} className="bg-red-500 m-3">Delete</Button>
					<Button className=" bg-yellow-900">Pay Now</Button>
				</th>
				
					
				
				
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAllClasses;
