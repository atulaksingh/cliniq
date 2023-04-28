import React from 'react'
import OfferCard from '../cards/OfferCard'
import LatestCard from '../cards/LatestCard'

function Latest() {
  return (
   <>
     <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 py-5 gap-10 ">
          <div className="col-span-1">
            <h1 className="text-[37px] font-[600] leading-[40px] py-3">
              <span className="text-[#464646] font-[400]"> Latest </span>News and Research
            </h1>
            <p className="text-[15px] text-[#a5a5a5] leading-[23px] py-3">
            Find out the latest news about our Physiotherapy Clinic and information about all your Physiotherapy and health related needs.
            </p>
            <p className="text-[15px] text-[#a5a5a5] leading-[23px] py-3">
            We are always happy to hear what you have to say so be sure to leave a comment.
            </p>
            <div className="bg-[#9A65A5] text-white text-[14.5px] font-[500] p-3 w-40  text-center rounded-full my-2">
            Read all News
            </div>
          </div>
          <div className="col-span-1">
          <LatestCard />
          </div>
          <div className="col-span-1">
          <LatestCard />

          </div>
          <div className="col-span-1">
          <LatestCard />

          </div>
        </div>
      </div>
   </>
  )
}

export default Latest
