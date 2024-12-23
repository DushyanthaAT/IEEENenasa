import React, { useState } from "react";
import AdminSideNav from "../../Components/AdminSideNav";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    date: "",
    location: "",
    description: "",
    images: [],
  });

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
    if (files.length + formData.images.length <= 5) {
      setFormData({
        ...formData,
        images: [...formData.images, ...files],
      });
    } else {
      alert("You can upload a maximum of 5 images.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can add logic to send this data to a server or database
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
                id="images"
                type="file"
                name="images"
                accept="image/*"
                onChange={handleFileChange}
                multiple
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="mt-2">
                {formData.images.length > 0 &&
                  formData.images.map((image, index) => (
                    <p key={index} className="text-gray-600">{`Image ${
                      index + 1
                    }: ${image.name}`}</p>
                  ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-pri_blue text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
