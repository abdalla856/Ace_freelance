import React, { useState } from "react";
import "./Blogs.css";
import { AiOutlineSearch } from "react-icons/ai";
// import { categories } from "../../../data";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// function Blogs() {
const Blogs = () => {
  // const [selected, setSelected] = useState("All");

  const blogs = useSelector((state) => state.Blogs);
  const secondblogs = blogs.slice(1, 4);
  const thirdblogs = blogs.slice(6);

  return (
    <div className="blogs">
      <div className="container">
        <div className="blogTitle">
          <h1>AMPLIFY</h1>
          <h3>YOUR KNOWLEDGE</h3>
        </div>
        <div className="searchInput">
          <AiOutlineSearch />
          <input type="text" placeholder="Search blog" />
        </div>
        {/* <ul className="categories">
          {categories.map((categorey) => (
            <li
              onClick={() => setSelected(categorey)}
              className={selected === categorey ? "list active" : "list"}
            >
              {categorey}
            </li>
          ))}
        </ul> */}

        <div className="blogContent">
          <Link to={`../blog/${blogs[0]?._id}`}>
            <div className="firstBox">
              <div className="imageBox">
                <img className="blogImg" src={blogs[0]?.main_img} alt="" />
              </div>

              <div className="blogText">
                <div className="info">
                  <span>{blogs[0]?.type}</span>
                  <span>8 min to read</span>
                </div>
                <h3>{blogs[0]?.title}</h3>
                <p>
                  {blogs[0]?.subcontent} <br />
                  {/* <span>
                  Tips and Advice for Beginners (Freelancing Jobs in Malaysia).
                </span> */}
                </p>
                <div className="creator">
                  <div className="avtar_blog">
                    <img
                      src={require("../../../assets/imgs/avtar.png")}
                      alt="blog avatar"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">{blogs[0]?.user_id.name}</div>
                    <div className="date">
                      {" "}
                      {moment(blogs[0]?.createdAt).format("D MMMM YYYY")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="SecondBox">
            {secondblogs.map((blog) => {
              return (
                <Link to={`../blog/${blog._id}`}>
                  <div className="secondBlogs">
                    <img
                      className="secondBlogsImg"
                      src={blog?.main_img}
                      alt=""
                    />
                    <div className="info">
                      <span>{blog?.type}</span>
                      <span>8 min to read</span>
                    </div>
                    <h4>{blog?.title}</h4>
                    <div className="creator">
                      <div className="avtar_blog">
                        <img
                          src={require("../../../assets/imgs/avtar.png")}
                          alt="blog avatar"
                        />
                      </div>
                      <div className="desc">
                        <div className="name">{blog?.name}</div>
                        <div className="date">
                          {" "}
                          {moment(blog?.createdAt).format("D MMMM YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="thirdBox">
            <Link to={`../blog/${blogs[4]?._id}`}>
              <div className="thirdBlog-main">
                <img src={blogs[4]?.main_img} alt="" />
                <div className="info">
                  <span>{blogs[4]?.type}</span>
                  <span>8 min to read</span>
                </div>
                <h2>{blogs[4]?.title}</h2>
                <p>{blogs[4]?.title}</p>
                <div className="creator">
                  <div className="avtar_blog">
                    <img
                      src={require("../../../assets/imgs/avtar.png")}
                      alt="blog avatar"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">{blogs[4]?.user_id.name}</div>
                    <div className="date">
                      {" "}
                      {moment(blogs[4]?.createdAt).format("D MMMM YYYY")}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="thirdBlogs">
              {thirdblogs.map((blog) => {
                return (
                <Link to={`../blog/${blog._id}`}>

                  <div className="thirdBlog">
                    <img src={blog?.main_img} alt="" />
                    <div className="info">
                      <span>{blog?.type}</span>
                      <span>8 min to read</span>
                    </div>
                    <h3>{blog?.title}</h3>
                    <div className="creator">
                      <div className="avtar_blog">
                        <img
                          src={require("../../../assets/imgs/avtar.png")}
                          alt="blog avatar"
                        />
                      </div>
                      <div className="desc">
                        <div className="name">{blog?.name}</div>
                        <div className="date">
                          {" "}
                          {moment(blog?.createdAt).format("D MMMM YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                );
              })}
              {/* <div className="thirdBlog">
                <img src={require("../../../assets/imgs/blog7.png")} alt="" />
                <div className="info">
                  <span>Technology</span>
                  <span>8 min to read</span>
                </div>
                <h3>WHY SOLIDWORKS IS THE G.O.A.T.</h3>
                <div className="creator">
                  <div className="avtar_blog">
                    <img
                      src={require("../../../assets/imgs/avtar.png")}
                      alt="blog avatar"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Abdelrahman Zaian</div>
                    <div className="date">20 April 2022</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
