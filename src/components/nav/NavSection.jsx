"use client";
import React from "react";
import Links from "./Links";
import { useState } from "react";
import Menu from "./Menu";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex  justify-between py-5 border-y z-50 border-[#33353F] items-center sm:px-20 px-5 fixed top-0 bg-black w-full  overflow-hidden">
      <div>
        <a href="#">
          <p className="text-3xl sm:text-6xl  font-bold cursor-pointer">
            Portfolio
          </p>
        </a>
      </div>
      <div>
        <Links />

        <button
          className="bg-[#7D3AF2] sm:hidden px-4 py-2 flex items-center rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          <span class="material-symbols-outlined">menu</span>
        </button>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default NavSection;
