import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const SignIn = () => {
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
          <h1>Welcome back!</h1>
          <p>Sign in with the data you’ve entered before.</p>
          <button>
            <Link to="#">Log in with Google</Link>
          </button>
          <button>
            <Link to="#">Log in with Facebook</Link>
          </button>
          <form>
            <div className="form-control">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>
            <div className="remember">
              <div className="checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <Link to="/" className="forget-pass">Forgot your password?</Link>
            </div>
            <button>SIGN IN</button>
          </form>
          <p className="no-account">
            Dont have an account? <Link to="/signup ">Sign Up </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
