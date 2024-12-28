import React, { useEffect, useState } from "react";
import AdminSideNav from "../../Components/AdminSideNav";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts");
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  return (
    <div className="flex">
      <div className="">
        <AdminSideNav />
      </div>
      <div className=" flex-1 p-6 items-center lg:ml-64">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Dashboard
        </h2>

        {/* Table */}
        <table className="min-w-full bg-gray-100  rounded-xl shadow-md ">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left border-r border-gray-300  text-sm font-medium text-gray-700 bg-gray-200 rounded-tl-xl w-2/4">
                Title
              </th>
              <th className="py-2 px-4 text-left border-r border-gray-300 text-sm font-medium text-gray-700 bg-gray-200 w-1/4">
                Date Uploaded
              </th>
              <th className="py-2 px-4 text-left  text-sm font-medium text-gray-700 bg-gray-200 rounded-tr-xl w-1/4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 text-sm text-gray-800  border-r border-gray-300 truncate max-w-xs">
                  {post.title}
                </td>
                <td className="py-2 px-4 text-sm text-gray-600  border-r border-gray-300">
                  {new Date(post.createdAt).toLocaleDateString() || "N/A"}
                </td>
                <td className="py-2 px-4 text-sm space-x-4 ">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEdit(post._id)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20h9M14.828 3.172a4 4 0 015.657 5.657L6 16V12l8.828-8.828z"
                      />
                    </svg>
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
