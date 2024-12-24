import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col bg-[#f4f1f1] w-full lg:h-100 p-2 m-4 rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.10)] overflow-hidden ">
      <div className="self-end">
        <Link to="/projects/project">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-4 hover:bg-pri_blue">
            <ImArrowUpRight2 />
          </div>
        </Link>
      </div>
      <div className=" flex flex-col justify-start flex-1 ">
        <span className="self-start text-2xl font-bold capitalize">
          {title}
        </span>
        <p className="self-start font-normal capitalize text-gray-700 line-clamp-2 h-[3rem]">
          {description}
        </p>
      </div>
      <div className="w-full h-full mt-2">
        <img
          src={image}
          alt={title}
          className="rounded-2xl object-cover w-full h-64"
        />
      </div>
    </div>
  );
};

export default Card;
