import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TopInstructor = () => {

	const [instructor, setInstructor] = useState([]);
	useEffect(() => {
	  fetch("http://localhost:5000/role/instructor")
		.then((res) => res.json())
		.then((data) => {
		  setInstructor(data);
		});
	}, []);
  return (
    <div>
      <div class="mb-16">
        <div class="container flex justify-center mx-auto pt-16">
          <div>
            <p class="text-gray-500 text-lg text-center font-normal pb-3">
              BUILDING TEAM
            </p>
            <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div class="w-full bg-gray-100 px-10 pt-10">
          <div class="container mx-auto">
            {
				instructor.map(ins => (
					<div key={ins.id}
              role="list"
              aria-label="Behind the scenes People "
              class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={ins.photo}
                        alt="Display Picture of Charles Keith"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                      {ins.name}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">Instructor</p>
                    
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
				))
			}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInstructor;
