import React from "react";
import Title from "../components/cards/Title";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ContactCard from "../components/cards/ContactCard";
import OfferCard from "../components/cards/OfferCard";

function Services() {
  return (
    <>
      <div>
        <Header />
        <div className="px-[55px]">

        <ContactCard />
        </div>
        <div className="px-[105px]">
          <Title title="Services" desc="Comprehensive therapy services" />

          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1 py-5">
              <OfferCard />
            </div>
            <div className="col-span-1  py-5">
              <OfferCard />
            </div>
            <div className="col-span-1 py-5">
              <OfferCard />
            </div>
            <div className="col-span-1 py-5">
              <OfferCard />
            </div>
            <div className="col-span-1 py-5">
              <OfferCard />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Services;
