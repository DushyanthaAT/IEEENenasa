import React from "react";
import Navbar from "../Components/Navbar";
import homeImage from "../assets/homeImage.png";
import nenasaLogo from "../assets/NenasaLogo.png";
import SIGHTBG from "../assets/SIGHT_BG.jpg";
import SIGHT_Logo from "../assets/SIGHT_Logo.png";
import WebButton from "../Components/WebButton";
import WebFooter from "../Components/Footer";
const Home = () => {
  return (
    <div className="mx-0 md:mx-16 lg:mx-32 flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center sm:flex-row sm:pt-10">
        <div className="flex-1 flex flex-col relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto aspect-square items-center justify-center sm:justify-normal">
          <img src={homeImage} alt="student" className="w-[80%]" />
          <div className="w-32 h-32 bg-pri_blue absolute bottom-3 right-5 sm:bottom-10 sm:right-10 opacity-90 rounded-xl flex flex-col justify-center items-center text-white ">
            <span className="text-4xl font-semibold">3</span>
            <span className="text-center">Projects Completed</span>
          </div>
        </div>
        <div className="flex flex-col px-4 flex-1 gap-4 items-center sm:items-start">
          <img src={nenasaLogo} alt="nenasa logo" className="w-40" />
          <span className="text-justify text-lg md:text-xl lg:text-xl md:pb-20">
            IEEE නැණස, is collaborative project between the SLSAC and IEEE Sri
            Lanka Section SIGHT with the intention of promoting STEM education
            among school students in the country. School students from mainly
            underprivileged communities are encouraged to pursue a journey in
            STEM education going beyond the school curriculum.
          </span>
        </div>
      </div>
      <div className="flex flex-col h-80 w-full md:h-100 lg:h-auto relative items-center justify-center mt-5">
        <img src={SIGHTBG} alt="SIGHT" className="w-full h-full object-cover" />
        <div className="absolute h-full w-full top-0 left-0 opacity-80  bg-gray-100" />
        <div
          className="absolute h-full w-full top-0 left-0 opacity-20 [background-image:linear-gradient(135deg,_#c1c1c1_25%,_transparent_25%),_linear-gradient(225deg,_#c1c1c1_25%,_transparent_25%),_linear-gradient(45deg,_#c1c1c1_25%,_transparent_25%),_linear-gradient(315deg,_#c1c1c1_25%,_#ffffff_25%)] 
                   [background-position:4px_0,_4px_0,_0_0,_0_0] 
                   [background-size:4px_4px] 
                   [background-repeat:repeat] 
                   "
        />
        <div className="flex flex-col items-center absolute max-w-xl">
          <img src={SIGHT_Logo} alt="SIGHT Logo" className="w-24 sm:w-32" />
          <span className="text-2xl lg:text-3xl font-bold text-pri_blue ">
            IEEE Sri Lanka Section SIGHT
          </span>
          <hr className="border-t-4 border-pri_orange w-48 lg:w-56 rounded-3xl " />
          <span className="text-[0.75rem] lg:text-4 italic text-pri_blue ">
            Leveraging technology for serving the underserved.
          </span>
          <span className="text-xs md:text-md lg:text-lg text-center text-gray-700 font-semibold max-w-80 lg:max-w-xl my-3 ">
            IEEE Sri Lanka Section SIGHT is part of a global network of
            volunteer groups of IEEE members and volunteers who identify and
            address local problems by applying their technical skills and
            partnering with local communities.
          </span>
          <WebButton title="Visit SIGHT" link="https://sight.ieee.lk/" />
        </div>
      </div>
      <WebFooter />
    </div>
  );
};

export default Home;
