import React from "react";
import Navbar from "../Components/Navbar";
import homeImage from "../assets/homeImage.png";
import nenasaLogo from "../assets/nenasaLogo.png";

const Home = () => {
  return (
    <div className="mx-0 md:mx-16 lg:mx-32">
      <Navbar />

      <div className="flex flex-col items-center sm:flex-row sm:pt-10">
        <div className="flex-1 flex flex-col relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto aspect-square items-center justify-center sm:justify-normal">
          <img src={homeImage} alt="student" className="w-[80%]" />
          <div className="w-32 h-32 bg-pri_blue absolute bottom-10 right-10 opacity-90 rounded-xl flex flex-col justify-center items-center text-white ">
            <span className="text-4xl font-semibold">3</span>
            <span className="text-center">Projects Completed</span>
          </div>
        </div>
        <div className="flex flex-col px-4 flex-1 gap-4">
          <img src={nenasaLogo} alt="nenasa logo" className="w-40" />
          <span className="text-justify text-lg md:text-xl lg:text-2xl">
            IEEE නැණස, is collaborative project between the SLSAC and IEEE Sri
            Lanka Section SIGHT with the intention of promoting STEM education
            among school students in the country. School students from mainly
            underprivileged communities are encouraged to pursue a journey in
            STEM education going beyond the school curriculum.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
