import React, { useEffect, useState } from "react";
import AdminSideNav from "../../Components/AdminSideNav";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient.js";

const UpdatePost = () => {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          const formattedDate = new Date(data.posts[0].date)
            .toISOString()
            .split("T")[0];
          setFormData({ ...data.posts[0], date: formattedDate });
          setImages(data.posts[0].images || []);
        }
      };

      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change (multiple images)
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 5) {
      setImages([...images, ...files]);
    } else {
      alert("You can upload a maximum of 5 images.");
    }
  };

  // Handle image upload
  const handleImageUpload = async () => {
    let count = 0;
    const uploadedImagePaths = await Promise.all(
      images.map(async (image) => {
        const filePath = `${formData.slug}/${count}`;
        count += 1;
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
    return uploadedImagePaths;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploadedImagePaths = await handleImageUpload();

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

      const updatedPost = { ...formData, images: imageRecords };
      const res = await fetch(`/api/post/updatepost/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate("/about/admin/dashboard");
      }
    } catch (error) {
      console.log("Something went wrong");
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="flex">
      <AdminSideNav />

      <div className="w-full flex flex-col justify-center items-center">
        <div className="p-6 md:p-10 lg:ml-64 max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Update Post</h2>
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
                value={formData.title || ""}
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
                value={formData.time || ""}
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
                value={formData.date || ""}
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
                value={formData.location || ""}
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
                value={formData.description || ""}
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
                onChange={handleFileChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-pri_blue text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
