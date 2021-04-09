import React from "react";
import AboutCareer from "./AboutCareer";
import AboutMindMap from "./AboutMindMap";
import Navigation from "./Navigation";
import SectionBar from "./SectionBar";

function About({ withBanner }) {
  return (
    <div>
      <Navigation withBanner={withBanner}/>
      <div id="content" className="content">
      <SectionBar id="about" title="About Me" />
      <AboutCareer />
      <AboutMindMap />
    </div>
    </div>
  );
}

export default About;
