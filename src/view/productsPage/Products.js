import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import "./products.css";
const Products = () => {
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="sm-nav">
          <div className="container">
            <span className="location">Home>Services>Graphic design</span>
            <div className="cart">
              <AiOutlineShoppingCart />
              <span>Cart[0]</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="products-title">
            <h3>Creating the best visuals</h3>
            <h1>graphic design</h1>
            <h3>by Ace Freelancing</h3>
          </div>
          <div className="cards">
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
            <div className="product">
              <img src={require("../../assets/imgs/businessCard.png")} alt="" />
              <div className="product-details">
                <div className="product-info">
                  <h3 className="name">Business Card</h3>
                  <span className="price">RM 40</span>
                </div>
                <div className="solds">301 Solds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Products;
