import React from "react";
import AboutTitle from "./AboutTitle";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div id="about" className="sm:px-32 justify-between  px-5 flex gap-10 max-lg:flex-col max-sm:px-10">
      <div className="flex-1">
        <Image src="/about.jpeg" alt="" width={500} height={500} />
      </div>
      <div className="flex-1">
        <AboutTitle />
      </div>
    </div>
  );
};

export default AboutSection;
