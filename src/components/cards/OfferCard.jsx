import React from "react";

function OfferCard() {
  return (
    <>
      <div>
        <div class="relative">
          <img
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339432/slide8-1920x715_scsae2.jpg"
            alt="Your Image"
            className="w-full h-44"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-[rgba(0,0,0,.4)] hover:opacity-100 hover:text-white transition-opacity duration-300">
            <p className="text-base font-normal bg-[rgba(0,0,0,.4)] delay-100 hover:bg-[#a175aa] cursor-pointer w-32 p-1 text-center rounded-full">
              Hover Text
            </p>
          </div>
        </div>
        <h1 className="text-[20px] font-[700] text-[#464646] hover:text-[#56afd5] cursor-pointer my-3">
          Physical Therapy
        </h1>
        <p className="text-[15px] text-[#999]">
          Physical therapy is one of the major services which we offer. Our
          therapists works closely with patients to help them improve their
          movement potential and gain a healthier and more...
        </p>
        <div className="flex justify-start align-middle items-center cursor-pointer">
          <div className="text-[15px] font-[700] text-[#56afd5] my-3">
            Find out More
          </div>
          <div>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              className="mt-1 fill-[#56afd5] "
              viewBox="0 0 24 24"
            >
              <path d="M7.293 4.707L14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferCard;
