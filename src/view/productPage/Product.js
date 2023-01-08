import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import "./product.css";
import { useParams } from "react-router";
import {
  getAllWebProducts,
  getAllMarketingProducts,
  getAllMechanicalProducts,
  getAllGarphicProducts,
} from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
const Product = () => {
  const { service, id } = useParams();
  const [services, setServices] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (service === "web") {
      setServices("Web Technology");
      dispatch(getAllWebProducts());
    } else if (service === "marketing") {
      setServices("Marketing& Media");
      dispatch(getAllMarketingProducts());
    } else if (service === "graphic") {
      setServices("Graphic Desgin");
      dispatch(getAllGarphicProducts());
    } else if (service === "mech") {
      setServices("Mechanical Design");
      dispatch(getAllMechanicalProducts());
    }
  }, [service]);
  const products = useSelector((state) => state.Products);
  const recentpoduct = products.find((item) => item?._id === id);
  const reltedproducts = products.filter(
    (blog) =>
      blog?.type === recentpoduct?.type && blog?._id !== recentpoduct?._id
  );
  return (
    <>
      <Navbar />
      <div className="single-product">
        <div className="sm-nav">
          <div className="container">
            <span className="location">
              Home{">"}Services{">"}Graphic design{">"}{recentpoduct?.title}
            </span>
            <div className="cart">
              <AiOutlineShoppingCart />
              <span>Cart[0]</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="theProduct">
            <img src={recentpoduct?.images[0]} alt="product" />
            <div className="product-details">
              <h3 className="product-name">{recentpoduct?.title}</h3>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h4 className="product-price">RM {recentpoduct?.price}</h4>
              <div className="qty">
                <MdOutlineKeyboardArrowUp />
                <span className="number">1</span>
                <MdOutlineKeyboardArrowDown />
              </div>
              <div className="actions">
                <button className="add-cart">add to cart</button>
                <button className="buy">buy now</button>
              </div>
              <div className="how-to-buy">
                <h5>product details</h5>
                {recentpoduct?.description}
              </div>
            </div>
          </div>
          <div className="product-ratings">
            <h3>product ratings</h3>
            <span className="text-rate">4.5 out of 5</span>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="rate">
              <img
                src={require("../../assets/imgs/comment-img1.png")}
                alt="rate-img"
              />
              <div className="rate-content">
                <h4 className="rate-name">amirul fahmi</h4>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="rate-date">2022-04-27 | 14:50</p>
                <p className="rate-desc">
                  Fast delivery File pun diterima dgn cepattt 👍👍👍 Memudahkan
                  kerja dan menjimatkan masa Boleh repeat order lagi utk produk
                  lain MANTAPPPP 💯
                </p>
              </div>
            </div>
            <div className="rate">
              <img
                src={require("../../assets/imgs/comment-img1.png")}
                alt="rate-img"
              />
              <div className="rate-content">
                <h4 className="rate-name">amirul fahmi</h4>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="rate-date">2022-04-27 | 14:50</p>
                <p className="rate-desc">
                  Fast delivery File pun diterima dgn cepattt 👍👍👍 Memudahkan
                  kerja dan menjimatkan masa Boleh repeat order lagi utk produk
                  lain MANTAPPPP 💯
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="related-products">
          <h2 className="related-title">related products</h2>
          <div className="container">
            <div className="product-cards">
              {reltedproducts.length > 3
                ? reltedproducts.slice(0, 3).map((product) => {
                    return (
                      <div className="product">
                        <img src={product?.images[0]} alt="" />
                        <div className="product-details">
                          <div className="product-info">
                            <h3 className="name">{product?.title}</h3>
                            <span className="price">RM {product?.price}</span>
                          </div>
                          <div className="solds">{product?.buy} Solds</div>
                        </div>
                      </div>
                    );
                  })
                : reltedproducts.map((product) => {
                    return (
                      <div className="product">
                        <img src={product?.images[0]} alt="" />
                        <div className="product-details">
                          <div className="product-info">
                            <h3 className="name">{product?.title}</h3>
                            <span className="price">RM {product?.price}</span>
                          </div>
                          <div className="solds">{product?.buy} Solds</div>
                        </div>
                      </div>
                    );
                  })}

              {/* <div className="product">
                <img
                  src={require("../../assets/imgs/businessCard.png")}
                  alt=""
                />
                <div className="product-details">
                  <div className="product-info">
                    <h3 className="name">Business Card</h3>
                    <span className="price">RM 40</span>
                  </div>
                  <div className="solds">301 Solds</div>
                </div>
              </div>
              <div className="product">
                <img
                  src={require("../../assets/imgs/businessCard.png")}
                  alt=""
                />
                <div className="product-details">
                  <div className="product-info">
                    <h3 className="name">Business Card</h3>
                    <span className="price">RM 40</span>
                  </div>
                  <div className="solds">301 Solds</div>
                </div>
              </div>
              <div className="product">
                <img
                  src={require("../../assets/imgs/businessCard.png")}
                  alt=""
                />
                <div className="product-details">
                  <div className="product-info">
                    <h3 className="name">Business Card</h3>
                    <span className="price">RM 40</span>
                  </div>
                  <div className="solds">301 Solds</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Product;
