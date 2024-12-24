import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get the current path
import NenasaLogo from "../assets/NenasaLogo.png";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Items = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [activateIndex, setActivateIndex] = useState(1);

  useEffect(() => {
    const activeItem = Items.findIndex(
      (item) => item.link === location.pathname
    );
    setActivateIndex(activeItem !== -1 ? activeItem + 1 : -1); // Setting to -1 when no match
  }, [location]);

  return (
    <div className="sticky top-0 z-50 flex py-2 px-7 items-center justify-between bg-white">
      <Link to="/">
        <img
          src={NenasaLogo}
          alt="Nenasa Logo"
          className="w-24 h-auto object-contain"
        />
      </Link>
      <ul className="gap-10 hidden sm:flex pt-3">
        {Items.map((Item) => (
          <li
            key={Item.id}
            className={`font-semibold text-lg hover:text-pri_blue ${
              activateIndex === Item.id ? "text-pri_blue" : "text-gray-500"
            }`}
            onClick={() => setActivateIndex(Item.id)}
          >
            <Link to={Item.link}>{Item.title}</Link>
            {activateIndex === Item.id && (
              <div className="w-3 h-1.5 rounded-full bg-pri_blue mx-auto"></div>
            )}
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
        className={`absolute top-16 left-0 w-full bg-white  flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 w-full items-center py-2">
          {Items.map((Item) => (
            <li
              key={Item.id}
              className={`text-gray-500 hover:text-white hover:bg-pri_blue w-[90%] text-center py-2 rounded-lg ${
                activateIndex === Item.id ? "bg-pri_blue text-white" : ""
              }`}
              onClick={() => {
                setActivateIndex(Item.id);
                setOpen(false);
              }}
            >
              <Link to={Item.link}>{Item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
