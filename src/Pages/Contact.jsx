import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import WebFooter from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus(
        "Thank you for reaching out! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };
  return (
    <div className="">
      <Navbar />

      <div className="flex w-full justify-center">
        <h2 className="text-2xl font-bold py-5 text-pri_blue ">Contact Us</h2>
      </div>

      <div className="flex flex-col w-full  items-center h-screen">
        <form
          className="mx-2 p-4 bg-gray-100 rounded-xl w-full max-w-xl"
          onSubmit={handleSubmit}
        >
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue"
            />
          </div>

          {/* email */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue resize-none"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full p-3 bg-pri_blue text-white font-semibold rounded-md hover:bg-blue-900 disabled:bg-blue-300"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {submissionStatus && (
            <p className="mt-4 text-center text-green-600 font-semibold">
              {submissionStatus}
            </p>
          )}
        </form>
      </div>
      <WebFooter />
    </div>
  );
};

export default Contact;
