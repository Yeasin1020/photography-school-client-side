import React, { useContext, useState } from "react";
import {ImSpinner3} from 'react-icons/im'

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	  } = useForm();
	
	  const { createUser, updateUserProfile } = useContext(AuthContext);
	  const navigate = useNavigate();
	
	  const onSubmit = (data) => {
		console.log(data);
		createUser(data.email, data.password, data.confirm).then((result) => {
		  const loggedUser = result.user;
		  console.log(loggedUser);
		  updateUserProfile(data.name, data.photo)
			.then(() => {
			  console.log("updated user profile");
			  saveUser(result.user);
			  reset();
			  Swal.fire({
				position: "top-center",
				icon: "success",
				title: "User Created Successful",
				showConfirmButton: false,
				timer: 1500,
			  });
			  navigate("/");
			})
			.catch((error) => console.log(error));
		});
	  };
		
  return (
    <div className="mt-10 mb-10 text-white flex mx-auto justify-center items-center">
      <Card color="transparent" shadow={false}>
       <div className="text-center">
	   <Typography variant="h4" color="white">
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
	   </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input type="text" {...register("name", { required: true })} size="lg" label="Name" />
			{errors.name && <span className="text-red-500">This field is required</span>}
            <Input type="email" size="lg" {...register("email", { required: true })} label="Email" />
			{errors.email && <span className="text-red-500">This field is required</span>}
            <Input type="password" size="lg" {...register("password", { required: true, minLength:6, 
			pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()\-__+.])/
			 })}
			 label="Password" />
			{errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
			{errors.password?.type === 'minLength' && <span className="text-red-500">Needed 6 character</span>}
			{errors.password?.type === 'pattern' && <span className="text-red-500">Password must have One uppercase, One special character</span>}
			
            <Input type="password" size="lg" {...register("confirmPassword", { required: true })} label="Confirm Password" />
			{ <span className="text-red-500"></span>}
			{errors.confirmPassword?.type === 'required' && <span className="text-red-500">This field is required</span>}
            <Input type="photoUrl" size="lg" {...register("photo", { required: true })} label="PhotoUrl" />
			{errors.photo && <span className="text-red-500">This field is required</span>}
          </div>
         
          <Button type="submit" className="mt-6 cursor-pointer" fullWidth>
			Register
			 {/* {loading ? <ImSpinner3 className="m-auto animate-spin" size={24}></ImSpinner3>:'Register'}
             */}
          </Button>
          <Typography color="white" className="mt-4 text-center font-normal">
            Already have an account?
            <Link
			to='/logIn'
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              LogIn
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;



//  const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log(data);
//     createUser(data.email, data.password, data.confirm).then((result) => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       updateUserProfile(data.name, data.photo)
//         .then(() => {
//           console.log("updated user profile");
//           saveUser(result.user);
//           reset();
//           Swal.fire({
//             position: "top-center",
//             icon: "success",
//             title: "User Created Successful",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           navigate("/");
//         })
//         .catch((error) => console.log(error));
//     });
//   };