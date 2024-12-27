import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux/user/userSlice.js";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      dispatch(loginStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        dispatch(loginFailure(error.message));
        return;
      }

      const data = await res.json();
      if (res.ok) {
        dispatch(loginSuccess(data));
        navigate("/about/admin/dashboard");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center px-4">
      <div className="flex w-full justify-center">
        <h2 className="text-2xl font-bold py-5 text-pri_blue ">Admin Login</h2>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="mx-2 p-4 bg-gray-100 rounded-xl w-full max-w-xl"
        >
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
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue"
            />
          </div>
          {errorMessage && (
            <div className="mt-4 text-sm text-red-500">
              Wrong email or password
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full p-3 bg-pri_blue text-white font-semibold rounded-md hover:bg-blue-900 disabled:bg-blue-300"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
