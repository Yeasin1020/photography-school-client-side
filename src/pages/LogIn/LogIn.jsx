import { Button, Input } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";
import { ImSpinner3 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

const LogIn = () => {
  useEffect(()=> {
    document.title = "Photography-School || LogIn"
  },[])
	const {signIn, googleSignIn, loading, setLoading} = useContext(AuthContext)
	const navigate = useNavigate();
	const location = useLocation();
	const from = useLocation.state?.from?.pathname || "/" ;

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password)
		signIn(email, password)
		.then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            if(loggedUser){
              Swal.fire({
                title: 'Successfully logIn with Email Password!',
                text: 'Welcome to our Toys Cars Shop',
                icon: 'success',
                confirmButtonText: 'Oky'
              })
            }
            navigate(from, {replace: true})
        })
        .catch(error=>{
         if(error){
          setLoading(false)
         }
            console.log(error)
        })
		
	}
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
      const user = result.user;
      console.log(user)
      saveUser(result.user)
      if(user){
        Swal.fire({
        title: 'Successfully logIn with gmail!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Oky'
        })
      }
      navigate(from, { replace: true });
      })
      .catch((error) => {
      console.log("error", error.message);
      });
    };
  return (
    <section className="h-screen flex flex-col text-white md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <form onSubmit={handleLogin} className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          
          <button
          onClick={handleGoogleLogIn}
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
           <FcGoogle className="ml-2.5 flex justify-center"></FcGoogle>
          </button>
          
          
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <div className="mb-4">
        
          <Input name="email" size="lg" label="Email" />
        </div>
        <Input name="password" size="lg" label="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          ></a>
        </div>
        <div className="text-center md:text-left">
          
          <Button type="submit" className="mt-6 cursor-pointer" fullWidth>
			 {loading ? <ImSpinner3 className="m-auto animate-spin" size={24}></ImSpinner3>:'Login'}
            
          </Button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
