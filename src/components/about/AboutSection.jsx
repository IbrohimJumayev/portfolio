import React from "react";
import AboutTitle from "./AboutTitle";

const AboutSection = () => {
  return (
    <div className="sm:px-32 justify-between  px-5 flex gap-10 max-lg:flex-col max-sm:px-10">
      <div className="flex-1">
        <img src="/about.jpeg" alt="" />
      </div>
      <div className="flex-1">
        <AboutTitle />
      </div>
    </div>
  );
};

export default AboutSection;
