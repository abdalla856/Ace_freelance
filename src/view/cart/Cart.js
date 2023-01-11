import React, { useState, useEffect } from "react";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import "./cart.css";
// import {
//   MdOutlineKeyboardArrowDown,
//   MdOutlineKeyboardArrowUp,
// } from "react-icons/md";
// import { Link } from "react-router-dom";
import { finishOrderCart } from "../../actions/cartActions";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../actions/usersActions";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../../Config/Config";

const Cart = () => {
  const dispatch = useDispatch();
  const { userId } = JSON.parse(Cookies.get("user") || "{}");
  // const [services, setServices] = useState("");

  // const [prices, setPrices] = useState([]);
  const [totalPrice, setTotlaPrices] = useState(0);
  // const [checkout, setCheckOut] = useState(totalPrice);
  // const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  useEffect(() => {
    dispatch(getUserById(userId));
  }, [userId, dispatch]);
  const user = useSelector((state) => state.Users);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Cart Products",
            amount: {
              value: totalPrice,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);

        return orderID;
      });
  };
  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log(payer);
      setSuccess(true);
    });
  };

  const [checkedState, setCheckedState] = useState(
    new Array(user.cart?.length).fill(false)
  );
  useEffect(() => {
    setCheckedState(new Array(user.cart?.length).fill(false));
  }, [user?.cart]);
  const chackboxHandler = (position) => {
    console.log(checkedState);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);

    const totalprice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + user?.cart[index]?.product?.price;
        }
        return sum;
      },
      0
    );

    setTotlaPrices(totalprice);
  };

  //capture likely error
  // const onError = (data, actions) => {
  //   setErrorMessage("An Error occured with your payment ");
  // };
  useEffect(() => {
    if (success) {
      console.log("Order successful . Your order id is--", orderID);
      alert("Payment Successfully");
      user.cart.map((order, index) => {
        if (checkedState[index]) {
          const orderInfo = {
            user_id: userId,
            product_id: order.product._id,
            cart_id: order._id,
            order_id :orderID,
            sold: order.product?.num_to_buy,
          };
          dispatch(finishOrderCart(orderInfo));
        }
      });
      alert("Payment successful!!");
      // setShow(false);
    }
  }, [success, orderID]);
  const onError = (data, actions) => {
    alert("An Error occured with your payment ");
  };
  return (
    <>
      <PayPalScriptProvider
        options={{ "client-id": CLIENT_ID, currency: "MYR" }}
      >
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
                  <td>Check</td>
                </tr>
              </thead>
              <tbody>
                {user?.cart?.map((prod, index) => {
                  // totalPrice = totalPrice + prod?.product.price;
                  return (
                    <tr>
                      <td>
                        <img
                          src={prod?.product?.listImages[0]}
                          alt="product"
                          className="product-img"
                        />
                      </td>
                      <td>{prod?.product.title}</td>
                      <td>rm {prod?.product.price}</td>
                      {/* <td>
                  <div className="qty">
                    <MdOutlineKeyboardArrowUp className="arrow" />
                    <span className="number">1</span>
                    <MdOutlineKeyboardArrowDown className="arrow" />
                  </div>
                </td> */}
                      <td className="checkbox">
                        <input
                          type="checkbox"
                          onChange={() => chackboxHandler(index)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <div className="coupon">
            <input type="text" placeholder="coupon code" />
            <button>apply coupon</button>
          </div> */}

            <div className="total">
              <h3>Total</h3>
              <h3>RM {totalPrice}</h3>
            </div>
            <div className="actions">
              <button className="continue">CONTINUE exploring</button>
              {/* <button className="checkout" >PROCEED TO CHECKOUT</button> */}
              <PayPalButtons
                forceReRender={[totalPrice]}
                style={{
                  layout: "vertical",
                  color: "blue",
                  shape: "rect",
                  label: "checkout",
                }}
                className="checkout"
                createOrder={(totalPrice, actions) =>
                  createOrder(totalPrice, actions)
                }
                onApprove={onApprove}
                onError={onError}
                onCancel={onError}
              />
            </div>
            {/* <div className="discounts">
            <h3>Discounts</h3>
            <p>
              Want to get a member discount? <Link to="signin">Sign in</Link>{" "}
            </p>
          </div> */}
          </div>
        </div>
        <Contact />
      </PayPalScriptProvider>
    </>
  );
};

export default Cart;
