import React from "react";

import "./blogPageAdmin.css";

import SideBar from "../../../shared/sidenav/sideNav";
import BlogList from "./component/bloglist/blogList";
const BlogPageAdminPage = () => {
  return (
    <>
      <div className="dash_blog" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h1>Blogs </h1>
            <BlogList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPageAdminPage;
