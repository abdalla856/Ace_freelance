import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="myblog" id="blog">
      <h1 className="blog_main">Amplify your knowledge</h1>
      <div className="container">
        <div className="blogs-content">
        <div className="leftBlog">
          <div className="img_blog">
            <img
              src={require("../../../../assets/imgs/mechnical.png")}
              alt="blog iamge"
            />
          </div>
          <div className="right_side_card">

          
          <div className="blog_category">
            <div className="blog_cat">Mechincal Design</div>
            <div className="mins">8 min to read</div>
          </div>
          <div className="content_blog">
            <h3>WHY SOLIDWORKS IS THE G.O.A.T.</h3>
            <p className="cont">
              An insight into computer-aided design software from Dassault
              Systemes.
            </p>
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
        <div className="rightBlog">
          <div className="rightBlogContent">
            <div className="content_blog_img">
              <img
                src={require("../../../../assets/imgs/blog.png")}
                alt="blog main identifier"
              />
            </div>
            <div className="box">
              <div className="blog_category">
                <div className="blog_cat">Mechincal Design</div>
                <div className="mins">8 min to read</div>
              </div>
              <div className="content_blog">
                <h3>INDUSTRIAL REVOLUTIONS 4.0</h3>
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
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
