import React from "react";

function OpeningHours() {
  return (
    <>
      <div>
        <h1 className="text-[22px] font-[600] leading-[40px] py-3">
          <span className="text-[#464646] font-[400]"> Opening </span>Hours
        </h1>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700] ">
          <div>Monday</div>
          <div>07:00-17:00</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700] ">
          <div>Tuesday</div>
          <div>07:00-17:00</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700] ">
          <div>Wednesday</div>
          <div>07:00-17:00</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700] ">
          <div>Thursday</div>
          <div>07:00-17:00</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700] ">
          <div>Friday</div>
          <div>07:00-17:00</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700]">
          <div>Saturday</div>
          <div>07:00-15:00</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
        <div className="text-[rgba(112,119,128,.53)] flex justify-between align-middle items-center text-[14px] font-[700]">
          <div>Sunday</div>
          <div className="bg-[#56afd5] text-white px-3">Closed</div>
        </div>
        <div className="border-b border-[rgba(0,0,0,.1)] my-1.5"></div>
      </div>
    </>
  );
}

export default OpeningHours;
