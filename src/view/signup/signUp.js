import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/usersActions";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
// import { useAuth } from "../../shared/hooks/auth-hooks";
import { useCookies } from "react-cookie";
import { signupGoogle , signupFB } from "../../actions/usersActions";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import Cookies from "js-cookie";
// import { GoogleLogin } from "react-google-login";
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
  const clientId =
    "42480938758-fgc9nrkkilk9qmi8p4qgesibrctk64ac.apps.googleusercontent.com";
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
            name: res.name,
          })
        );
        window.location.reload();


        setMessage("");
      } else {
        setMessage(res.message);
      }
    }
  };
  const handleGoogleLoginSuccess = async (tokenResponse) => {
    const accessToken = tokenResponse.access_token;
    // alert(tokenResponse);

    const res = await dispatch(signupGoogle(accessToken));
    if (res.status === 202) {

      navigate(`/role/${res.id}`);
      setMessage("");
    } else {
      setMessage(res.message);
    }
  };
  const goolo_login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    // flow: "auth-code",
    // onFailure : setMessage('Failed to Sign up please try again '),
  });
  const responseFacebook = async (response)=>{
    console.log(response.userID)
    const res = await dispatch(signupFB(response.accessToken , response.userID));
    if (res.status === 202) {

      navigate(`/role/${res.id}`);
      setMessage("");
    } else {
      setMessage(res.message);
    }
  }

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
            <span></span>

            <span>
              <div onClick={goolo_login}>
                <FaGoogle />
              </div>
            </span>

            <span>
        
                <FacebookLogin
                  appId="702527821576717"
                  autoLoad={false}
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <div onClick={renderProps.onClick}>
                      <FaFacebookF />
                    </div>
                  )}
                />
         
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
