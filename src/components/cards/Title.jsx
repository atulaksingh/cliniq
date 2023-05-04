import React from "react";

function Title(props) {
  return (
    <>
      <div className="container mx-auto ">
        <div
          class=" w-full h-40  bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1682590104/about-us-bg_mxttrn.jpg)",
          }}
        >
          <div className="text-[45px] leading-tight text-[#464646] font-[600] pt-5 font-[Nunito]">
            {props.title}
          </div>
          <p className="text-[#999] text-[16px] font-[400]">{props.desc}</p>
        </div>

        <div className="mt-8 bg-transparent pb-3 border-b border-gray-200 ">
          <div className="flex justify-start align-middle items-center cursor-pointer gap-2">
            <div className="text-[14px] font-[700] text-[#a5a5a5a5] my-3">
              Physio
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                className="mt-1 fill-[#a5a5a5] "
                viewBox="0 0 24 24"
              >
                <path d="M7.293 4.707L14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707z"></path>
              </svg>
            </div>
            <div className="text-[14px] font-[700] text-[#9a65a5] my-3 font-[Open Sans]">
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
