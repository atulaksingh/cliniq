import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
function ContactCard() {
  return (
    <>
      <div className="  w-full z-10 bg-[rgba(255,255,255,0.8)] ">
        <div className="container mx-auto ">
          <div className=" flex flex-col lg:flex-row justify-between px-5 lg:px-12 ">
            <div className="flex align-middle items-center gap-4 py-3 lg:py-10 border-t  border-gray-[#999] lg:border-transparent">
              <div>
                <FaHome size={40} color="" className="text-[#999999c2] hover:text-[#838383] transition-all delay-75" />
              </div>
              <div>
                <div className="text-[#838383] text-[16px] font-[700]">
                  Visit our Location
                </div>
                <p className="text-[#bfbfbf] text-[14px]">
                  250 Main Street, New York
                </p>
              </div>
            </div>
            <div className="flex align-middle items-center gap-4 py-3 lg:py-10 border-t  border-gray-[#999] lg:border-transparent">
              <div>
                <MdWatchLater size={40} className="text-[#999999c2] hover:text-[#838383] transition-all delay-75" />
              </div>
              <div>
                <div className="text-[#838383] text-[16px] font-[700]">
                  Visit our Location
                </div>
                <p className="text-[#bfbfbf] text-[14px]">
                  250 Main Street, New York
                </p>
              </div>
            </div>
            <div className="flex align-middle items-center gap-4 py-3 lg:py-10 border-t  border-gray-[#999] lg:border-transparent">
              <div>
                <IoMdCall size={40} className="text-[#999999c2] hover:text-[#838383] transition-all delay-75" />
              </div>
              <div>
                <div className="text-[#838383] text-[16px] font-[700]">
                  Visit our Location
                </div>
                <p className="text-[#bfbfbf] text-[14px]">
                  250 Main Street, New York
                </p>
              </div>
            </div>
            <div className="flex align-middle items-center gap-4 py-3 lg:py-10 border-t  border-gray-[#999] lg:border-transparent">
              <div>
                <MdEmail size={40} className="text-[#999999c2] hover:text-[#838383] transition-all delay-75" />
              </div>
              <div>
                <div className="text-[#838383] text-[16px] font-[700]">
                  Visit our Location
                </div>
                <p className="text-[#bfbfbf] text-[14px]">
                  250 Main Street, New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
