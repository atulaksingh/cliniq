import React from "react";

function Logo() {
  return (
    <>
      <div className="flex flex-wrap justify-around align-middle items-center py-10">
        <h1 className="text-[37px] font-[600] leading-[40px] py-3">
          <span className="text-[#464646] font-[400]"> Accepted </span>Insurances
        </h1>
        <div className="flex flex-wrap  justify-between align-middle items-center">
            <img className="w-44 hover:border border-[#9a65a5]" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682423829/insurance_1_fzx5kn.jpg"/>
            <img className="w-44 hover:border border-[#9a65a5]" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682423827/insurance_2_k7ezge.jpg"/>
            <img className="w-44 hover:border border-[#9a65a5]" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682423826/insurance_3_jgktxm.jpg"/>
            <img className="w-44 hover:border border-[#9a65a5]" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682423825/insurance_4_rwzf3w.jpg"/>
        </div>
      </div>
    </>
  );
}

export default Logo;
