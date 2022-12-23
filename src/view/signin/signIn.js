import React, { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions/usersActions";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate()
  const [cookie, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    const newuser = await dispatch(signIn(user));
    if(newuser.status !== 202){
      setMessage(newuser.message)
    }else {
      setCookie(
        "user",
        JSON.stringify({
          type: newuser.type,
          userId: newuser.id,
          token: newuser.token,
          name : newuser.name
        })
      );
      navigate("../");
      setMessage("");
    }
  };
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
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="remember">
              <div className="checkbox">
                <input type="checkbox" required />
                <span>Remember me</span>
              </div>
              <Link to="/" className="forget-pass">
                Forgot your password?
              </Link>
            </div>
            <div className="err_sign">{message}</div>
            <button onClick={login}>SIGN IN</button>
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
