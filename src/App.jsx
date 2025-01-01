import React from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./Pages/DetailPage";
import Login from "./Pages/Admin/Login";
import Dashboard from "./Pages/Admin/Dashboard";
import CreatePost from "./Pages/Admin/CreatePost";
import PrivateRoute from "./Components/PrivateRoute";
import UpdatePost from "./Pages/Admin/updatePost";
import supabase from "./config/supabaseClient";

const App = () => {
  console.log(supabase);

  return (
    <div className="mx-0 md:mx-16 lg:mx-32">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/project" element={<DetailPage />} />
          <Route path="/about/admin" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/about/admin/dashboard" element={<Dashboard />} />
            <Route path="/about/admin/create-post" element={<CreatePost />} />
            <Route
              path="/about/admin/update-post/:postId"
              element={<UpdatePost />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
