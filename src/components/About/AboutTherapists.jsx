import React from "react";
import TeamCard from "../cards/TeamCard";

const TherapistsData = [
    {
        name:"Robert Davis",
        asstname:"Physical Therapist",
        desc:"I started practicing in 1999 after graduating from the University of Vermont. During those college class years..."
    }
]
function AboutTherapists() {
  return (
    <div className="container mx-auto">
      <h1 className="text-[36px] text-[#464646] font-[700] my-4">
        <span class="normal text-[46px] text-[#464646] font-[400]">Our</span>{" "}
        Therapists
      </h1>
      <div className="grid grid-cols-4 gap-7 py-5">
        <div className="col-span-1">
          <TeamCard />
        </div>
        <div className="col-span-1">
          <TeamCard />
        </div>
        <div className="col-span-1">
          <TeamCard />
        </div>
        <div className="col-span-1">
          <TeamCard />
        </div>
        <div className="col-span-1">
          <TeamCard />
        </div>
        <div className="col-span-1">
          <TeamCard />
        </div>
      </div>
    </div>
  );
}

export default AboutTherapists;
