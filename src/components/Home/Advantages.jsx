import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";
function Advantages() {
  return (
    <>
      <div className="container mx-auto py-20">
        <h1 className="text-[35px] leading-[40px] lg:leading-[0px] lg:text-[46px] text-[#464646] font-[700] pb-5">
          <span class="normal text-[46px] text-[#464646] font-[400]">Our</span>{" "}
          Advantages
        </h1>
        <div className="grid col-span-12 lg:grid-cols-3 gap-7 pt-10">
          <div className="col-span-1">
            <div className="parent  hero p-[25px] rounded-sm border border-[rgba(0,0,0,.08)] ">
              <div className="flex justify-start  align-middle items-center gap-4">
                <div
                  id="child1"
                  className="flex items-center align-middle border-2 border-[rgba(0,0,0,.08)] overflow-hidden hover:border-[#56afd5] w-14 h-20     rounded-[25px] "
                >
                  <FontAwesomeIcon
                    icon={faSuitcaseMedical}
                    color="#56afd5"
                    id="child2"
                    className=" text-[25px]   mx-auto"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] text-[#464646] font-[700] mb-2">
                    Personalized Treatment
                  </h1>
                  <p className="text-[15px] font-[400] text-[#999]">
                    You will receive a full individualized treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="parent  hero p-[25px] rounded-sm border border-[rgba(0,0,0,.08)] ">
              <div className="flex justify-start  align-middle items-center gap-4">
                <div
                  id="child1"
                  className="flex items-center align-middle border-2 border-[rgba(0,0,0,.08)] overflow-hidden hover:border-[#56afd5] w-14 h-20     rounded-[25px] "
                >
                  <FontAwesomeIcon
                    icon={faSuitcaseMedical}
                    color="#56afd5"
                    id="child2"
                    className=" text-[25px]   mx-auto"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] text-[#464646] font-[700] mb-2">
                    Personalized Treatment
                  </h1>
                  <p className="text-[15px] font-[400] text-[#999]">
                    You will receive a full individualized treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="parent  hero p-[25px] rounded-sm border border-[rgba(0,0,0,.08)] ">
              <div className="flex justify-start  align-middle items-center gap-4">
                <div
                  id="child1"
                  className="flex items-center align-middle border-2 border-[rgba(0,0,0,.08)] overflow-hidden hover:border-[#56afd5] w-14 h-20     rounded-[25px] "
                >
                  <FontAwesomeIcon
                    icon={faSuitcaseMedical}
                    color="#56afd5"
                    id="child2"
                    className=" text-[25px]   mx-auto"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] text-[#464646] font-[700] mb-2">
                    Personalized Treatment
                  </h1>
                  <p className="text-[15px] font-[400] text-[#999]">
                    You will receive a full individualized treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="parent  hero p-[25px] rounded-sm border border-[rgba(0,0,0,.08)] ">
              <div className="flex justify-start  align-middle items-center gap-4">
                <div
                  id="child1"
                  className="flex items-center align-middle border-2 border-[rgba(0,0,0,.08)] overflow-hidden hover:border-[#56afd5] w-14 h-20     rounded-[25px] "
                >
                  <FontAwesomeIcon
                    icon={faSuitcaseMedical}
                    color="#56afd5"
                    id="child2"
                    className=" text-[25px]   mx-auto"
                  />
                </div>
                <div>
                  <h1 className="text-[18px] text-[#464646] font-[700] mb-2">
                    Personalized Treatment
                  </h1>
                  <p className="text-[15px] font-[400] text-[#999]">
                    You will receive a full individualized treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantages;
