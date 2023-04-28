import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import ContactCard from "../cards/ContactCard";
function Hero() {
  return (
    <>
      <div className="">
        <div className="mt-12">
          <Swiper
            spaceBetween={0}
            effect={"fade"}
            navigation={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <div className="relative">
                  <img
                    className=""
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339432/slide8-1920x715_scsae2.jpg"
                  />
                  <div className="absolute top-[35%] left-[8%] w-[550px]">
                    <div className="text-[#56afd5] text-[15px] font-[700] shadow-[rgba(50,50,50,.1] my-4">
                      COMMITTED TO HELPING
                    </div>
                    <div className="text-[50px] font-[500] text-white leading-[60px]">
                      We’ve been in business since 1996
                    </div>
                    <div className="bg-[#a175aa] text-white text-[15.5px] font-[500] py-[11px] px-[25px] w-52 rounded-full mt-8">
                      Book Appointment
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative">
                  <img
                    className=""
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339431/slide_09-1920x715_m2iwof.jpg"
                  />
                  <div className="absolute top-[35%] left-[8%] w-[550px]">
                    <div className="text-[#56afd5] text-[15px] font-[700] shadow-[rgba(50,50,50,.1] my-4">
                      COMMITTED TO HELPING
                    </div>
                    <div className="text-[50px] font-[500] text-white leading-[60px]">
                      We’ve been in business since 1996
                    </div>
                    <div className="bg-[#a175aa] text-white text-[15.5px] font-[500] py-[11px] px-[25px] w-52 rounded-full mt-8">
                      Book Appointment
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative">
                  <img
                    className=""
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339430/slide_005-1920x715_ty2cvk.jpg"
                  />
                  <div className="absolute top-[35%] left-[8%] w-[550px]">
                    <div className="text-[#56afd5] text-[15px] font-[700] shadow-[rgba(50,50,50,.1] my-4">
                      COMMITTED TO HELPING
                    </div>
                    <div className="text-[50px] font-[500] text-white leading-[60px]">
                      We’ve been in business since 1996
                    </div>
                    <div className="bg-[#a175aa] text-white text-[15.5px] font-[500] py-[11px] px-[25px] w-52 rounded-full mt-8">
                      Book Appointment
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute w-full top-20 z-20 px-[55px]">
          <ContactCard />
        </div>
      </div>
    </>
  );
}

export default Hero;
