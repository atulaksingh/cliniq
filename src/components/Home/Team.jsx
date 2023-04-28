import React from "react";
import TeamCard from "../cards/TeamCard";

function Team() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-[46px] text-[#464646] font-[700] mb-6">
          <span class="normal text-[46px] text-[#464646] font-[400]">Meet</span>{" "}
          the Team
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
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
    </>
  );
}

export default Team;
