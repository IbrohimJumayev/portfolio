import React from "react";
import Ceftificates from "./Ceftificates";

const AboutTitle = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl sm:text-5xl font-bold">About Me</h2>
        <p className="mt-7 max-sm:mt-3 font-light text-base sm:text-xl">
          Hello! I'm Ibrokhim, a dedicated front-end developer specializing in
          creating responsive and user-friendly web applications. I have
          expertise in HTML, CSS, JavaScript, and TypeScript, and I excel in
          using frameworks like React and Next.js. My skills include styling
          with Sass and Tailwind CSS, and managing state with Redux and Context
          API.
        </p>
      </div>
      <div className="mt-10">
        <Ceftificates />
      </div>
    </div>
  );
};

export default AboutTitle;
