import React from "react";

function About() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 lg:py-20 bg-[#f5f8fb]">
          <div className="col-span-1">
            <h1 className="text-[46px] text-[#464646] font-[700]">
              <span class="normal text-[46px] text-[#464646] font-[400]">
                {" "}
                About{" "}
              </span>{" "}
              Us
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
              <div className="col-span-1">
                <img
                  className="cursor-pointer"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682402779/physio_12-300x200_lowofb.jpg"
                />
                <img
                  className="cursor-pointer"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682402758/physio_004-768x384_uryi7n.jpg"
                />
              </div>
              <div className="col-span-1">
                <p className="text-[15px] text-[#999] leading-[1.75rem]">
                  {" "}
                  Our team of highly trained{" "}
                  <a className="text-[#56afd5]">professionals</a> uses the
                  latest healing technologies to restore you to pain-free
                  health, quickly and easily. We thoroughly evaluate & treat all
                  of the contributing root factors related to your issue. This
                  includes, but is not limited to, your work and home stressors,
                  overall body condition, nutrition, genetic & postural habits,
                  emotional connections and patterns that are held in your
                  muscles
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-[46px] text-[#464646] font-[700]">
              <span class="normal text-[46px] text-[#464646] font-[400]">
                Ask
              </span>{" "}
              a Question
            </h1>
            <div className="p-[35px] bg-white">
              <form className="text-center">
                <input
                  className="w-[87%] mt-5 md:w-[42%] bg-transparent p-3 border decoration-white mx-2"
                  placeholder="Full Name"
                  type="text"
                  required
                />
                <input
                  className="w-[87%] my-3 md:w-[42%] bg-transparent p-3 border decoration-white mx-2"
                  placeholder="Subject"
                  type="text"
                  required
                />
                <input
                  className="w-[87%] md:w-[42%] bg-transparent p-3 my-1 border decoration-white mx-2"
                  placeholder="Email"
                  type="email"
                  required
                />
                <input
                  className="w-[87%] md:w-[42%] bg-transparent p-3 my-1 border decoration-white mx-2"
                  placeholder="Phone no"
                  type="number"
                  required
                />

                <textarea
                  className="w-[87%]  bg-transparent p-3 border decoration-white m-2"
                  placeholder="Type your question..."
                  rows={6}
                />
              <div className="w-full text-center">

                <button className="bg-[#a175aa]  text-white text-[18.5px] font-[500] p-3 w-52 mx-auto  text-center rounded-full my-2 cursor-pointer">
                  Send Question
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
