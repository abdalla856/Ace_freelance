import React from "react";
import "./blogList.css";
import Moment from "moment";
import {Link} from "react-router-dom";
const BlogList = () => {
  return (
    <>
      <div className="bloglist">
        <table className="blog_table">
          <tr>
            <th>Blog Name</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Views</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>G.O.A.T For Everything</td>
            <td>{Moment(Date.now()).format("DD/MM/yy hh:mm")}</td>
            <td>{Moment(Date.now()).format("DD/MM/yy hh:mm")}</td>
            <td>10</td>
            <td className="action_btns">
              <button style={{ backgroundColor: "green" }}>Edit</button>
              <button style={{ backgroundColor: "red" }}>Delete</button>
            </td>
          </tr>
          <Link to='/add_blog'>
          <button className="add_man">Add New Blog</button>
          </Link>
        </table>
      </div>
    </>
  );
};

export default BlogList;
