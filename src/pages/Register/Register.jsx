import React, { useContext, useState } from "react";
import {ImSpinner3} from 'react-icons/im'

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
	const {createUser, loading, setLoading} = useContext(AuthContext);


	const [match, SetMatch] = useState([]);
	
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		if(  data.password !== data.confirmPassword){
			SetMatch('Password did not match')
			return
		}
		
		SetMatch('')
		
		createUser(data.email, data.password, data.name, data.photo)
		.then((result) => {
			const createdUser = result.user;
			console.log(createdUser);
			if (createUser) {
			  Swal.fire({
				title: "Successfully signUp",
				text: "Great",
				icon: "success",
				showCancelButton: false,
				confirmButtonColor: "#3085d6",
				
				confirmButtonText: "Continue",
			  }).then((result) => {
				if (result.isConfirmed) {
				  
				  window.location.assign("/");
				}
			  });
			}
		  })
		  
		  .then((error) => {
			setLoading(false)
			console.log(error.massage);
			
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
			{ <span className="text-red-500">{match}</span>}
			{errors.confirmPassword?.type === 'required' && <span className="text-red-500">This field is required</span>}
            <Input type="photoUrl" size="lg" {...register("photo", { required: true })} label="PhotoUrl" />
			{errors.photo && <span className="text-red-500">This field is required</span>}
          </div>
         
          <Button type="submit" className="mt-6 cursor-pointer" fullWidth>
			 {loading ? <ImSpinner3 className="m-auto animate-spin" size={24}></ImSpinner3>:'Register'}
            
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
