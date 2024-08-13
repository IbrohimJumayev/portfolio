"use client";
import React from "react";
import { Drawer } from "flowbite-react";

const Menu = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="bg-[#7D3AF2] text-white text-xl font-bold w-full   h-1/4 mt-20"
        position="right"
      >
        <Drawer.Header title="Portfolio" />
        <Drawer.Items>
          <ul className="flex-col text-center gap-5 sm:gap-8  text-2xl font-bold sm:text-xl  ">
            <li className="mt-2" onClick={handleClose}>
              <a href="#about">About</a>
            </li>
            <li className="mt-2" onClick={handleClose}>
              <a href="#projects">Projects</a>
            </li>
            <li className="mt-2" onClick={handleClose}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default Menu;
