import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signIn">
      <div className="container">
        <div className="loginLeft">
          <img
            className="loginLeftBg"
            src={require("../../assets/imgs/loginBg.png")}
            alt=""
          />

          <div className="login-gradient">
            <img
              src={require("../../assets/imgs/logo.png")}
              className="logo"
              alt="logo For Ace company"
            />
            <h2>You are one click away from creating something awesome.</h2>
            <p>
              We produce projects that both ourselves and our clients can be
              truly proud of.
            </p>
            <div className="icons">
              <img
                src={require("../../assets/imgs/shopee.png")}
                className="logo"
                alt="logo For Ace company"
              />
              <div className="text">
                <p>As reviewed on SHOPEE</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="loginRight">
          <h1>Welcome to Ace!</h1>
          <p>Create your account</p>

          <form>
            <div className="form-control">
              <label htmlFor="">Your Name</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">Your Email</label>
              <input type="email" />
            </div>
            <div className="form-control">
              <label htmlFor="">Enter a password</label>
              <input type="password" />
            </div>
            <div className="form-control">
              <label htmlFor="">Confirm password</label>
              <input type="password" />
            </div>
            <div className="remember">
              <div className="checkbox">
                <input type="checkbox" />
                <span>
                  I agree to the <Link to="/">terms and conditions.</Link>
                </span>
              </div>
            </div>
            <button>SIGN UP</button>
          </form>
          <p className="no-account">
            Are you already a member? <Link to="/signin "> Sign In </Link>
          </p>
          <div className="signup-icons">
            <span>
              <Link to="/">
                <FaGoogle />
              </Link>
            </span>

            <span>
              <Link to="/">
                <FaFacebookF />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
