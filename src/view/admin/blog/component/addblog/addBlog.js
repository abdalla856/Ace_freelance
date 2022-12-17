import React, { useState } from "react";
import { useNavigate } from "react-router";
// import SideBar from "../../../../../shared/sidenav/sideNav";
import {
  EditorState,
  convertToRaw,
  // convertFromRaw,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SideBar from "../../../../../shared/sidenav/sideNav";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { AddNewBlog, getPhotoPath } from "../../../../../actions/blogActions";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./addBlog.css";

const AddBlog = () => {
  //Decalre Sections
  const navigate = useNavigate();
  let [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  let [convertedContent, setConvertedContent] = useState("");
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    title: "",
    main_image: "",
    type: "",
    content: {},
    subcontent: "",
  });

  //Functions Sections
  const handleEditorChange = (state) => {
    setEditorState(state);
    setBlog({
      ...blog , content : JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    })
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setConvertedContent(currentContentAsHTML);
    
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
      setEditorState(EditorState.createWithContent(contentState))
      setBlog(
        {
          ...blog,
          content : JSON.stringify(convertToRaw(editorState.getCurrentContent()))

          
        }
      )
    } else {
      setEditorState(EditorState.createEmpty());
      setBlog(
        {
          ...blog,
          content : JSON.stringify(convertToRaw(editorState.getCurrentContent()))

          
        }
      )
    }
  };

  const uploadImageCallBack = async (file) => {


    // console.log(file.target.file[0])
    var path = await dispatch(getPhotoPath(file));
    var pathImage = path.data.path;
    console.log(pathImage);
    const pp = "http://localhost:5000/" + pathImage.replace(/\\/g, "/");
    console.log(pp);
    return new Promise((resolve, reject) => {
      resolve({ data: { link: pp } });
    });
  };

  const handleMainImg = async (e) => {
    var path = await dispatch(getPhotoPath(e.target.files[0]));
    var pathImage = path.data.path;
    console.log(pathImage);
    const pp = "http://localhost:5000/" + pathImage.replace(/\\/g, "/");

    setBlog({ ...blog, main_image: pp });
  };

  const formHandler = (e) => {
    const value = e.target.value;

    setBlog({
      ...blog,
      [e.target.name]: value,
    });
    console.log(blog);
  };

  const Submitblog = (e) => {
    e.preventDefault();
    if (
      convertToRaw(editorState.getCurrentContent()).blocks.every(
        (b) => b.text.trim() === ""
      ) ||
      blog.title.length === 0 ||
      blog.subcontent.length === 0 ||
      blog.type.length === 0 ||
      blog.main_image.length === 0
    ) {
      alert("All the inputs required *");
    } else {
      setBlog({
        ...blog,
        
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      });

      dispatch(AddNewBlog(blog));
      navigate("/admin_blog");
    }
  };

  //Html Code
  return (
    <>
      <div className="dash_addblog" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>New Blog</h2>

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
                  placeholder="Title"
                  required
                  onChange={formHandler}
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
                    required
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
                  >
                    <option value="#" disabled selected="selected">
                      Select Criteria:
                    </option>
                    <option value="general">General</option>
                    <option value="web">Web Development</option>
                    <option value="graphic">Graphic Design</option>
                    <option value="mech">Mechinal Design</option>
                    <option value="markting">Masrkting</option>
                  </select>
                </div>
                <div style={{ marginTop: "20px" }} className="font-weight-bold">
                  <label>
                    Sub Content <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="text"
                    name="subcontent"
                    className="title_input"
                    placeholder="Sub_Content"
                    required
                    onChange={formHandler}
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
                  value="Add"
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

export default AddBlog;
