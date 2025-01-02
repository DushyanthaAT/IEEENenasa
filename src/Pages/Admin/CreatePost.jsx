import React, { useState } from "react";
import AdminSideNav from "../../Components/AdminSideNav";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient.js";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
    location: "",
    description: "",
    slug: "",
  });

  const [images, setImages] = useState([]);

  const [publishError, setPublishError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const createSlug = (e) => {
    const slug = e
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");
    setFormData((prevState) => ({
      ...prevState,
      slug,
    }));
  };
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "title") {
      createSlug(value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let count = 0;
      const uploadedImagePaths = await Promise.all(
        images.map(async (image) => {
          const filePath = `${formData.slug}/${count}`;
          count = count + 1;
          const { data: storageData, error: storageError } =
            await supabase.storage.from("NenasaImages").upload(filePath, image);

          if (storageError) {
            throw storageError;
          }

          const { data: publicUrlData } = supabase.storage
            .from("NenasaImages")
            .getPublicUrl(filePath);

          return { filePath, publicUrl: publicUrlData.publicUrl }; // Return the uploaded image path
        })
      );
      const imageRecords = uploadedImagePaths.map(
        ({ filePath, publicUrl }) => ({
          slug: formData.slug,
          image_url: publicUrl,
          image_id: filePath,
        })
      );

      const { error: imageError } = await supabase
        .from("NenasaImageTable")
        .insert(imageRecords);

      if (imageError) {
        console.log(imageError);
        throw imageError;
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await fetch("/api/post/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        setLoading(false);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate("/about/admin/dashboard");
        return;
      }
    } catch (error) {
      setPublishError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <AdminSideNav />

      <div className="w-full flex flex-col justify-center items-center">
        <div className="p-6 md:p-10 lg:ml-64  max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create a New Post
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-100 p-6 rounded-xl w-full"
          >
            {/* Title */}
            <div className="form-group">
              <label
                htmlFor="title"
                className="block font-medium text-gray-700 mb-2"
              >
                Title:
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Time */}
            <div className="form-group">
              <label
                htmlFor="time"
                className="block font-medium text-gray-700 mb-2"
              >
                Time:
              </label>
              <input
                id="time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Date */}
            <div className="form-group">
              <label
                htmlFor="date"
                className="block font-medium text-gray-700 mb-2"
              >
                Date:
              </label>
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Location */}
            <div className="form-group">
              <label
                htmlFor="location"
                className="block font-medium text-gray-700 mb-2"
              >
                Location:
              </label>
              <input
                id="location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label
                htmlFor="description"
                className="block font-medium text-gray-700 mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Upload Images */}
            <div className="form-group">
              <label
                htmlFor="images"
                className="block font-medium text-gray-700 mb-2"
              >
                Upload Images (Max 5):
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-pri_blue text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? "Updating..." : "Create Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
