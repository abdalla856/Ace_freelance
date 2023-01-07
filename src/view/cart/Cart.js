import React from "react";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import "./cart.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart">
        <h1 className="cart-title">Cart</h1>
        <div className="container">
          <table>
            <thead>
              <tr>
                <td></td>
                <td style={{ width: "30%" }}>Product</td>
                <td style={{ width: "20%" }}>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={require("../../assets/imgs/cart.png")}
                    alt="product"
                    className="product-img"
                  />
                </td>
                <td>business card</td>
                <td>rm 40</td>
                <td>
                  <div className="qty">
                    <MdOutlineKeyboardArrowUp className="arrow" />
                    <span className="number">1</span>
                    <MdOutlineKeyboardArrowDown className="arrow" />
                  </div>
                </td>
                <td>RM 40</td>
              </tr>
            </tbody>
          </table>
          <div className="coupon">
            <input type="text" placeholder="coupon code" />
            <button>apply coupon</button>
          </div>

          <div className="total">
            <h3>Total</h3>
            <h3>RM 40</h3>
          </div>
          <div className="actions">
            <button className="continue">CONTINUE exploring</button>
            <button className="checkout">PROCEED TO CHECKOUT</button>
          </div>
          <div className="discounts">
            <h3>Discounts</h3>
            <p>
              Want to get a member discount? <Link to="signin">Sign in</Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Cart;
