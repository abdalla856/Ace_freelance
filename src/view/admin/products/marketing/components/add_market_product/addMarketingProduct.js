import React, { useState } from "react";

import "./addMarketingProduct.css";
import { AddNewProduct } from "../../../../../../actions/productAction";
import SideBar from "../../../../../../shared/sidenav/sideNav";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const AddMarketingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filesUploads, setFilesUploads] = useState([]);
  const [filesPreview, setFilesPreview] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    original_discount: "",
  });
  const setFiles = (e) => {
    if (e.target.files.length !== 0 && filesUploads.length <= 8) {
      let ImagesArray = Object.entries(e.target.files).map((e) =>
        URL.createObjectURL(e[1])
      );
      setFilesPreview([...filesPreview, ...ImagesArray]);
      let ImagesUploadedArray = e.target.files;
      setFilesUploads(ImagesUploadedArray);
    }
    console.log(filesPreview);
  };
  const deleteimg = (e) => {
    console.log(filesUploads);

    const s = filesPreview.filter((item, index) => index !== e);
    const supload = Array.from(filesUploads).filter(
      (item, index) => index !== e
    );
    console.log(supload);
    console.log(s);
    setFilesPreview(s);
    setFilesUploads(supload);
    // console.log(filesPreview);
  };
  const formHandler = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const SubmitProduct = (e) => {
    e.preventDefault();
    const fromdata = new FormData();
    Array.from(filesUploads).forEach((image) => {
      fromdata.append("product_imgs", image);
    });

    fromdata.append("title", product.title);
    fromdata.append("description", product.description);
    fromdata.append("price", product.price);
    fromdata.append("original_discount", product.original_discount);
    fromdata.append("Cateogry", "Marketing");

    dispatch(AddNewProduct(fromdata));
    navigate("/marketing_add_product");
  };

  return (
    <>
      <div className="dash_addblog" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>New Product</h2>

            <form className="add_section_all">
              <div className="add_section">
                <label className="font-weight-bold">
                  {" "}
                  Name <span className="required"> * </span>{" "}
                </label>
                <input
                  type="text"
                  name="title"
                  className="title_input"
                  placeholder="Title"
                  required
                  onChange={formHandler}
                />
                <div style={{ marginTop: "0px" }} className="font-weight-bold">
                  <label>
                    Discription <span className="required"> * </span>{" "}
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    className="textarea_input"
                    placeholder="Product Description"
                    required
                    onChange={formHandler}
                  />
                </div>
                <div style={{ marginTop: "20px" }} className="font-weight-bold">
                  <label>
                    Price<span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="price"
                    className="title_input"
                    placeholder="Price"
                    required
                    onChange={formHandler}
                  />
                </div>
                <div style={{ marginTop: "20px" }} className="font-weight-bold">
                  <label>
                    Gernal Discount <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="number"
                    name="original_discount"
                    className="title_input"
                    placeholder="Discount"
                    min="0"
                    required
                    onChange={formHandler}
                  />
                </div>
                <div>
                  <label className="font-weight-bold">
                    {" "}
                    Pictures <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="file"
                    multiple
                    name="main_image"
                    className="image_input"
                    accept="image/*"
                    required
                    disabled={filesPreview.length === 8}
                    onChange={(e) => setFiles(e)}
                  />
                </div>
                <br />
                <div>
                  <label className="font-weight-bold"> Images Preview</label>
                  <div className="images_preview">
                    {filesPreview.map((img, index) => (
                      <>
                        <div className="img_preview_web">
                          <img src={img} alt="" />
                          <button
                            className="delete_img_product_btn"
                            onClick={(e) => {
                              e.preventDefault();
                              deleteimg(index);
                            }}
                          >
                            <FaRegTimesCircle className="colse_icon_img_preview" />{" "}
                            Delete
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className="submit_blog_btn">
                <input
                  className="button"
                  type="submit"
                  value="Add"
                  onClick={SubmitProduct}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddMarketingPage;
