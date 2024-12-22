import React from "react";
import NenasaLogo from "../assets/NenasaLogo.png";
import MenuIcon from "@mui/icons-material/Menu";

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
  return (
    <div className="flex p-5">
      <img
        src={NenasaLogo}
        alt="Nenasa Logo"
        className="w-20  h-auto object-contain"
      />
      <ul className=" gap-3 hidden">
        {Items.map((Item) => (
          <li key={Item.id}>
            <a href={Item.link}>{Item.title}</a>
          </li>
        ))}
      </ul>

      <MenuIcon className="text:red" />
    </div>
  );
};

export default Navbar;
