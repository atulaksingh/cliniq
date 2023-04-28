import React from 'react'

function PhyCard() {
  return (
<>
<div className="flex justify-between  items-start gap-5 pb-5">
              <div className="w-[50%]">
                <img
                  className="h-[50%] "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682583778/physio_03_1_obcuot.jpg"
                ></img>
              </div>
              <div className="w-[50%]">
                <h1 className="font-[700] text-[15px] text-[#56afdf] mb-4 ">
                  We provide Physical Therapy services
                </h1>
                <p className="text-[#999] text-[14px] font-[400] leading-[1.50rem]">
                  Your personal physical therapy begins with a comprehensive
                  evaluation of functional limitations and areas of pain. Our
                  team of expert physical therapists will design a treatment
                  plan based on your work-related needs and goals. We take a
                  team approach and will consult with your employer and case
                  manager, if necessary. Throughout your treatment, we will work
                  hard to help you return to all normal functional activities.
                </p>
                <p className="text-[#999] text-[14px] font-[400] leading-[1.50rem]">
                  When you are ready for discharge, you will receive a
                  personalized home exercise program to allow you to stay
                  healthy on the job, further enhance your rehabilitation.
                </p>
              </div>
            </div>
</>
  )
}

export default PhyCard
