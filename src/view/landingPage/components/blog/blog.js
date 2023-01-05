import React from "react";
import "./blog.css";
import { useSelector } from "react-redux";
import moment from "moment/moment";
const Blog = () => {
  const blogs = useSelector((state) => state.Blogs);
  const lastBlogs = blogs.slice(1);
  if (blogs.length !== 0)
    return (
      <div className="myblog" id="blog">
        <h1 className="blog_main">Amplify your knowledge</h1>
        <div className="container">
          <div className="blogs-content">
            <div className="leftBlog">
              <div className="img_blog">
                <img
                  src={
                    blogs[0]?.main_img 
                    // require("../../../../assets/imgs/products/SEO.png")
                  }
                  alt="blog iamge"
                />
              </div>
              <div className="right_side_card">
                <div className="blog_category">
                  <div className="blog_cat">{blogs[0]?.type}</div>
                  <div className="mins">8 min to read</div>
                </div>
                <div className="content_blog">
                  <h3>{blogs[0].title}</h3>
                  <p className="cont">{blogs[0]?.subcontent}</p>
                </div>

                <div className="creator">
                  <div className="avtar_blog">
                    <img
                      src={require("../../../../assets/imgs/avtar.png")}
                      alt="blog avatar"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">{blogs[0]?.user_id.name}</div>
                    <div className="date">
                      {moment(blogs[0]?.createdAt).format("D MMMM YYYY")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightBlog">
              {lastBlogs.map((blog) => (
                <div className="rightBlogContent">
                  <div className="content_blog_img">
                    <img src={blog?.main_img} alt="blog main identifier" />
                  </div>
                  <div className="box">
                    <div className="blog_category">
                      <div className="blog_cat">{blog?.type}</div>
                      <div className="mins">8 min to read</div>
                    </div>
                    <div className="content_blog">
                      <h3>{blog?.title}</h3>
                    </div>
                    <div className="creator">
                      <div className="avtar_blog">
                        <img
                          src={require("../../../../assets/imgs/avtar.png")}
                          alt="blog avatar"
                        />
                      </div>
                      <div className="desc">
                        <div className="name">{blog?.user_id.name}</div>
                        <div className="date">
                          {moment(blog?.createdAt).format("D MMMM YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="rightBlogContent">
              <div className="content_blog_img">
                <img
                  src={require("../../../../assets/imgs/blog.png")}
                  alt="blog main identifier"
                />
              </div>
              <div className="box">
                <div className="blog_category">
                  <div
                    className="blog_cat"
                    style={{ backgroundColor: "#CE2827" }}
                  >
                    Graphic Design
                  </div>
                  <div className="mins">8 min to read</div>
                </div>
                <div className="content_blog">
                  <h3>The importance of branding identity</h3>
                </div>
                <div className="creator">
                  <div className="avtar_blog">
                    <img
                      src={require("../../../../assets/imgs/avtar.png")}
                      alt="blog avatar"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Abdelrahman Zaian</div>
                    <div className="date">20 April 2022</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightBlogContent">
              <div className="content_blog_img">
                <img
                  src={require("../../../../assets/imgs/blog.png")}
                  alt="blog main identifier"
                />
              </div>
              <div className="box">
                <div className="blog_category">
                  <div className="blog_cat">Web Development</div>
                  <div className="mins">8 min to read</div>
                </div>
                <div className="content_blog">
                  <h3>WEBSITE BUILDER WILL HURT YOUR BUSINESS, HERE'S WHY</h3>{" "}
                </div>
                <div className="creator">
                  <div className="avtar_blog">
                    <img
                      src={require("../../../../assets/imgs/avtar.png")}
                      alt="blog avatar"
                    />
                  </div>
                  <div className="desc">
                    <div className="name">Abdelrahman Zaian</div>
                    <div className="date">20 April 2022</div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;
