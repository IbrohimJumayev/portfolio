import React from "react";
import Information from "./Information";

const PersonalSection = () => {
  return (
    <div className="sm:px-20 px-10 flex max-sm:flex-col  gap-10 mt-10 max-sm:-mt-5 max-sm:text-center">
      <div className="flex-1">
        <Information />
      </div>
      <div className="flex-2  bg-[#18191E] rounded-full  overflow-hidden max-sm:flex max-sm:justify-center max-sm:max-w-xl max-sm:m-auto">
        <img
          className="w-96 max-sm:w-72 max-lg:w-71 max-md:w-60 "
          src="/img.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PersonalSection;
