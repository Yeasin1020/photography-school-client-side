import React, { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
	useEffect(()=> {
        document.title = "Photography-School || UpdateClass"
      },[])
	const {user} = useContext(AuthContext)
	const update = useLoaderData();
	console.log(update)
	const {_id, className, seats, Price, classPhoto} = update;

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	  } = useForm();
	  const onSubmit = (data) => {
		fetch(`http://localhost:5000/update/${_id}`, {
		  method: "PUT",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify(data),
		})
		  .then((res) => res.json())
		  .then((result) => {
			console.log(result);
			if(result.modifiedCount > 0){
			  Swal.fire({
				title: 'success!',
				text: 'Do you want to continue',
				icon: 'success',
				confirmButtonText: 'Oky'
			  })
			}
		  });
		
		
	  };
	
  return (
    <div>
      <div>
        <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
          <h1 class="text-xl font-bold text-white capitalize dark:text-white">
            Add New Class
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="username">
                  Class Name
                </label>
                <input
                  id="username"
				  defaultValue={className}
                  type="text"
                  {...register("className", { required: true })}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="Instructor">
                  Instructor Name
                </label>
                <input
                  value={user?.displayName}
                  {...register("instructorName")}
                  id="instructorName"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">
                  Email Address
                </label>
                <input
                  value={user?.email}
                  {...register("email")}
                  id="emailAddress"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="AvailableSeats"
                >
                  Available seats
                </label>
                <input
                  id="AvailableSeats"
				  defaultValue={seats}
                  {...register("seats", { required: true })}
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="Price">
                  Price
                </label>
                <input
                  id="Price"
				  defaultValue={Price}
                  {...register("Price", { required: true })}
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Date
                </label>
                <input
                  id="date"
                  {...register("data")}
                  type="date"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Text Area
                </label>
                <textarea
                  id="textarea"
                  {...register("textarea")}
                  type="textarea"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Class Photo
                </label>
                <input
                  id="classPhoto"
				  defaultValue={classPhoto}
                  {...register("classPhoto")}
                  type="URL"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div className="hidden">
                <label
                  class="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Class Photo
                </label>
                <input
                  value="pending"
                  id="text"
                  {...register("status")}
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateClass;
