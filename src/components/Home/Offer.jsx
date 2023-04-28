import React from "react";
import OfferCard from "../cards/OfferCard";

function Offer() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-4 py-20 gap-10 ">
          <div className="col-span-1">
            <h1 className="text-[37px] font-[600] leading-[40px] py-3">
              <span className="text-[#464646] font-[400]"> We </span>offer
              various Physio Disciplines
            </h1>
            <p className="text-[15px] text-[#a5a5a5] leading-[23px] py-3">
              We are proud to offer a wide range of comprehensive services to
              meet the needs of adults, seniors, and pediatric patients. Our
              team of professional caregivers specialize in providing
              personalized medical care, rehabilitative therapy and companion
              assistance.
            </p>
            <div className="bg-[#a175aa] text-white text-[14.5px] font-[500] p-3 w-40  text-center rounded-full my-2">
              See All Services
            </div>
          </div>
          <div className="col-span-1">
          <OfferCard />
          </div>
          <div className="col-span-1">
          <OfferCard />

          </div>
          <div className="col-span-1">
          <OfferCard />

          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
