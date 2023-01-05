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
      <div className="product">
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
            <img src={require("../../assets/imgs/businessCard.png")} alt="" />
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
              <h5>product details</h5>
              <p>
                blablabla CHAT FIRST BEFORE PLACING AN ORDER. PRICE MAY VARY
                BASED ON THE COMPLEXITY OF YOUR DESIGN. How to order: 1. Send
                the detail and logo for the professional business card or thank
                you card that you want to design to enquiry.acetech@gmail.com or
                fill up this google form: https://bit.ly/35cETX4 2. Wait for 2-5
                working days . Get your business card design (PNG, PDF, JPG,
                SVG) that we sent to your E-mail No cancellation is allowed
                after confirmation of payment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Product;
