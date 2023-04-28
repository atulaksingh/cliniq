import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";
function Advantages() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="parent  hero p-[30px] rounded-sm border border-[rgba(0,0,0,.08)] w-96 ">
         <div className="flex align-middle items-center gap-7">
         {/* <div className="child1 border-2 border-[rgba(0,0,0,.08)] w-14 h-20  text-center rounded-[25px] hover:bg-[#56afd5] hover:fill-white" >
            <FontAwesomeIcon
              icon={faSuitcaseMedical}
              color="#56afd5"
              className="child2 text-[30px] mt-5 hover:text-[#fff] "
            />
          </div> */}
          <div id="child1" className=" border-2 border-[rgba(0,0,0,.08)] w-14 h-20  text-center rounded-[25px] " >
            <FontAwesomeIcon
              icon={faSuitcaseMedical}
              color="#56afd5"
              id="child2"
              className=" text-[30px] mt-5  "
            />
          </div>
          <div>
            <h1 className="text-[18px] text-[#464646] font-[700] mb-2">Personalized Treatment</h1>
            <p className="text-[15px] font-[400] text-[#999]">You will receive a full individualized treatment</p>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default Advantages;
