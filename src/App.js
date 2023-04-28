import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import PhysicalTherapy from "./pages/PhysicalTherapy";
import MassageTherapy from "./pages/MassageTherapy";
import ChiropracticTherapy from "./pages/ChiropracticTherapy";
import WorkInjuries from "./pages/WorkInjuries";
import ClinicalPilates from "./pages/ClinicalPilates";
import SportInjuries from "./pages/SportInjuries";
import GridLayout from "./pages/GridLayout";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/physical-therapy" element={<PhysicalTherapy />} />
          <Route path="/services/massage-therapy" element={<MassageTherapy />} />
          <Route path="/services/chiropractic-therapy" element={<ChiropracticTherapy />} />
          <Route path="/services/work-injuries" element={<WorkInjuries />} />
          <Route path="/services/clinical-pilates" element={<ClinicalPilates />} />
          <Route path="/services/sport-injuries" element={<SportInjuries />} />
          <Route path="/blog/grid-layout" element={<GridLayout />} />
          <Route path="/blog/blog-post" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
