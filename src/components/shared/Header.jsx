import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="">
        <div className="flex justify-between align-middle items-center p-6 lg:mx-20">
          <div>
            <img src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682338649/logo_zbkmuc.png"></img>
          </div>
          <div className=" lg:visible">
            <div className="flex justify-end align-middle items-center gap-3 ">
              <Link to={"/"}>
                <div className="text-[17px] font-[700] leading-[28px] text-[#828282] hover:text-[#56afd5] cursor-pointer">
                  Home
                </div>
              </Link>
              <Link to={"/about"}>
                <div className="text-[17px] font-[700] leading-[28px] text-[#828282] hover:text-[#56afd5] cursor-pointer">
                  About Us
                </div>
              </Link>
              <Link to={"/Service"}>
                <div class="group inline-block relative">
                  <button class=" py-2  rounded inline-flex items-center text-[17px] font-[700] leading-[28px] text-[#828282] hover:text-[#56afd5] cursor-pointer">
                    <span class="mr\-1">Services</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul class="absolute hidden text-white pt-1 group-hover:block z-30 w-48">
                    <li class="">
                      <Link to={"/services/physical-therapy"}>
                        <a
                          class="rounded-t bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4  block whitespace-no-wrap font-[700] text-[14px]"
                          href="/services/physical-therapy"
                        >
                          Physical Therapy
                        </a>
                      </Link>
                    </li>
                    <li class="">
                      <Link to={"/services/massage-therapy"}>
                        <a
                          class="bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/services/massage-therapy"
                        >
                          Massage Therapy
                        </a>
                      </Link>
                    </li>
                    <li class="">
                      <Link to={"/services/chiropractic-therapy"}>
                        <a
                          class=" bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/services/chiropractic-therapy"
                        >
                          Chiropractic Therapy
                        </a>
                      </Link>
                    </li>
                    <li class="">
                      <Link to={"/services/work-injuries"}>
                        <a
                          class=" bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/services/work-injuries"
                        >
                          Work Injuries
                        </a>
                      </Link>
                    </li>
                    <li class="">
                      <Link to={"/services/clinical-pilates"}>
                        <a
                          class=" bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/services/clinical-pilates"
                        >
                          Clinical Pilates
                        </a>
                      </Link>
                    </li>
                    <li class="">
                      <Link to={"/services/sport-injuries"}>
                        <a
                          class="rounded-b bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/services/sport-injuries"
                        >
                          Sport Injuries
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
              <Link to={"/blog"}>
                <div class="group inline-block relative">
                  <button class=" py-2  rounded inline-flex items-center text-[17px] font-[700] leading-[28px] text-[#828282] hover:text-[#56afd5] cursor-pointer">
                    <span class="mr-1">Blog</span>
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul class="absolute hidden text-white pt-1 group-hover:block z-30 w-48">
                    <li class="">
                      <a
                        class="rounded-t bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4  block whitespace-no-wrap font-[700] text-[14px]"
                        href="#"
                      >
                        List Layout
                      </a>
                    </li>
                    <li class="">
                      <Link to={"/blog/grid-layout"}>
                        <a
                          class="bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/blog/grid-layout"
                        >
                          Grid Layout
                        </a>
                      </Link>
                    </li>
                    <li class="">
                      <Link to={"/blog/blog-post"}>
                        <a
                          class="rounded-b bg-[#a175aa] hover:bg-[#884d94e2] py-3.5 px-4 block whitespace-no-wrap font-[700] text-[14px]"
                          href="/blog/blog-post"
                        >
                          BlogPost
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
              <Link to={"/contact"}>
                <div className="text-[17px] font-[700] leading-[28px] text-[#828282] hover:text-[#56afd5] cursor-pointer">
                  content Us
                </div>
              </Link>
              <div className="bg-[#a175aa] text-white text-[15.5px] font-[500] py-[11px] px-[25px] rounded-full">
                Book Appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
