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

const data = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339432/slide8-1920x715_scsae2.jpg",
    title: "COMMITTED TO HELPING",
    desc: " We’ve been in business since 1996",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339431/slide_09-1920x715_m2iwof.jpg",
    title: "Our team of highly trained",
    desc: " healing technologies to restore you to pain-free health",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339430/slide_005-1920x715_ty2cvk.jpg",
    title: "Licensed Therapists",
    desc: " We will work closely with all your health practitioners",
  },
];

function Hero() {
  return (
    <>
      <div className="">
        <div className="lg:hidden block">
          <ContactCard />
        </div>
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
            {data.map((item, index) => (
              <SwiperSlide>
                <div>
                  <div className="relative bg-[#707780]">
                    <img
                      className=""
                      src={item.img}
                      style={{ width: "100%", height: "100%" }}
                      // bg-[rgba(37,37,62,0.67)]
                    />
                    <div className="lg:absolute bg-[rgba(96,96,99,0.67)] lg:bg-transparent top-[35%] left-[8%] w-full lg:w-[550px] py-4 lg:py-0 px-2 lg:px-0 ">
                      <div className="text-[#56afd5] leading-[23px] py-2  font-[Open Sans] text-[15px] font-bold uppercase shadow-[rgba(50,50,50,.1] my-1 lg:my-4 tracking-[6px] line-clamp-1">
                        {item.title}
                      </div>
                      <div className="text-[32px] line-clamp-2 lg:text-[50px] font-[Nunito] font-[700] text-white leading-[35px] lg:leading-[60px]">
                        {item.desc}
                      </div>
                      <div className="bg-[#a175aa] text-white text-[15.5px] font-[700] py-[11px] px-[25px] w-52 rounded-full my-5 lg:my-0 lg:mt-8">
                        Book Appointment
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
              <div>
                <div className="relative">
                  <img
                    className=""
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339431/slide_09-1920x715_m2iwof.jpg"
                  />
                  <div className="lg:absolute  lg:bg-transparent top-[35%] left-[8%] w-full lg:w-[550px] py-4 lg:py-0 px-2 lg:px-0">
                    <div className="text-[#56afd5] text-[Syne', sans-serif] text-[15px] font-[700] shadow-[rgba(50,50,50,.1] my-1 lg:my-4 tracking-[6px]">
                    GOAL-ORIENTED APPROACH  

                    </div>
                    <div className="text-[32px] lg:text-[50px] font-[700] text-white leading-9 lg:leading-[60px]">
                    A practice built on honesty and integrity
                    </div>
                    <div className="bg-[#a175aa] text-white text-[15.5px] font-[500] py-[11px] px-[25px] w-52 rounded-full my-5 lg:my-0 lg:mt-8">
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
                   <div className="lg:absolute  lg:bg-transparent top-[35%] left-[8%] w-full lg:w-[550px] py-4 lg:py-0 px-2 lg:px-0">
                    <div className="text-[#56afd5] text-[Syne', sans-serif] text-[15px] font-[700] shadow-[rgba(50,50,50,.1] my-1 lg:my-4 tracking-[6px]">
                      COMMITTED TO HELPING
                    </div>
                    <div className="text-[32px] lg:text-[50px] font-[700] text-white leading-9 lg:leading-[60px]">
                      We’ve been in business since 1996
                    </div>
                    <div className="bg-[#a175aa] text-white text-[15.5px] font-[500] py-[11px] px-[25px] w-52 rounded-full my-5 lg:my-0 lg:mt-8">
                      Book Appointment
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className=" lg:block hidden lg:absolute w-full top-20 lg:z-20 px-[55px]  ">
          <ContactCard />
        </div>
      </div>
    </>
  );
}

export default Hero;
