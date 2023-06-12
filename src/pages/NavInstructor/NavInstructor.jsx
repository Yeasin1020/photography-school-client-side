import React from 'react';
import Loader from '../Shared/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Tooltip,
	IconButton,
  } from "@material-tailwind/react";
  import {
	BanknotesIcon,
	StarIcon,
	HeartIcon,
	WifiIcon,
	HomeIcon,
	TvIcon,
	FireIcon,
  } from "@heroicons/react/24/solid";
const NavInstructor = () => {
	useEffect(()=> {
        document.title = "Photography-School || Instructor"
      },[])
	const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/role/instructor")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
	return (
		<div className="mt-5  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
		{classes.map((c) => (
		  
		 <div className="mb-5">
		   <Link key={c._id} className="cursor-pointer group">
			<Card className="w-full max-w-[26rem] shadow-lg">
			  <CardHeader floated={false} color="blue-gray">
				<img
				  className=" object-cover h-[300px] w-[400px] group-hover:scale-110 transition"
				  src={c.photo}
				  alt="ui/ux review check"
				/>
				<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
				<IconButton
				  size="sm"
				  color="red"
				  variant="text"
				  className="!absolute top-4 right-4 rounded-full"
				>
				  <HeartIcon className="h-6 w-6" />
				</IconButton>
			  </CardHeader>
			  <CardBody>
				<div className="mb-3 flex items-center justify-between">
				  <Typography
					variant="h5"
					color="blue-gray"
					className="font-medium"
				  >
					{c.name}
				  </Typography>
				  <Typography
					color="blue-gray"
					className="flex items-center gap-1.5 font-normal"
				  >
					<StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
					5.0
				  </Typography>

				</div>
				
				<Typography>{c.email}</Typography>
			  </CardBody>
			  
			</Card>
		  </Link>
		  
		   
		 </div>
		))}
	  </div>
	);
};

export default NavInstructor;