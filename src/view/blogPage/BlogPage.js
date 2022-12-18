import React from "react";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import Blogs from "./blogs/Blogs";
const BlogPage = () => {
  return (
    <div className="Blog">
      <Navbar />
      <Blogs />
      <Contact />
    </div>
  );
};

export default BlogPage;
