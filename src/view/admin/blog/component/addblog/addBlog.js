import React, { useState } from "react";

// import SideBar from "../../../../../shared/sidenav/sideNav";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import SideBar from "../../../../../shared/sidenav/sideNav";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./addBlog.css";
const AddBlog = () => {
  // let history = useHistory();
  let [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  let [convertedContent, setConvertedContent] = useState("");

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setConvertedContent(currentContentAsHTML);
    console.log(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    return {
      __html: html,
    };
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    const contentBlock = htmlToDraft(value);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  };

  const uploadImageCallBack = (file) => {
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };

    // setFile(imageObject)
    return new Promise((resolve, reject) => {
      resolve({ data: { link: imageObject.localSrc } });
    });
  };

  return (
    <>
      <div className="dash_addblog" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>New Blog</h2>

            {/* <div className="form-group col-md-12 editor"> */}
            <div className="add_section_all">
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
                  accept ="image/*"
                  required
                />
                </div>
              </div>
              <label className="font-weight-bold">
                {" "}
                Description <span className="required"> * </span>{" "}
              </label>
              <div className="editor_section">
                <Editor
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
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
