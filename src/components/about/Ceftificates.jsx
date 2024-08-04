"use client";

import React, { useState } from "react";

const Ceftificates = () => {
  const object = {
    skills: [
      "HTML",
      "CSS",
      "JS",
      "Typescript",
      "GIT/GITHUB",
      "Sass",
      "Tailwind",
      "React",
      "Next.js",
      "Redux",
      "BEM",
    ],
    education: ["Najot Talim"],
  };

  const list = Object.keys(object);

  const [active, setActive] = useState();
  return (
    <div>
      <div>
        <ul className="flex gap-5 list-none font-bold">
          {list.map((l, index) => (
            <li className="text-xl" key={index}>
              <button
                className={`${
                  active !== l ? "" : "border-b-4 border-blue-500 duration-200"
                }`}
                onClick={() => setActive(l)}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="mt-7 pl-3 list-disc">
          {active &&
            object[active].map((s, index) => (
              <li className="text-base" key={index}>
                {s}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Ceftificates;
