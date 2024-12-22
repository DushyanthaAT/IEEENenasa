import React from "react";
import nenasaLogo from "../assets/NenasaLogo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const links = [
  {
    id: 1,
    title: "IEEE",
    link: "https://www.ieee.org/",
  },
  {
    id: 2,
    title: "IEEE SL",
    link: "https://ieee.lk/",
  },
  {
    id: 3,
    title: "IEEE SIGHT",
    link: "https://sight.ieee.org/",
  },
];

const WebFooter = () => {
  return (
    <div className="bg-[#444444] w-full h-auto mt-3 flex flex-col items-center justify-center gap-2 py-8">
      <img src={nenasaLogo} alt="nenasa logo" className="w-24" />
      <ul className="flex gap-7 text-white ">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
      <hr className="border-t-1 border-white w-60" />
      <div className="flex gap-4">
        <a
          href="https://web.facebook.com/IEEESLSIGHT?_rdc=1&_rdr#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-white text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/ieeeslsight/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoInstagramAlt className="text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/ieee-sight-sri-lanka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>
      </div>
      <span className="text-[0.5rem] text-white">
        © Copyright 2025 | IEEE Sri Lanka Section SIGHT - All rights reserved.
      </span>
    </div>
  );
};

export default WebFooter;
