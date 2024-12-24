import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col bg-[#f4f1f1] w-full lg:h-100 p-2 m-4 rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.10)] overflow-hidden ">
      <div className="self-end">
        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-4 hover:bg-pri_blue">
          <ImArrowUpRight2 />
        </div>
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
    // <div className="card">
    //   <img src={image} alt={title} className="card-image" />
    //   <div className="card-content">
    //     <h3 className="card-title">{title}</h3>
    //     <p className="card-description">{description}</p>
    //   </div>
    // </div>
  );
};

export default Card;
