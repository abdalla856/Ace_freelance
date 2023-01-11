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
import Cookies from "js-cookie";
import { CLIENT_ID } from "../../Config/Config";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { AddOrder } from "../../actions/orderActions";
import { getUserById } from "../../actions/usersActions";
import { AddToCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";

const Product = () => {
  const { service, id } = useParams();
  const [services, setServices] = useState("");
  const dispatch = useDispatch();
  const { userId } = JSON.parse(Cookies.get("user") || "{}");

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
    dispatch(getUserById(userId));
  }, [service]);
  const products = useSelector((state) => state.Products);
  var recentpoduct = products.find((item) => item?._id === id);
  var reltedproducts = products.filter(
    (blog) =>
      blog?.type === recentpoduct?.type && blog?._id !== recentpoduct?._id
  );
  const user = useSelector((state) => state.Users);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: recentpoduct?.title,
            amount: {
              value: recentpoduct?.price || 0,
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
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      console.log("Order successful . Your order id is--", orderID);
      const orderInfo = {
        user_id: userId,
        product_id: id,
        order_id: orderID,
        sold: recentpoduct?.buy,
      };
      dispatch(AddOrder(orderInfo));
      // alert("Payment successful!!");
      setShow(false);
    }
  }, [success, AddOrder, dispatch]);

  const carthandler = (e) => {
    e.preventDefault();
    dispatch(AddToCart(recentpoduct?._id, userId));
    alert("Add To The Cart Successfully");
  };
  useEffect(() => {
    recentpoduct = products.find((item) => item?._id === id);
    reltedproducts = products.filter(
      (blog) =>
        blog?.type === recentpoduct?.type && blog?._id !== recentpoduct?._id
    );
  }, [dispatch]);
  return (
    <>
      <PayPalScriptProvider
        options={{ "client-id": CLIENT_ID, currency: "MYR" }}
      >
        <Navbar />
        <div className="single-product">
          <div className="sm-nav">
            <div className="container">
              <span className="location">
                Home{">"}Services{">"}Graphic design{">"}
                {recentpoduct?.title}
              </span>
              <div className="cart">
                <AiOutlineShoppingCart />
                <Link to={"/cart"}>
                  <span>Cart[{user?.cart?.length || 0}]</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="theProduct">
              <img src={recentpoduct?.images!==undefined ?recentpoduct?.images[0] : ""} alt="product" />
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
                  <button className="add-cart" onClick={carthandler}>
                    add to cart
                  </button>
                  <PayPalButtons
                    // className="buy"
                    createOrder={createOrder}
                    onApprove={onApprove}
                  >
                    buy now
                  </PayPalButtons>
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
                    Fast delivery File pun diterima dgn cepattt 👍👍👍
                    Memudahkan kerja dan menjimatkan masa Boleh repeat order
                    lagi utk produk lain MANTAPPPP 💯
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
                    Fast delivery File pun diterima dgn cepattt 👍👍👍
                    Memudahkan kerja dan menjimatkan masa Boleh repeat order
                    lagi utk produk lain MANTAPPPP 💯
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
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </PayPalScriptProvider>
    </>
  );
};

export default Product;
