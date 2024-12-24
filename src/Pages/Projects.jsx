import React from "react";
import Navbar from "../Components/Navbar";
import SIGHT_BG from "../assets/SIGHT_BG.jpg";
import Test from "../assets/test.jpg";
import Card from "../Components/Card";
import WebFooter from "../Components/Footer";

const samplePosts = [
  {
    title: "title 1",
    description:
      "sample descripation 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ",
    image: SIGHT_BG,
  },
  {
    title: "title 2",
    description: "sample descripation 2",
    image: Test,
  },
  {
    title: "title 3",
    description: "sample descripation 3",
    image: SIGHT_BG,
  },
  {
    title: "title 4",
    description: "sample descripation 4",
    image: SIGHT_BG,
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center">
        <h2 className="text-2xl font-bold py-5 text-pri_blue ">Projects</h2>
      </div>
      <div className="flex justify-center w-[full-6] md:w-full mx-3 md:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-0 justify-items-center  w-full">
          {samplePosts.map((samplePost, index) => (
            <Card
              key={index}
              title={samplePost.title}
              description={samplePost.description}
              image={samplePost.image}
            />
          ))}
        </div>
      </div>
      <WebFooter />
    </div>
  );
};

export default Projects;
