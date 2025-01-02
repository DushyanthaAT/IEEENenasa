import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import WebFooter from "../Components/Footer";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import supabase from "../config/supabaseClient";

const DetailPage = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [post, setPost] = useState([0]);
  const { postSlug } = useParams();
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPost(data.posts);
      } catch (error) {
        setError(error);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("NenasaImageTable")
          .select("*")
          .eq("slug", postSlug);

        if (error) {
          throw error;
        }
        setImages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchImages();
  }, []);
  const getImageForPost = (slug) => {
    const image = images.find((image) => image.slug === slug);
    console.log(image);

    return image ? image.image_url : null;
  };

  useEffect(() => {
    if (postSlug && images.length > 0) {
      const imageForPost = getImageForPost(postSlug);
      setSelectedImage(imageForPost);
    }
  }, [postSlug, images]);

  return (
    <div>
      <Navbar />

      <div className="mx-2">
        <div className="flex w-full justify-center">
          <h2 className="text-2xl font-bold py-5 text-pri_blue ">
            {post[0].title}
          </h2>
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
                src={image.image_url}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-16 lg:w-32 lg:h-20 rounded-md border-2 transition-all duration-200 ease-in-out object-cover hover:opacity-65 ${
                  selectedImage === image.image_url
                    ? "border-pri_blue"
                    : "border-transparent"
                } hover:border-pri_blue`}
                onClick={() => setSelectedImage(image.image_url)}
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
                  <strong>Date: </strong>
                  {dayjs(post[0].date, "DD/MM/YYYY").format("DD MMM YYYY")}
                </span>
                <span className="text-sm md:text-base">
                  <strong>Time: </strong>
                  {dayjs(`2023-01-01T${post[0].time}:00`).format("h:mm A")}
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
                  {post[0].location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <p className="text-justify max-w-5xl ">{post[0].description}</p>
        </div>
      </div>
      <WebFooter />
    </div>
  );
};

export default DetailPage;
