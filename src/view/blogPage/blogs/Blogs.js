import React, { useState } from "react";
import "./Blogs.css";
import { AiOutlineSearch } from "react-icons/ai";
import { categories } from "../../../data";
const Blogs = () => {
  const [selected, setSelected] = useState("All");
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
        <ul className="categories">
          {categories.map((categorey) => (
            <li
              onClick={() => setSelected(categorey)}
              className={selected === categorey ? "list active" : "list"}
            >
              {categorey}
            </li>
          ))}
        </ul>

        <div className="blogContent">
          <div className="firstBox">
            <img
              className="blogImg"
              src={require("../../../assets/imgs/blog1.png")}
              alt=""
            />
            <div className="blogText">
              <div className="info">
                <span>Freelancing</span>
                <span>8 min to read</span>
              </div>
              <h3>
                How to be a Freelancer - Tips and Advice for Beginners
                (Freelancing Jobs in Malaysia)
              </h3>
              <p>
                An insight into computer-aided design software from Dassault
                Systemes. <br />
                <span>
                  Tips and Advice for Beginners (Freelancing Jobs in Malaysia).
                </span>
              </p>
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
            </div>
          </div>
          <div className="SecondBox">
            <div className="secondBlogs">
              <img
                className="secondBlogsImg"
                src={require("../../../assets/imgs/blog2.png")}
                alt=""
              />
              <div className="info">
                <span>Mechanical Design</span>
                <span>8 min to read</span>
              </div>
              <h4>
                WHY SOLIDWORKS IS THE <br /> G.O.A.T.
              </h4>
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
            </div>
            <div className="secondBlogs">
              <img
                className="secondBlogsImg"
                src={require("../../../assets/imgs/blog3.png")}
                alt=""
              />
              <div className="info">
                <span style={{ background: "#7A8FFF" }}>Technology</span>
                <span>8 min to read</span>
              </div>
              <h4>SPEED OF YOUR WEBSITE IS AFFECTING YOUR AUDIENCE</h4>
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
            </div>
            <div className="secondBlogs">
              <img
                className="secondBlogsImg"
                src={require("../../../assets/imgs/blog4.png")}
                alt=""
              />
              <div className="info">
                <span style={{ backgroundColor: "#CE2625" }}>Branding</span>
                <span>8 min to read</span>
              </div>
              <h4>THE IMPORTANCE OF COLOR PALETTE AND BRANDING</h4>
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
            </div>
          </div>
          <div className="thirdBox">
            <div className="thirdBlog-main">
              <img src={require("../../../assets/imgs/blog5.png")} alt="" />
              <div className="info">
                <span>Web</span>
                <span>8 min to read</span>
              </div>
              <h2>WEBSITE BUILDER IS HURTING YOUR BUSINESS, HERE’S WHY</h2>
              <p>
                Website builder is hurting your business. here’s why and what to
                do with your current website.
              </p>
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
            </div>

            <div className="thirdBlogs">
              <div className="thirdBlog">
                <img src={require("../../../assets/imgs/blog6.png")} alt="" />
                <div className="info">
                  <span >Technology</span>
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
              </div>
              <div className="thirdBlog">
                <img src={require("../../../assets/imgs/blog7.png")} alt="" />
                <div className="info">
                  <span >Technology</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
