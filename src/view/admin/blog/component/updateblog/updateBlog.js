import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// import SideBar from "../../../../../shared/sidenav/sideNav";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SideBar from "../../../../../shared/sidenav/sideNav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateBlog } from "../../../../../actions/blogActions";
import { getBlogbyId, getPhotoPath } from "../../../../../actions/blogActions";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../addblog/addBlog.css";
import Moment from "moment";

const UpdateBlog = () => {
  //Decalre Sections
  const { id } = useParams();
  const navigate = useNavigate();
  let [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  let [convertedContent, setConvertedContent] = useState("");
  const dispatch = useDispatch();
  const date = new Date();
  const [blog, setBlog] = useState({
    _id: id,
    title: "",
    main_img: "",
    type: "",
    content: {},
    subcontent: "",
    updatedAt: Date.now(),
  });

  //Functions Sections
  const handleEditorChange = (state) => {
    setEditorState(state);
    setBlog({
      ...blog,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    
    });
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setConvertedContent(currentContentAsHTML);
    setBlog({
      ...blog,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    
    });
  };
  const createMarkup = (html) => {
    return {
      __html: html,
    };
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const contentBlock = htmlToDraft(value);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
      setBlog({
        ...blog,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      
      });
    } else {
      setEditorState(EditorState.createEmpty());
    }

  };

  const uploadImageCallBack = async (file) => {
    // console.log(file.target.file[0])
    var path = await dispatch(getPhotoPath(file));
    var pathImage = path.data.path;
    console.log(pathImage);
    const pp = "http://localhost:5000/" + pathImage.replace(/\\/g, "/");

    return new Promise((resolve, reject) => {
      resolve({ data: { link: pp } });
    });
  };

  const handleMainImg = async (e) => {
    var path = await dispatch(getPhotoPath(e.target.files[0]));
    var pathImage = path.data.path;
    const pp = "http://localhost:5000/" + pathImage.replace(/\\/g, "/");

    setBlog({ ...blog, main_img: pp });
  };

  const formHandler = (e) => {
    const value = e.target.value;

    setBlog({
      ...blog,
      [e.target.name]: value,
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      updatedAt: Date.now(),
    });
    console.log()
  };

  const Submitblog = (e) => {
    // e.preventDefault();


    dispatch(updateBlog(blog));
    navigate("/admin_blog");
  };

  useEffect(() => {
    dispatch(getBlogbyId(id));
    
  }, [dispatch, id]);
  const blogState = useSelector((state) => {
    var blogs = state.Blogs;

    blogs = blogs.filter((blog) => blog._id === id);
    

    return blogs[0];
  });

  useEffect(() => {
    if (blogState !== undefined) {
      setBlog({ ...blog,...blogState });
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(blogState.content))
        )
      );
    }
  }, [blogState ]);

  if (blogState !== undefined)
    return (
      <>
        <div className="dash_addblog" id="dash">
          <div className="main_dash_comp">
            <SideBar />
            <div className="container" id="main">
              <h2>Update Blog</h2>

              <form className="add_section_all">
                <div className="add_section">
                  <label className="font-weight-bold">
                    {" "}
                    Title <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="title_input"
                    onChange={formHandler}
                    placeholder={blogState.title || "Title"}
                  />
                  <div>
                    <label className="font-weight-bold">
                      {" "}
                      Main Picture <span className="required"> * </span>{" "}
                    </label>
                    <input
                      type="file"
                      name="main_image"
                      className="image_input"
                      accept="image/*"
                      onChange={handleMainImg}
                    />
                  </div>
                  <div>
                    <label className="font-weight-bold">
                      {" "}
                      Criteria <span className="required"> * </span>{" "}
                    </label>
                    <select
                      className="criteri_list"
                      name="type"
                      onChange={formHandler}
                      value={"#"}
                    >
                      <option value="#" disabled>
                        {blog.type || "Select Criteria:"}
                      </option>
                      <option value="general">General</option>
                      <option value="web">Web Development</option>
                      <option value="graphic">Graphic Design</option>
                      <option value="mech">Mechinal Design</option>
                      <option value="markting">Masrkting</option>
                    </select>
                  </div>
                  <div
                    style={{ marginTop: "20px" }}
                    className="font-weight-bold"
                  >
                    <label>
                      Sub Content <span className="required"> * </span>{" "}
                    </label>
                    <input
                      type="text"
                      name="subcontent"
                      className="title_input"
                      onChange={formHandler}
                      placeholder={blogState.type || "Sub_Content"}
                    />
                  </div>
                </div>
                <label className="font-weight-bold">
                  {" "}
                  Description <span className="required"> * </span>{" "}
                </label>
                <div className="editor_section">
                  <Editor
                    required
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={handleEditorChange}
                    toolbar={{
                      nputAccept:
                        "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                      image: {
                        uploadEnabled: true,
                        uploadCallback: uploadImageCallBack,
                        previewImage: true,
                        alt: { present: true, mandatory: true },
                      },
                    }}
                  />
                </div>
                <div className="code_source">
                  <h2>Code Source</h2>
                  <textarea
                    type="text"
                    value={
                      draftToHtml(
                        convertToRaw(editorState.getCurrentContent())
                      ) || ""
                    }
                    onChange={handleChange}
                  />
                </div>
                <div className="previewSection">
                  <h2>Preview</h2>
                  <div
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(convertedContent)}
                  ></div>
                </div>
                <div className="submit_blog_btn">
                  <input
                    className="button"
                    type="submit"
                    value="Update"
                    onClick={Submitblog}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default UpdateBlog;
