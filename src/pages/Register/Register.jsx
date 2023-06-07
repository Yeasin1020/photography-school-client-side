import React, { useContext, useState } from "react";

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

const Register = () => {
	const {createUser} = useContext(AuthContext);


	const [match, SetMatch] = useState([]);
	
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		if(  data.password !== data.confirmPassword){
			SetMatch('Password did not match')
			return
		}
		
		SetMatch('')
		
		createUser(data.email, data.password, data.name, data.photo)
		.then(result => {
			const loggedUser = result.user;
			console.log(loggedUser);
		})
		.then(error => console.log(error))
		console.log(data)
	
	
	};
		
  return (
    <div className="mt-10 mb-10 flex mx-auto justify-center items-center">
      <Card color="transparent" shadow={false}>
       <div className="text-center">
	   <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
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
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
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
