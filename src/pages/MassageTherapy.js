import React from "react";
import PhyCard from "../components/ServiceCard/PhyCard";
import OurServicesCard from "../components/ServiceCard/OurServicesCard";
import OpeningHours from "../components/ServiceCard/OpeningHours";
import Header from "../components/shared/Header";
import ContactCard from "../components/cards/ContactCard";
import Hero2 from "../components/Home/Hero2";
import Title from "../components/cards/Title";
import Footer from "../components/shared/Footer";
import MsThCard from "../components/ServiceCard/MsThCard";
function MassageTherapy() {
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto">
          <div className="px-5 lg:px-[24px]">
            <ContactCard />
          </div>
          <div className="px-5 lg:px-[73px]">
            <Title title="Massage Therapy" desc="" />
          </div>
          <div className="grid grid-cols-12 px-5 lg:px-[73px] py-10 gap-5">
            <div className="col-span-12 lg:col-span-9">
              <p className="text-[16px] text-[#999] mb-5">
                Massage therapy uses a variety of techniques to manipulate your
                joints and soft tissue to improve your body’s overall health.
                Massage increases the body’s supply of oxygen and nutrients to
                your muscles, which help release waste from the muscle tissue.
                Massage also accelerates your body's own natural ability to heal
                itself.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
                <div className="col-span-1">
                  <MsThCard />
                </div>
                <div className="col-span-1">
                  <MsThCard />
                </div>
              </div>
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

export default MassageTherapy;
