import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

function TestimonialCard() {
  return (
    <>
      <div>
        <div className="bg-[#fff] pt-[30px] pr-[40px] pb-[35px] pl-[60px]  p-[30px 40px 35px 90px] text-[15px] shadow-sm rounded-md">
          <div className="flex gap-4">
            <div>
              <RiDoubleQuotesL className="text-gray-300" size={40} />
            </div>
            <h1 className="text-[15px] text-[#999] font-[Open Sans]">
              My physical therapist is excellent! The whole office is very
              friendly and helpful. Physio is absolutely outstanding. Thank you
              very much for your great, attentive service
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-[700] text-[#464646]  cursor-pointer mt-3">
            Robert Davis
          </h1>
          <h1 className="text-[14px] font-[700] text-[#56afd5] ">
            Physical Therapist
          </h1>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
