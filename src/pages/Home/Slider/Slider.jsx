import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';



const Slider = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	}
	
	return (
		<>
      
    </>
	);
};

export default Slider;