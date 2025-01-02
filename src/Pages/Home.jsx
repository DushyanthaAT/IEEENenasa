import React from "react";
import Navbar from "../Components/Navbar";
import homeImage from "../assets/homeImage.png";
import nenasaLogo from "../assets/NenasaLogo.png";
import SIGHTBG from "../assets/SIGHT_BG.jpg";
import SIGHT_Logo from "../assets/SIGHT_Logo.png";
import WebButton from "../Components/WebButton";
import WebFooter from "../Components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../../fmotion";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="flex flex-col items-center sm:flex-row sm:pt-10">
        <div className="flex-1 flex flex-col relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto aspect-square items-center justify-center sm:justify-normal">
          <motion.img
            src={homeImage}
            alt="student"
            className="w-[80%]"
            variants={fadeIn("left", 0.5, 1, 1)}
            initial="hidden60"
            whileInView="show"
          />
          <motion.div
            className="w-32 h-32 bg-pri_blue absolute bottom-3 right-5 sm:bottom-10 sm:right-10 opacity-90 rounded-xl flex flex-col justify-center items-center text-white "
            variants={fadeIn("left", 0.5, 1, 0.9)}
            initial="hidden40"
            whileInView="show"
          >
            <span className="text-4xl font-semibold">3</span>
            <span className="text-center">Projects Completed</span>
          </motion.div>
        </div>
        <div className="flex flex-col px-4 flex-1 gap-4 items-center sm:items-start">
          <motion.img
            src={nenasaLogo}
            alt="nenasa logo"
            className="w-40"
            variants={fadeIn("up", 0.5, 1.5, 1)}
            initial="hidden20"
            whileInView="show"
          />
          <motion.span
            className="text-justify text-lg md:text-xl lg:text-xl md:pb-20"
            variants={fadeIn("up", 0.5, 1.5, 1)}
            initial="hidden40"
            whileInView="show"
          >
            IEEE නැණස, is collaborative project between the SLSAC and IEEE Sri
            Lanka Section SIGHT with the intention of promoting STEM education
            among school students in the country. School students from mainly
            underprivileged communities are encouraged to pursue a journey in
            STEM education going beyond the school curriculum.
          </motion.span>
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
          <motion.img
            src={SIGHT_Logo}
            alt="SIGHT Logo"
            className="w-24 sm:w-32"
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          />
          <motion.span
            className="text-2xl lg:text-3xl font-bold text-pri_blue "
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
            IEEE Sri Lanka Section SIGHT
          </motion.span>
          <motion.hr
            className="border-t-4 border-pri_orange w-48 lg:w-56 rounded-3xl "
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          />
          <motion.span
            className="text-[0.75rem] lg:text-4 italic text-pri_blue "
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
            Leveraging technology for serving the underserved.
          </motion.span>
          <motion.span
            className="text-xs md:text-md lg:text-lg text-center text-gray-700 font-semibold max-w-80 lg:max-w-xl my-3 "
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
            IEEE Sri Lanka Section SIGHT is part of a global network of
            volunteer groups of IEEE members and volunteers who identify and
            address local problems by applying their technical skills and
            partnering with local communities.
          </motion.span>
          <motion.div
            variants={fadeIn("up", 0.2, 1, 1)}
            initial="hidden20"
            whileInView="show"
          >
            <WebButton title="Visit SIGHT" link="https://sight.ieee.lk/" />
          </motion.div>
        </div>
      </div>
      <WebFooter />
    </div>
  );
};

export default Home;
