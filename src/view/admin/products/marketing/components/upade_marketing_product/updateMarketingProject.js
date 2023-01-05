import React, { useState, useEffect } from "react";

import "./updateMarketingProject.css";
import SideBar from "../../../../../../shared/sidenav/sideNav";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import {
  UpdateProduct,
  getAllMarketingProducts,
} from "../../../../../../actions/productAction";
const UpdateMarketingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filesUploads, setFilesUploads] = useState([]);
  const [filesPreview, setFilesPreview] = useState([]);
  const [productdata, setProductData] = useState([]);
  const [product, setProduct] = useState({
    _id: id,
    title: "",
    description: "",
    price: "",
    gernal_dsicount: 0,
    images: [],
  });
  const setFiles = (e) => {
    if (e.target.files.length !== 0 && filesUploads.length <= 8) {
      let ImagesArray = Object.entries(e.target.files).map((e) =>
        URL.createObjectURL(e[1])
      );
      console.log(ImagesArray);
      setFilesPreview([...filesPreview, ...ImagesArray]);
      console.log(filesPreview);
      let ImagesUploadedArray = e.target.files;
      setFilesUploads(ImagesUploadedArray);
    }
    console.log(filesPreview);
  };
  const deleteimg = (e) => {
    const s = filesPreview.filter((item, index) => index !== e);
    const supload = Array.from(filesUploads).filter(
      (item, index) => index !== e
    );
    setFilesPreview(s);
    setFilesUploads(supload);
    setProduct({ ...product, images: s });
  };
  const formHandler = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const SubmitProduct = (e) => {
    e.preventDefault();
    console.log(product);
    const fromdata = new FormData();
    Array.from(filesUploads).forEach((image) => {
      fromdata.append("product_imgs", image);
    });
    Array.from(filesPreview).forEach((image) => {
      fromdata.append("images", image);
    });
    fromdata.append("id", product._id);
    fromdata.append("title", product.title);
    fromdata.append("description", product.description);
    fromdata.append("price", product.price);
    fromdata.append("gernal_dsicount", product.gernal_dsicount);

    dispatch(UpdateProduct(fromdata));
    navigate("/marketing_add_product");
  };
  useEffect(() => {
    dispatch(getAllMarketingProducts());
  }, [dispatch]);

  const data = useSelector((state) => {
    const products = state.Products.find((product) => product._id === id);
    return { data: products, images: products?.images };
  });
  useEffect(() => {
    setFilesPreview(data.images || []);
    setProductData(data.data || {});
    setProduct({ ...productdata });
  }, [data.data]);

  return (
    <>
      <div className="dash_addblog" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>Update Product</h2>

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
                  placeholder={productdata.title || ""}
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
                    placeholder={productdata.description || ""}
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
                    placeholder={productdata.price + "RM" || 0}
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
                    name="gernal_dsicount"
                    className="title_input"
                    placeholder={productdata.gernal_dsicount + "%" || 0}
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
                  value="Update"
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
export default UpdateMarketingPage;
