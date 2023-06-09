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
      <Swiper
        Autoplay={1000}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper mt-10 mb-10 rounded-lg"
      >
        <SwiperSlide><img className='h-[450px] w-full' src="https://i.ibb.co/XLYhbt3/maxresdefault.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[450px] w-full' src="https://i.ibb.co/F5Kgztt/naturephot-ec32e94608f809e.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[450px] w-full' src="https://i.ibb.co/jkdpQQ9/pedroquintela-1500x844.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[450px] w-full' src="https://i.ibb.co/096Gxdz/pexels-andre-furtado-1264210.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
	);
};

export default Slider;