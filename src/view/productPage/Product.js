import React from "react";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import "./product.css";
const Product = () => {
  return (
    <>
      <Navbar />
      <div className="single-product">
        <div className="sm-nav">
          <div className="container">
            <span className="location">
              Home>Services>Graphic design>BUSINESS CARD
            </span>
            <div className="cart">
              <AiOutlineShoppingCart />
              <span>Cart[0]</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="theProduct">
            <img
              src={require("../../assets/imgs/businessCard.png")}
              alt="product"
            />
            <div className="product-details">
              <h3 className="product-name">business card</h3>
              <div className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h4 className="product-price">RM 40</h4>
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
                <p> blablabla</p>
                <p>
                  CHAT FIRST BEFORE PLACING AN ORDER. PRICE MAY VARY BASED ON
                  THE COMPLEXITY OF YOUR DESIGN.
                </p>
                <p>
                  How to order: 1. Send the detail and logo for the professional
                  business card or thank you card that you want to design to
                  enquiry.acetech@gmail.com or fill up this google form:
                  https://bit.ly/35cETX4 2. Wait for 2-5 working days .
                </p>
                <p>
                  Get your business card design (PNG, PDF, JPG, SVG) that we
                  sent to your E-mail No cancellation is allowed after
                  confirmation of payment.
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Product;
