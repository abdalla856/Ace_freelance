import React, { useEffect } from "react";
import "./blogList.css";
import Moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBlogs,
  deleteblogbyId,
} from "../../../../../actions/blogActions";
const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state.Blogs);



  function deleteBlogHandler(id) {
    // const _id ={"id":id}
    dispatch(deleteblogbyId(id ));
  }

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
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{Moment(blog.createdAt).format("DD/MM/yy hh:mm A")}</td>
              <td>{Moment(blog.updatedAt).format("DD/MM/yy hh:mm A")}</td>
              <td>{blog.views}</td>
              <td className="action_btns">
                <Link to={`/update_blog/${blog._id}`} >


                <button
                  style={{ backgroundColor: "green" }}
                  
                >
                  Edit
                </button>
                </Link>
                <button style={{ backgroundColor: "red" }}
                onClick={()=>deleteBlogHandler(blog._id)}
                >Delete</button>
              </td>
            </tr>
          ))}
          <Link to="/add_blog">
            <button className="add_man">Add New Blog</button>
          </Link>
        </table>
      </div>
    </>
  );
};

export default BlogList;
