import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import WebFooter from "../Components/Footer";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { motion } from "framer-motion";
import { fadeIn } from "../../fmotion";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://ieee-nenasa-backend.vercel.app/api/post/getposts"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from("NenasaImageTable")
          .select("*");

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
    return image ? image.image_url : null;
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className="flex w-full justify-center"
        variants={fadeIn("up", 0.5, 1, 1)}
        initial="hidden60"
        whileInView="show"
      >
        <h2 className="text-2xl font-bold py-5 text-pri_blue ">Projects</h2>
      </motion.div>
      <div className="flex justify-center w-[full-6] md:w-full mx-3 md:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-0 justify-items-center  w-full">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              time={post.time}
              date={post.date}
              location={post.location}
              image={getImageForPost(post.slug)}
              post={post.slug}
            />
          ))}
        </div>
      </div>
      <WebFooter />
    </div>
  );
};

export default Projects;
