import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";

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
              <Link to="/" className="forget-pass">
                Forgot your password?
              </Link>
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
