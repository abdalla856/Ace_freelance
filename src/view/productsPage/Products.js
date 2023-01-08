import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import "./products.css";
import { useParams } from "react-router";
import {
  getAllWebProducts,
  getAllMarketingProducts,
  getAllMechanicalProducts,
  getAllGarphicProducts,
} from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Products = () => {
  const { service } = useParams();
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
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="sm-nav">
          <div className="container">
            <span className="location">Home{">"}Services{">"}{services}</span>
            <div className="cart-icon">
              <AiOutlineShoppingCart />
              <span>Cart[0]</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-title">
            <h3>Creating the best visuals</h3>
            <h1>{services}</h1>
            <h3>by Ace Freelancing</h3>
          </div>
          <div className="product-cards">
            {products.map((product) => {
              return (
                <Link to ={`${product._id}`}>
                  <div className="product">
                    <div className="product-slider-img">
                      <img src={product?.images[0]} alt="" />
                      <img src={product?.images[0]} alt="" />
                    </div>
                    <div className="product-details">
                      <div className="product-info">
                        <h3 className="name">{product.title}</h3>
                        <span className="price">RM {product.price}</span>
                      </div>
                      <div className="solds">{product.buy} Solds</div>
                    </div>
                  </div>
                </Link>
              )
            })}

            {/* 
            <div className="product">
              <div className="product-slider-img">
                <img
                  src={require("../../assets/imgs/businessCard.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/imgs/businessCard2.png")}
                  alt=""
                />
              </div>
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>{" "}
            <div className="product">
              <div className="product-slider-img">
                <img
                  src={require("../../assets/imgs/businessCard.png")}
                  alt=""
                />
                <img
                  src={require("../../assets/imgs/businessCard2.png")}
                  alt=""
                />
              </div>
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>{" "}
            <div className="product">
              <div className="product-slider-img">
                <img src={require("../../assets/imgs/2 4.png")} alt="" />
                <img
                  src={require("../../assets/imgs/businessCard2.png")}
                  alt=""
                />
              </div>
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
      <Contact />
    </>
  );
};

export default Products;
