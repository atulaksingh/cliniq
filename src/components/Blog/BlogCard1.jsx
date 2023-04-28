import React from "react";

function BlogCard1(props) {
  const { height } = props;
  const { font } = props;
  const style = {
    height: height,
  };
  const fontstyle = {
    fontSize: font,
  };
  return (
    <>
      <div>
        <div class="relative bg-[#F5F8FB]">
          <img
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339432/slide8-1920x715_scsae2.jpg"
            alt="Your Image"
            style={style}
            // className= "`{props.height}`"
          />
          <div className="absolute  bottom-7 left-7 flex items-center justify-center text-white">
            <p className="text-[15px] font-[700] rounded-sm  bg-[#9a65a5] cursor-pointer w-32 p-1 text-center ">
              August 8, 2018
            </p>
          </div>
        </div>

        <div className="p-5 bg-[#F5F8FB]">
          <div className="text-[#a5a5a5] text-[14px] font-[700] ">
            By QreativeThemes <span className="mx-3">/</span> 0 Comments{" "}
            <span className="mx-3">/</span> Physio, Studies, Work Injury{" "}
            <span className="mx-3">/</span> Clinic
          </div>
          <div className="border-b-2 border-gray-200 my-7"></div>
          <div>
            <h1
              style={fontstyle}
              className=" font-[700] text-[#464646] hover:text-[#56afd5] cursor-pointer my-3"
            >
              Identifying And Treating Pain From Nerve Tension
            </h1>
          </div>
          <p className="text-[15px] text-[#999] ">
            Physical therapy is one of the major services which we offer. Our
            therapists works closely with patients to help them improve their
            movement potential and gain a healthier and more...
          </p>
          <div className="flex justify-start align-middle items-center cursor-pointer mt-5">
            <div className="text-[15px] font-[700] text-[#56afd5] my-3">
              Read More
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard1;
