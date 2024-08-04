"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Information = () => {
  return (
    <div>
      <div className="flex-col">
        <div>
          <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-500 inline-block text-transparent bg-clip-text">
            Hello, I&apos;m
          </h1>
        </div>
        <div className="mt-3">
          <span className="text-3xl sm:text-5xl text-white ">
            <TypeAnimation
              className="lg:text-7xl text-4xl"
              sequence={["Ibrohim Jumayev", 1700, "Frontend Developer", 1700]}
              wrapper="span"
              speed={60}
              style={{
                fontWeight: "bold",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="mt-7 font-semibold text-[#ADB7BE] sm:text-xl text-sm">
          <p>
            Passionate front-end developer with a knack for creating responsive,
            user-friendly web applications
          </p>
        </div>
        <div className="flex gap-5 mt-10 max-lg:flex-col mx-5">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600  to-green-600 rounded-full text-xl max-sm:text-base">
            Hire me
          </button>
          <button className="px-4  bg-gradient-to-r bg-[#ADB7BE] rounded-full text-xl max-sm:text-base py-2">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
