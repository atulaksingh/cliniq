import React from "react";

function Hero2() {
  return (
    <>
      <div className="py-20">
        <div
          class="  "
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1682417551/cta-background_kc5nyo.jpg)",
          }}
        >
          <div className="mx-5 lg:mx-20 ">
            <div className="py-12 text-center ">
              <h1 className=" text-[22px]  font-[700]  text-white leading-[32px] ">
                No matter whether your condition was caused by a sport, work
                accident or otherwise, we welcome the chance to serve you.
              </h1>

              <div className="mt-5  lg:pb-20">
                <button className="font-[600] text-[14px] rounded-full p-4 text-bold text-[rgba(255,255,255,.9)] tracking-[1px] border border-[rgba(255,255,255,0.29)] hover:border-[#fff] transition delay-100">
                Schedule an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
