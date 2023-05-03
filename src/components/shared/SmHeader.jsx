import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function SmHeader() {
  let Links = [
    { name: "Physical Therapy", link: "/services/physical-therapy" },
    { name: "Massage Therapy", link: "/services/massage-therapy" },
    { name: "Chiropractic Therapy", link: "/services/chiropractic-therapy" },
    { name: "Work Injuries", link: "/services/work-injuries" },
    { name: "Clinical Pilates", link: "/services/clinical-pilates" },
    { name: "Sport Injuries", link: "/services/sport-injuries" },
  ];
  let BlogLinks = [
    { name: "List Layout", link: "/blog" },
    { name: "Grid Layout", link: "/blog/grid-layout" },
    { name: "Blogpost", link: "/blog/blog-post" },
  ];
  let [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isserviceOpen, setServiceOpen] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setServiceOpen(!isserviceOpen);
  };
  const servicetoggleDropdown = () => {
    setServiceOpen(!isserviceOpen);
  };

  return (
    <>
      <div className="lg:hidden block ">
        <div className="flex flex-col lg:flex-row justify-between align-middle lg:items-center p-3 lg:p-6 lg:mx-20">
          <div>
            <img
              className="w-48 lg:w-60"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682338649/logo_zbkmuc.png"
            ></img>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-4xl absolute right-8 top-2 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div
            className={` absolute md:static bg-white md:z-auto  w-[95%] md:w-auto  transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-600px]"
            }`}
          >
            <div className="lg:my-0 w-full my-5 lg:bg-transparent bg-[#a175aa] p-4 ">
              <div className="flex w-full flex-col lg:flex-row justify-start lg:justify-end align-middle items-start lg:items-center gap-3 ">
                <div className=" w-full ">
                  <Link to={"/"}>
                    <button className="hover:bg-[#884d94e2] p-1 w-full flex items-center justify-between font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white">
                      Home
                    </button>
                  </Link>
                </div>

                <div className=" w-full ">
                  <Link to={"/about"}>
                    <button className="hover:bg-[#884d94e2] p-1 w-full flex items-center justify-between font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white">
                      About Us
                    </button>
                  </Link>
                </div>

                <div className="relative flex flex-col items-center w-full rounded-md">
                  <div className="w-full">
                    {/* <Link to={"/service"}> */}
                    <button
                      onClick={() => setIsStart((prev) => !prev)}
                      className="hover:bg-[#884d94e2] p-1 w-full flex items-center justify-between font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white"
                    >
                      {/* <Link></Link> */}
                      Services
                      {!isStart ? (
                        <AiOutlineCaretDown className="h-8" />
                      ) : (
                        <AiOutlineCaretUp className="h-8" />
                      )}
                    </button>
                    {/* </Link> */}
                  </div>
                  {/* rounded-t py-3.5 px-4  block whitespace-no-wrap font-[700] text-[14px] */}
                  {isStart && (
                    <div className="bg-[#a175aa]  absolute top-14 flex flex-col items-start rounded-sm p-2 w-full z-30">
                      {Links.map((item, i) => (
                        <div className="w-full">
                          <Link to={item.link}>
                            <div className="flex w-full p-2 justify-between hover:bg-[#884d94e2] text-white cursor-pointer rounded-r-lg border-l-transparent">
                              <h3 className="font-bold">{item.name}</h3>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col items-center w-full rounded-md">
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="hover:bg-[#884d94e2] p-1 w-full flex items-center justify-between font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white"
                  >
                    Blog
                    {!isOpen ? (
                      <AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiOutlineCaretUp className="h-8" />
                    )}
                  </button>
                  {/* rounded-t py-3.5 px-4  block whitespace-no-wrap font-[700] text-[14px] */}
                  {isOpen && (
                    <div className="bg-[#a175aa]  absolute top-14 flex flex-col items-start rounded-sm p-2 w-full z-30">
                      {BlogLinks.map((item, i) => (
                        <div className="w-full">
                          <Link to={item.link}>
                            <div className="flex w-full p-2 justify-between hover:bg-[#884d94e2] text-white cursor-pointer rounded-r-lg border-l-transparent">
                              <h3 className="font-bold">{item.name}</h3>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className=" w-full ">
                  <Link to={"/contact"}>
                    <button className="hover:bg-[#884d94e2] p-1 w-full flex items-center justify-between font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white">
                      content Us
                    </button>
                  </Link>
                </div>

                <div className="bg-[#a175aa] hidden lg:block text-white text-[15.5px] font-[500] py-[11px] px-[25px] rounded-full">
                  Book Appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmHeader;
