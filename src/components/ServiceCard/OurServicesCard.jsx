import React from "react";
import { Link } from "react-router-dom";
const ourservicesdata=[
    
    {
      name: "View all Services",
      link:"/service",
    },
    {
        name: "Chiropractic Therapy",
        link:"/services/chiropractic-therapy",
      },
      {
        name: "Clinical Pilates",
        link:"/services/clinical-pilates",
      },
      {
        name: "Massage Therapy",
        link:"/services/massage-therapy",
      },
      {
        name: "Physical Therapy",
        link:"/services/physical-therapy",
      },
      {
        name: "Sport Injuries",
        link:"/services/sport-injuries",
      },
      {
        name: "Work Injuries",
        link:"/services/work-injuries",
      },
  ];
function OurServicesCard() {
  return (
    <>
      <div className="bg-[#9a65a5] rounded-sm rounded-br-[50px]">
        <div className="py-[30px] px-[35px] text-white">
          <h1 className="text-[25px]  font-[700] pb-5">
            <span class="normal text-[25px]  font-[400]">Our</span> Services
          </h1>
          <div>
          {
            ourservicesdata.map((item,index)=>(

            <div className="flex justify-start align-middle items-center cursor-pointer py-0.5">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  className=" fill-[rgba(0,0,0,.2)] "
                  viewBox="0 0 24 24"
                >
                  <path d="M7.293 4.707L14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707z"></path>
                </svg>
              </div>
              <Link to={item.link}>
              <div className="text-[15px] font-[600] text-[rgba(255,255,255,.6)] hover:text-white my-1">
               {item.name}
              </div>
              </Link>
            </div>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServicesCard;
