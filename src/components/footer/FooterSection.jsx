import React from "react";
import Image from "next/image";
import ContactSection from "./ContactSection";

const FooterSection = () => {
  return (
    <div className="mt-32 px-10 sm:px-20 flex gap-20 max-sm:flex-col">
      <div className="flex-1">
        <h3 className="font-bold text-2xl">Let&apos;s connect</h3>
        <p className="mt-5 text-[#ADB7BE]">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="flex gap-3 mt-5">
          <a href="https://github.com/IbrohimJumayev" target="_blank">
            {" "}
            <Image src="/git.svg" width={50} height={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/ibrohim-jumayev-94a049301/"
            target="_blank"
          >
            {" "}
            <Image src="/linked.svg" width={50} height={50} />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <ContactSection />
      </div>
    </div>
  );
};

export default FooterSection;
