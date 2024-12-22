import React, { useState } from "react";
import NenasaLogo from "../assets/NenasaLogo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";

const Items = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Projects",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 flex pt-5 px-7 items-center justify-between">
      <img
        src={NenasaLogo}
        alt="Nenasa Logo"
        className="w-24 h-auto object-contain"
      />
      <ul className="gap-10 hidden sm:flex">
        {Items.map((Item) => (
          <li
            key={Item.id}
            className=" text-gray-500 font-semibold text-lg hover:text-pri_blue"
          >
            <a href={Item.link}>{Item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="transition-transform duration-500 ease-in-out">
          {open ? (
            <HiMenuAlt2
              style={{ stroke: "#1B609A", strokeWidth: "1" }}
              className="text-3xl text-pri_blue"
            />
          ) : (
            <HiMenuAlt3
              style={{ stroke: "#1B609A", strokeWidth: "1" }}
              className="text-3xl text-pri_blue"
            />
          )}
        </div>
      </div>

      {/* responsiveMenu */}
      <div
        className={`z- 100 absolute sm:hidden top-16 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <ul className="flex flex-col gap-3 w-full items-center py-2">
          {Items.map((Item) => (
            <li
              key={Item.id}
              className="text-gray-500 hover:text-white hover:bg-pri_blue w-[90%] text-center py-2 rounded-lg"
            >
              <a href={Item.link}>{Item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
