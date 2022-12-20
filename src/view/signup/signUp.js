import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/usersActions";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../shared/hooks/auth-hooks";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import "./signUp.css";

const Signup = () => {
  // const {login} =useAuth()
  const [cookies, setCookie] = useCookies(["user"]);

  const dispatch = useDispatch();
  const [new_user, setNewUser] = useState({
    name: "",
    email: "",
    birthday: "",
    role: "",
    password: "",
    conf_pass: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  function hnadleInput(e) {
    const value = e.target.value;
    setNewUser({
      ...new_user,
      [e.target.name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (new_user.password !== new_user.conf_pass) {
      alert("The passwords not the same");
    } else {
      const res = await dispatch(signUp(new_user));
      if (res.status === 200) {
        setCookie(
          "user",
          JSON.stringify({
            type: res.type,
            userId: res.id,
            token: res.token,
          })
        );
        navigate("../");
        setMessage("");
      } else {
        setMessage(res.message);
      }
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
          <h1>Welcome to Ace!</h1>
          <p>Create your account</p>

          <form>
            <div className="form-control">
              <label htmlFor="">Your Name</label>
              <input type="text" name="name" onChange={hnadleInput} required />
            </div>
            <div className="form-control">
              <label htmlFor="">Your Email</label>
              <input
                type="email"
                name="email"
                onChange={hnadleInput}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Your Birthday</label>
              <input
                type="date"
                name="birthday"
                onChange={hnadleInput}
                required
              />
            </div>
            <div className="form-control">
              <select onChange={hnadleInput} defaultValue={"#"} name="role">
                <option value="#" disabled required>
                  chose your role
                </option>
                <option value="student">Student</option>
                <option value="cutsomer">Customer</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="">Enter a password</label>
              <input
                type="password"
                name="password"
                onChange={hnadleInput}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Confirm password</label>
              <input
                type="password"
                name="conf_pass"
                onChange={hnadleInput}
                required
              />
            </div>
            <div className="remember">
              <div className="checkbox">
                <input type="checkbox" required />
                <span>
                  I agree to the <Link to="/">terms and conditions.</Link>
                </span>
              </div>
            </div>
            <div className="err_message">{message}</div>
            <button onClick={handleSubmit}>SIGN UP</button>
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
