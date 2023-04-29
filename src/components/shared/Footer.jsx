import React from "react";
import ContactCard from "../cards/ContactCard";
import FooterCard1 from "../cards/FooterCard1";
import FooterCard2 from "../cards/FooterCard2";

function Footer() {
  return (
    <>
      <div
        class=" "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1682425353/footer_pattern_wxy04k.png)",
        }}
      >
        <div className="container mx-auto   ">
          <div>
            <FooterCard1 />
          </div>
          <div>
            <FooterCard2 />
          </div>
        </div>
        <div className="bg-[#555A5F] text-[#909BA2] px-2 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between align-middle items-center py-5">
            <div className="text-[14px] text-center">
              © Copyright 2023 Physio WordPress Theme by{" "}
              <span className="text-white font-[700] cursor-pointer">
                Qreativethemes
              </span>
            </div>
            <div className="text-[14px] text-center">
              Schedule your next{" "}
              <span className="text-white font-[700] cursor-pointer">
                {" "}
                Appointment
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
