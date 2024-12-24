import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center px-4">
      <div className="flex w-full justify-center">
        <h2 className="text-2xl font-bold py-5 text-pri_blue ">Admin Login</h2>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <form
          action=""
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
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
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
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pri_blue"
            />
          </div>
          <button
            type="submit"
            //   disabled={isSubmitting}
            className="mt-4 w-full p-3 bg-pri_blue text-white font-semibold rounded-md hover:bg-blue-900 disabled:bg-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
