import React from "react";

const WebButton = ({ title, link }) => {
  return (
    <a
      href={link}
      target="blank"
      className={`px-6 py-2 bg-pri_orange text-white text-center font-semibold hover:opacity-80 transition duration-300 rounded-lg`}
    >
      {title}
    </a>
  );
};

export default WebButton;
