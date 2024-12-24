import React, { useState } from "react";
import NenasaLogo from "../assets/NenasaLogo.png";
import { Link, useLocation } from "react-router-dom";
import { LuPanelLeftOpen } from "react-icons/lu";
import { LuPanelRightOpen } from "react-icons/lu";

const AdminSideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleSideNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex h-screen absolute md:relative">
      <div
        className={`${
          isNavOpen ? "flex-col" : "hidden"
        } h-screen w-60 bg-pri_blue  pt-10 px-3 md:flex md:flex-col`}
      >
        <img src={NenasaLogo} alt="Nensa Logo" className="w-32 " />
        <div>
          <ul className="mt-6 flex flex-col gap-4">
            <Link to="/about/admin/dashboard">
              <li
                className={`w-full block py-2 px-4 rounded-md text-white font-bold ${
                  location.pathname === "/about/admin/dashboard"
                    ? "bg-[#2270af] "
                    : " hover:bg-white hover:text-pri_blue"
                }`}
              >
                Dashboard
              </li>
            </Link>
            <Link to="/about/admin/dashboard">
              <li
                className={`w-full block py-2 px-4 rounded-md text-white font-bold ${
                  location.pathname === "/about/admin/create-post"
                    ? "bg-[#2270af]"
                    : " hover:bg-white hover:text-pri_blue"
                }`}
              >
                Create Post
              </li>
            </Link>
            <Link to="/about/admin/dashboard">
              <li
                className={`w-full block py-2 px-4 rounded-md text-white font-bold ${
                  location.pathname === "/about/admin/signout"
                    ? "bg-[#2270af] "
                    : " hover:bg-white hover:text-pri_blue"
                }`}
              >
                Sign out
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <button
        onClick={toggleSideNav}
        className="text-pri_blue md:hidden focus:outline-non rounded-xl flex justify-center items-center text-4xl font-bold"
      >
        {isNavOpen ? <LuPanelRightOpen /> : <LuPanelLeftOpen />}
      </button>
    </div>
  );
};

export default AdminSideNav;
