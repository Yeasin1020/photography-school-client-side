import React from "react";

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
import Loader from "../pages/Shared/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AllClasses = () => {
  const {user} = useContext(AuthContext)
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://photo-server-production.up.railway.app/classesApprove/approve")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  const handleClass = (Class) => {
    const data = {
     name: Class.instructorName,
     class_name: Class.className,
      class_id: Class._id,
      price: Class.Price,
      photo: Class.classPhoto,
      available_seats: Class.seats,
      email: user?.email,
    };
    console.log(data);


    fetch('https://photo-server-production.up.railway.app/selected', {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(result => {
		console.log(result)
	})



    // axios.post("https://photo-server-production.up.railway.app/selected", data).then(function (result) {
    //   console.log(result);
    //   if (result.insertedId) {
    //     Swal.fire({
    //       title: "Class Selected successfully",
    //       confirmButtonColor: "#3085d6",
    //       showCancelButton: false,
    //       confirmButtonText: "Ok",
    //     });
    //   }
    // });
  };

  return (
    <div className="mt-10 mb-10">
      <div className="cursor-pointer  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {classes.map((c) => (
          <div className="mb-5">
            {c.seats === "0" ?  (
              <Link className="cursor-pointer group">
                <Card className="w-full max-w-[26rem] shadow-lg bg-red-500 text-black">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      className=" object-cover h-[300px] w-[400px] group-hover:scale-110 transition"
                      src={c.classPhoto}
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
                        {c.className}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                        5.0
                      </Typography>
                    </div>
                    <Typography>
                      Instructor name:{" "}
                      <span className="text-black font-bold">
                        {c.instructorName}
                      </span>
                    </Typography>
                    <Typography>
                      Price:{" "}
                      <span className="text-black font-bold">${c.Price}</span>
                    </Typography>
                    <Typography>
                      Available seats:{" "}
                      <span className="text-black font-bold">{c.seats}</span>
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true} disabled>
                      Select Class
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ) : (
              <>
			  <Link className="cursor-pointer group">
                <Card className="w-full max-w-[26rem] shadow-lg ">
                  <CardHeader floated={false} color="blue-gray">
                    <img
                      className=" object-cover h-[300px] w-[400px] group-hover:scale-110 transition"
                      src={c.classPhoto}
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
                        {c.className}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                        5.0
                      </Typography>
                    </div>
                    <Typography>
                      Instructor name:{" "}
                      <span className="text-black font-bold">
                        {c.instructorName}
                      </span>
                    </Typography>
                    <Typography>
                      Price:{" "}
                      <span className="text-black font-bold">${c.Price}</span>
                    </Typography>
                    <Typography>
                      Available seats:{" "}
                      <span className="text-black font-bold">{c.seats}</span>
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button onClick={()=> handleClass(c)} size="lg" fullWidth={true} >
                      Select Class
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
			  </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
