import React from "react";
import Links from "./Links";

const NavSection = () => {
  return (
    <div className="flex  justify-between py-5 border-y border-[#33353F] items-center sm:px-20 px-5 fixed top-0 bg-black w-full  overflow-hidden">
      <div>
        <a href="#">
          <p className="text-3xl sm:text-6xl  font-bold cursor-pointer">
            Portfolio
          </p>
        </a>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavSection;
