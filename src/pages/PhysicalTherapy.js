import React from "react";
import PhyCard from "../components/ServiceCard/PhyCard";
import OurServicesCard from "../components/ServiceCard/OurServicesCard";
import OpeningHours from "../components/ServiceCard/OpeningHours";
import Header from "../components/shared/Header";
import ContactCard from "../components/cards/ContactCard";
import Hero2 from "../components/Home/Hero2";
import Title from "../components/cards/Title";
import Footer from "../components/shared/Footer";

function PhysicalTherapy() {
  return (
    <>
      <div className="font-[Helvetica]">
        <Header />
        <div className="container mx-auto">
          <div className="px-5 lg:px-[24px]">
            <ContactCard />
          </div>
          <div className="px-5 lg:px-[73px]">
            <Title title="Physical Therapy" desc="" />
          </div>
          <div className="grid grid-cols-12 px-5 lg:px-[73px] py-10 gap-5">
            <div className="col-span-12 lg:col-span-9">
              <PhyCard />
              <PhyCard />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <OurServicesCard />
              <div className="bg-[#f5f8fb] py-[20px] px-[30px]">
                <OpeningHours />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PhysicalTherapy;
