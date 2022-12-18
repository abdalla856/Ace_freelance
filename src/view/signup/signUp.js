import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
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
