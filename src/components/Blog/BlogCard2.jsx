import React from 'react'
const blogcatdata=[
    
    {
      name: "Exercises",
      // link:"/service",
    },
    {
        name: "Insurance",
        // link:"/services/chiropractic-therapy",
      },
      {
        name: "Physio",
        // link:"/services/clinical-pilates",
      },
      {
        name: "Sporting",
        // link:"/services/massage-therapy",
      },
      {
        name: "Studies",
        // link:"/services/physical-therapy",
      },
      {
        name: "Therapy",
        // link:"/services/sport-injuries",
      },
      {
        name: "Work Injury",
        // link:"/services/work-injuries",
      },
  ];
function BlogCard2() {
  return (
  <>
    <div>
    <h1 className="text-[22px] font-[600] leading-[40px] pb-3">
                <span className="text-[#464646] font-[400]"> About </span>Us
              </h1>
              <p className="text-[14px] text-[#999] leading-[1.65rem]">
                At Physio Physical Therapy, we recognize the impacts that pain
                and dysfunction can have on one's personal and professional
                life. We are committed as primary healthcare professionals to
                help our clients resume their lifelong pursuit of health and
                well-being.
              </p>
              <p className=" my-5">
                <img
                  className="bg-[#999]"
                  color="#999"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682659035/sig_eiwiwn.png"
                />
              </p>
              <div className="py-5">
                <h1 className="text-[25px] font-[600] leading-[40px] py-3">
                  <span className="text-[#464646] font-[400]"> Search </span>Us
                </h1>
                <input
                  type="text"
                  className="py-3 px-3  w-44 text-[#999] bg-[#f9f9f9] border-4 border-[#f2f2f2]"
                  placeholder="Email"
                />
                <button className="py-3 px-3 bg-[#56afd5] text-white">
                  Search
                </button>
              </div>
              <div>
                <h1 className="text-[22px] text-[#464646c7]">Categories</h1>
                <div>
                {blogcatdata.map((item,index)=>(

                  <div className="flex justify-start align-middle items-center cursor-pointer py-0.5">
                    <div>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        className=" fill-[rgba(0,0,0,.2)] "
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.293 4.707L14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707z"></path>
                      </svg>
                    </div>
                    {/* <Link to={item.link}> */}
                    <div className="text-[15px] font-[400] text-[#56afd5] ">
                     {item.name}
                    </div>
                    {/* </Link> */}
                  </div>
                ))}
                </div>
              </div>
    </div>
  </>
  )
}

export default BlogCard2
