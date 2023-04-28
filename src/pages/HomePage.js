import React from "react";

import Offer from "../components/Home/Offer";
import Header from '../components/shared/Header'
import Footer from "../components/shared/Footer";
import Logo from "../components/Home/Logo";
import Testimonials from "../components/Home/Testimonials";
import About from '../components/Home/About'
import Advantages from '../components/Home/Advantages'
import Hero from '../components/Home/Hero'
import Hero2 from '../components/Home/Hero2'
import Team from '../components/Home/Team'
import Latest from '../components/Home/Latest'
import Map from '../components/Home/Map'
function HomePage() {
  return (
    <>
      <div>
      
        {/* <Header/> */}
        {/* <Hero /> */}
        <div className="px-[105px]">
          <Offer />
          <About />
          <Advantages />
          <Team />
        </div>
        <Hero2 />
        <div className="px-[105px]">
          <Latest />
        </div>
        <Map />
        <Testimonials />
        <div className="px-[105px]">
          <Logo />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default HomePage;
