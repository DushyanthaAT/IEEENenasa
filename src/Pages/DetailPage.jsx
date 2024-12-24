import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Test from "../assets/test.jpg";
import Test2 from "../assets/test2.jpg";
import SIGHT_BG from "../assets/SIGHT_BG.jpg";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import WebFooter from "../Components/Footer";

const images = [Test, SIGHT_BG, Test, Test2, Test];

const DetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div>
      <Navbar />

      <div className="mx-2">
        <div className="flex w-full justify-center">
          <h2 className="text-2xl font-bold py-5 text-pri_blue ">Projects</h2>
        </div>
        <div className="flex flex-col items-center">
          {/* Big Image */}
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full max-w-5xl h-80 md:h-100 lg:h-128 mb-3 object-cover rounded-xl"
          />

          {/* Image List with Horizontal Scroll */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-16 lg:w-32 lg:h-20 rounded-md border-2 transition-all duration-200 ease-in-out object-cover hover:opacity-65 ${
                  selectedImage === image
                    ? "border-pri_blue"
                    : "border-transparent"
                } hover:border-pri_blue`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center mt-4">
          <div className="flex w-full max-w-2xl gap-3">
            <div className="flex flex-1 bg-gray-100 pt-2 pb-4 justify-center items-center rounded-xl">
              <div className="flex flex-[1] h-12 justify-center items-center">
                <TbCalendarTime className="w-1/2 sm:w-full h-full text-pri_blue" />
              </div>
              <div className="flex flex-col flex-[2] h-full">
                <h3 className="pb-2 font-bold text-pri_blue">Date and Time</h3>
                <span className="text-sm  md:text-base">
                  <strong>Date:</strong> 10 Sep 2024
                </span>
                <span className="text-sm md:text-base">
                  <strong>Time:</strong> 05:00 PM
                </span>
              </div>
            </div>

            <div className="flex flex-1  bg-gray-100 pt-2 pb-4 justify-center items-center rounded-xl">
              <div className="flex flex-[1] h-12 justify-center items-center">
                <MdOutlineLocationOn className="w-1/2 sm:w-full h-full text-pri_blue " />
              </div>
              <div className="flex flex-col flex-[2] h-full ">
                <h3 className="pb-2 font-bold text-pri_blue">Location</h3>
                <span className="text-sm  md:text-base">
                  Mock Location, mock city
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <p className="text-justify max-w-5xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            mollitia adipisci ut placeat! Repellendus quidem cumque perspiciatis
            nulla molestiae. Ut laudantium eaque molestiae fugiat amet aut natus
            pariatur eos quo. Obcaecati modi ex, reprehenderit soluta fugit enim
            autem natus dignissimos accusamus neque, rem esse dicta odio
            dolorem, consectetur laborum delectus aliquid! Laboriosam, sed
            voluptates eius perferendis nostrum est praesentium sint. Qui
            deserunt corporis nisi ad magnam, itaque cumque voluptatibus minus
            quis totam atque consequuntur recusandae unde voluptatem tempore
            vitae eligendi! Mollitia quo qui cumque placeat autem asperiores,
            praesentium quis impedit! Mollitia doloremque eos suscipit pariatur
            at deserunt quia? Quisquam doloribus, labore fuga atque commodi odio
            eum a consequuntur ullam, dolores, suscipit adipisci velit rerum
            fugit fugiat! Quibusdam saepe id ullam. Unde a suscipit dignissimos!
            Enim nemo, autem iusto quis consectetur nihil alias ut soluta ipsa
            porro blanditiis mollitia tempora voluptatibus labore expedita harum
            deleniti ex debitis, quos dolor esse facilis!
          </p>
        </div>
      </div>
      <WebFooter />
    </div>
  );
};

export default DetailPage;
