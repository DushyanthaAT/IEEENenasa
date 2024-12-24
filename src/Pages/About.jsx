import React from "react";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/AboutImg.jpg";
import WebFooter from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center">
        <h2 className="text-2xl font-bold py-5 text-pri_blue ">About Us</h2>
      </div>
      <div className="mx-2 w-[full-4] flex flex-col items-center gap-5 mb-6">
        <img
          src={AboutImg}
          alt="About Us"
          className="w-full max-w-4xl rounded-xl "
        />
        <p className="text-justify w-full max-w-4xl">
          The IEEE Special Interest Group on Humanitarian Technology (SIGHT) is
          an Institute of Electrical and Electronics Engineers (IEEE) program,
          instituted by the IEEE Humanitarian Activities Committee (HAC). IEEE
          SIGHT is a global network of groups consisting of IEEE members and
          volunteers who identify and address local problems by applying their
          technical skills and partnering with their local communities. IEEE Sri
          Lanka Section SIGHT is part of a global network of volunteer groups of
          IEEE members and volunteers who identify and address local problems by
          applying their technical skills and partnering with local communities.
          Going beyond providing temporary solutions for humanitarian issues
          within the society, we intend to provide sustainable solutions for the
          local communities with the use of technology. With IEEE Sri Lanka
          Section SIGHT we connect with local communities, work along with them
          to transform the community in such a way that they feel part of the
          process. If you are interested in joining hands to a project which
          could delivers a positive impact with technology, this is the place
          you should be.
        </p>
      </div>
      <WebFooter />
    </div>
  );
};

export default About;
