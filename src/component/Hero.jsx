import React from "react";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactComponent from "./Contact";

const Hero = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Projects/>
      <Skills/>
      <ContactComponent/>
    </div>
  );
};

export default Hero;
