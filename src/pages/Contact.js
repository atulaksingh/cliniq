import React from "react";
import Header from "../components/shared/Header";
import Title from "../components/cards/Title";
import Footer from "../components/shared/Footer";
import OpeningHours from "../components/ServiceCard/OpeningHours";
import Map from "../components/Home/Map";

function Contact() {
  return (
    <>
      <div>
        <Header />
        <div className="px-[105px]">
          <Title title="Contact Us" desc="" />
          <div className="grid grid-cols-12 py-10 gap-10">
            <div className="col-span-3">
              <div className="bg-[#9A65A5] mb-5">
                <div className="p-[34px] ">
                  <div>
                    <h1 className="text-[15px] font-[700] text-white mb-1">
                      Physio Physical Therapy
                    </h1>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      1600 Amphitheatre Parkway Mountain View CA 94043 United
                      States
                    </p>
                  </div>
                  <div className="border border-[rgba(50,50,50,.2)] my-5"></div>
                  <div>
                    <h1 className="text-[15px] font-[700] text-white mb-1">
                      Phone Number
                    </h1>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      + (123) 123 - 354 - 923
                    </p>
                  </div>
                  <div className="border border-[rgba(50,50,50,.2)] my-5"></div>
                  <div>
                    <h1 className="text-[15px] font-[700] text-white mb-1">
                      Email Address
                    </h1>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      info@physiotherapy.com
                    </p>
                  </div>
                  <div className="border border-[rgba(50,50,50,.2)] my-5"></div>
                  <div>
                    <h1 className="text-[15px] font-[700] text-white mb-1">
                      Social Media
                    </h1>
                    <p className="text-[14px] text-[rgba(255,255,255,.6)]">
                      <div className="flex align-middle items-center  py-1">
                        <div className="relative bg-transparent  delay-100  cursor-pointer rounded-lg    p-1 h-6 w-6 fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon"
                            viewBox="0 0 512 512"
                          >
                            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                          </svg>
                        </div>
                        <div className="relative bg-transparent  delay-100  cursor-pointer rounded-lg    p-1 h-6 w-6 fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon"
                            viewBox="0 0 512 512"
                          >
                            <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                          </svg>
                        </div>
                        <div className="relative bg-transparent  delay-100  cursor-pointer rounded-lg    p-1 h-6 w-6 fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ionicon"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fillRule="evenodd"
                              d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                            ></path>
                          </svg>
                        </div>
                        <div className="relative bg-transparent  delay-100  cursor-pointer rounded-lg    p-1 h-6 w-6 fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                          >
                            <path d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 002.345-2.951 10.696 10.696 0 01-3.388 1.295 5.334 5.334 0 00-9.089 4.864A15.143 15.143 0 013.809 5.411a5.321 5.321 0 00-.721 2.683 5.33 5.33 0 002.372 4.439 5.323 5.323 0 01-2.416-.667v.067a5.335 5.335 0 004.279 5.23 5.336 5.336 0 01-2.409.092 5.34 5.34 0 004.983 3.705 10.699 10.699 0 01-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 008.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0028 6.937z"></path>
                          </svg>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <OpeningHours />
            </div>
            <div className="col-span-9">
              <Map />
              <div>
                <h1 className="text-[28px] font-[600] leading-[40px] py-3">
                  <span className="text-[#464646] font-[400]"> Send </span>us a
                  Message
                </h1>
                <p className="text-[14px] text-[#999]">
                  Feel free to ask any questions over the phone, or get in touch
                  via our contact form below. Your message will be dispatched
                  directly to our staff who will answer as soon as they can.
                </p>
              </div>
              <div className="mb-5 mt-14">
                <div className="flex justify-around">
                  <div class="my-4">
                    <label
                      class="block text-[#999] text-sm font-bold mb-2"
                      for="username"
                    >
                      Name *
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-96 py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="Full Name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="my-4">
                    <label
                      class="block text-[#999] text-sm font-bold mb-2"
                      for="username"
                    >
                      The Subject
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-96 py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="flex justify-around align-middle items-center">
                  <div>
                    <div class="my-4">
                      <label
                        class="block text-[#999] text-sm font-bold mb-2"
                        for="username"
                      >
                        Email *
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-96 py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Full Name"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div class="my-4">
                      <label
                        class="block text-[#999] text-sm font-bold mb-2"
                        for="username"
                      >
                        Phone Number *
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-96 py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="number"
                        placeholder="Phone Number "
                      />
                    </div>
                  </div>
                  <div>
                    <div class="my-4">
                      <label
                        class="block text-[#999] text-sm font-bold mb-2"
                        for="username"
                      >
                        Your Message *
                      </label>
                      <textarea
                        class="shadow appearance-none border rounded w-96 py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Full Name"
                        type="text"
                        rows={5}
                        placeholder="Type your message..."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-8 my-5">
                  <div className="bg-[#a175aa] text-center w-40 text-white text-[15.5px] font-[500] hover:bg-[#9760a2] py-[15px] cursor-pointer px-[25px] rounded-full">
                 Send Message
                  </div>
                  <div className="bg-transparent text-center w-40 text-[#999] hover:text-gray-400 border-2 border-gray-300 hover:border-gray-400 text-[15.5px] font-[500] py-[15px] px-[25px] cursor-pointer rounded-full">
                   Clear Form
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
