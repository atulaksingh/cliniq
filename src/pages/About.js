import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ContactCard from "../components/cards/ContactCard";
import Title from "../components/cards/Title";
import AboutCard1 from "../components/About/AboutCard1";
import AboutTherapists from "../components/About/AboutTherapists";

function About() {
  return (
    <>
      <Header />
      <div className="px-2 lg:px-[55px]">

      <ContactCard />
      </div>
      <div className="px-5 lg:px-[105px]">
        <Title
          title="Abous Us"
          desc="We offer physical therapy services since 1996"
        />
        <AboutCard1 />
        <AboutTherapists />
      </div>
      <Footer />
    </>
  );
}

export default About;
