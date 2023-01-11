import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
// import { IoMdSend } from "react-icons/io";
import Contact from "../../landingPage/components/contact-us/contact";
import Navbar from "../../landingPage/components/navbar/Navbar";
import { useParams } from "react-router";
import { getBlogs, updateBlogViews } from "../../../actions/blogActions";
import { useSelector, useDispatch } from "react-redux";
import "./SingleBlog.css";
import moment from "moment";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import DOMPurify from "dompurify";
import draftToHtml from "draftjs-to-html";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  let [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const dispatch = useDispatch();
  let [convertedContent, setConvertedContent] = useState(
    draftToHtml(convertToRaw(editorState.getCurrentContent()))
  );

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  const blogs = useSelector((state) => state?.Blogs);
  const recentblogs = blogs.find((item) => item?._id === id);
  const reltedblogs = blogs.filter(
    (blog) => blog?.type === recentblogs?.type && blog?._id !== recentblogs?._id
  );
  console.log(reltedblogs);
  useEffect(() => {
    if (recentblogs !== undefined) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(recentblogs.content))
        )
      );
    }
  }, [recentblogs]);
  useEffect(() => {
    let currentContentAsHTML = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setConvertedContent(currentContentAsHTML);
  }, [editorState]);
  useEffect(() => {
    dispatch(updateBlogViews(recentblogs?._id, recentblogs?.views));
  }, [recentblogs?._id]);
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      <Navbar />
      <div className="single-blog">
        <div className="container">
          <div className="info">
            <span className="info-one">{recentblogs?.type}</span>
            <span className="info-two">Tips</span>
            <span className="info-one ">8 min to read</span>
          </div>
          <h1 className="blog-title">{recentblogs?.title}</h1>
          <p>{recentblogs?.subcontent}</p>
          <div className="creator">
            <div className="avtar_blog">
              <img
                src={require("../../../assets/imgs/avtar.png")}
                alt="blog avatar"
              />
            </div>
            <div className="desc">
              <div className="name">{recentblogs?.user}</div>
              <div className="date">
                {" "}
                {moment(recentblogs?.createdAt).format("D MMMM YYYY")}
              </div>
            </div>
          </div>
          <div className="image-box">
            <img
              src={require("../../../assets/imgs/singleBlog-1.png")}
              alt=""
            />
            {/* <p>Image Courtesy of Laura Davidson Via Pinterest</p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content.
            </p> */}
          </div>

          {/* <div className="first-part">
            <h1 className="heading">introduction</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content.
            </p>
            <div className="image-box">
              <img
                src={require("../../../assets/imgs/singleBlog-2.png")}
                alt=""
              />
              <p>Image Courtesy of Laura Davidson Via Pinterest</p>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. In publishing
                and graphic design, Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. In publishing and graphic
                design, Lorem ipsum is a placeholder text commonly used to
                demonstrate the visual form of a document or a typeface without
                relying on meaningful content.
              </p>
            </div>
          </div>
          <div className="second-part">
            <h1 className="heading">INSIGHTS ON ALGORITHM</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content.
            </p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. In publishing and graphic design,
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
          </div>

          <div className="third-part">
            <h1 className="heading">Freelancing meaning</h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content.
            </p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content. In publishing and graphic design,
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </p>
          </div> */}

          <div
            className="preview"
            key={new Date().getTime()}
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
          ></div>

          <div className="keys">
            <div className="keywords">
              <span>Freelancing</span>
              <span>Keywords</span>
              <span>Algorithm</span>
              <span>Words</span>
            </div>
            <div className="copy">
              <span className="copy-link">
                <FiCopy /> Copy link
              </span>
              <div className="boxs">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          {/* <div className="comment-section">
            <div className="type-comment">
              <input type="text" placeholder="Type your comment" />
              <span>
                <IoMdSend />
              </span>
            </div>
            <div className="num-comments">39 comments</div>
            <div className="comments">
              <div className="comment">
                <img
                  className="comment-image"
                  src={require("../../../assets/imgs/comment-img1.png")}
                  alt=""
                />
                <div className="text">
                  <div className="info">
                    <span className="name">Andrew Omar</span>
                    <span className="date">20 April 2022</span>
                  </div>
                  <p className="comment-text">
                    Never I have seen any article that discussed a topic this
                    deep and detailed. The most write up content so far. I
                    absolutely agree with the writer and looking forward to read
                    more article from him
                  </p>
                </div>
              </div>
              <div className="comment">
                <img
                  className="comment-image"
                  src={require("../../../assets/imgs/comment-img-2.png")}
                  alt=""
                />
                <div className="text">
                  <div className="info">
                    <span className="name">Andrew Omar</span>
                    <span className="date">20 April 2022</span>
                  </div>
                  <p className="comment-text">
                    Never I have seen any article that discussed a topic this
                    deep and detailed. The most write up content so far. I
                    absolutely agree with the writer and looking forward to read
                    more article from him
                  </p>
                </div>
                <div className="replay">
                  <img
                    className="replay-icon"
                    src={require("../../../assets/imgs/replay-icon.png")}
                    alt=""
                  />
                  <div className="comment">
                    <img
                      className="comment-image"
                      src={require("../../../assets/imgs/replay-img.png")}
                      alt=""
                    />
                    <div className="text">
                      <div className="info">
                        <span className="name">Andrew Omar</span>
                        <span className="date">20 April 2022</span>
                      </div>
                      <p className="comment-text">
                        Never I have seen any article that discussed a topic
                        this deep and detailed. The most write up content so
                        far. I absolutely agree with the writer and looking
                        forward to read more article from him
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="related-posts">
            <h1 className="heading">related posts</h1>
            <div className="posts">
              {reltedblogs.length > 3
                ? reltedblogs.slice(0, 3).map((blog) => {
                    return (
                      <Link to={`../blog/${blog._id}`}>
                        <div className="post">
                          <div className="img-post">
                            <img src={blog?.main_img} alt="post iamge" />
                          </div>
                          <div className="post_category">
                            <div className="blog_cat">{blog?.type}</div>
                            <div className="date">8 min to read</div>
                          </div>
                          <div className="content_blog">
                            <h3>{blog?.title}</h3>
                          </div>
                          <div className="creator">
                            <div className="avtar_blog">
                              <img
                                src={require("../../../assets/imgs/avtar.png")}
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
                        ;
                      </Link>
                    );
                  })
                : reltedblogs.map((blog) => {
                    return (
                      <Link to={`../blog/${blog._id}`}>
                        <div className="post">
                          <div className="img-post">
                            <img src={blog?.main_img} alt="post iamge" />
                          </div>
                          <div className="post_category">
                            <div className="blog_cat">{blog?.type}</div>
                            <div className="date">8 min to read</div>
                          </div>
                          <div className="content_blog">
                            <h3>{blog?.title}</h3>
                          </div>
                          <div className="creator">
                            <div className="avtar_blog">
                              <img
                                src={require("../../../assets/imgs/avtar.png")}
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
                      </Link>
                    );
                  })}
              {/* <div className="post">
                <div className="img-post">
                  <img
                    src={require("../../../assets/imgs/mechnical.png")}
                    alt="post iamge"
                  />
                </div>
                <div className="post_category">
                  <div className="blog_cat">Mechincal Design</div>
                  <div className="date">8 min to read</div>
                </div>
                <div className="content_blog">
                  <h3>WHY SOLIDWORKS IS THE G.O.A.T.</h3>
                </div>
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
              <div className="post"> */}
              {/* <div className="img-post">
                  <img
                    src={require("../../../assets/imgs/mechnical.png")}
                    alt="post iamge"
                  />
                </div>
                <div className="post_category">
                  <div className="blog_cat">Mechincal Design</div>
                  <div className="date">8 min to read</div>
                </div>
                <div className="content_blog">
                  <h3>WHY SOLIDWORKS IS THE G.O.A.T.</h3>
                </div>
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
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default SingleBlog;
