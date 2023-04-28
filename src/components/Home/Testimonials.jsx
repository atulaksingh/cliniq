import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination ,Autoplay} from "swiper";
import TestimonialCard from "../cards/TestimonialCard";
function Testimonials() {
  return (
    <>
      <div className="container mx-auto bg-[#f5f8fb] px-20 py-10">
        <h1 className="text-[37px] font-[600] leading-[40px] py-3">
          <span className="text-[#464646] font-[400]"> Client </span>
          Testimonials
        </h1>
        <div className="py-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
            breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
