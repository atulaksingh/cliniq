import React from "react";

function AboutCard1() {
  return (
    <>
      <div>
        <div className="grid grid-cols-3 py-10 gap-7">
          <div className="col-span-1">
            <div>
              <h1 className="text-[36px] text-[#464646] font-[700] my-4">
                <span class="normal text-[46px] text-[#464646] font-[400]">
                  Our
                </span>{" "}
                Vision
              </h1>
              <div className="text-[14px] text-[#a5a5a5]">
                To be a company that attracts, rewards, and retains highly
                skilled physical therapy staff. Our proactive approach to the
                development of best business practices and promotion of
                effective treatment methods will help us accomplish this.
              </div>
            </div>
            <div>
              <h1 className="text-[36px] text-[#464646] font-[700] my-4">
                <span class="normal text-[46px] text-[#464646] font-[400]">
                  Our
                </span>{" "}
                Philosophy
              </h1>
              <div className="text-[14px] text-[#a5a5a5]">
                To be a company that attracts, rewards, and retains highly
                skilled physical therapy staff. Our proactive approach to the
                development of best business practices and promotion of
                effective treatment methods will help us accomplish this.
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-[36px] text-[#464646] font-[700] my-4">
                <span class="normal text-[46px] text-[#464646] font-[400]">
                  Our
                </span>{" "}
                Mission
              </h1>
              <div className="text-[14px] text-[#a5a5a5]">
                <p>
                  {" "}
                  To be a company that attracts, rewards, and retains highly
                  skilled physical therapy staff. Our proactive approach to the
                  development of best business practices and promotion of
                  effective treatment methods will help us accomplish this.
                </p>
                <div className="font-[700] text-[#56afd5] text-[15px] py-5">
                  High Quality
                </div>
                <p className="">
                  We take a goal-oriented approach to healing. Whatever your
                  goals might be we want to help you achieve them
                </p>
                <div className="font-[700] text-[#56afd5] text-[15px] py-5">
                  Patient Care
                </div>
                <p>
                  We take a goal-oriented approach to healing. Whatever your
                  goals might be we want to help you achieve them
                </p>
                <div className="font-[700] text-[#56afd5] text-[15px] py-5">
                  Professional Service
                </div>
                <p>
                  We take a goal-oriented approach to healing. Whatever your
                  goals might be we want to help you achieve them
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <img src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682502114/about_us_jitav7.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCard1;
