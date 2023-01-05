import React from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [isArabic, setArabic] = React.useState(false);
  const [isLoggedin, setLoggedin] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [userMenu, setUserMenu] = React.useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  const storedData = JSON.parse(Cookies.get("user") || "{}");

  const handleClick = (event) => {
    setArabic((current) => !current);
  };

  const logout = () => {
    Cookies.remove("user");
    navigate('../')
    window.location.reload();

  };
  return (
    <div className="navbar" style={{ backgroundColor: "white" }}>
      <div className="container">
        <img
          src={require("../../../../assets/imgs/ace.png")}
          className="logo"
          alt="logo For Ace company"
        />
        <div className="box">
          <ul className={menu ? "tabs active-tabs" : "tabs"}>
            <li
              style={{
                fontSize: "30px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Menu</span> <span>English / Arabic</span>
            </li>
            <li>
              <a href="/admin_dash">Serivce</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#SignIn">Sign In /Sign Up </a>
            </li>
            <li>
              <DarkModeSwitch
                style={{
                  // marginBottom: "8px",
                  size: "200px !important",
                  fontSize: "20px !important",
                }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                // size="md"
                moonColor="black"
              />
            </li>
            <li>
              <div className="lang">
                <input
                  type="button"
                  onChange={handleClick}
                  value={"En"}
                  className={isArabic ? "" : "under"}
                  onClick={handleClick}
                />
                <span>/</span>
                <input
                  type="button"
                  onChange={handleClick}
                  value={"Ar"}
                  className={isArabic ? "under" : ""}
                  onClick={handleClick}
                />
              </div>
            </li>
          </ul>
          <ul className="user-content">
            <li onClick={() => setUserMenu(!userMenu)}>
              {storedData.token ? (
                <>
                  <span className="user">{storedData.name}</span>
                  <ul
                    className={
                      userMenu ? "list-of-user show-user" : "list-of-user"
                    }
                  >
                    <li>profile</li>
                    {storedData.type === "admin" ? (
                      <li>
                        <Link to="/admin" className="das_style">Dashboard</Link></li>
                    ) : (
                      ""
                    )}

                    <li className="logout" onClick={logout}>
                      <span>
                        <BiLogOut />
                      </span>
                      Log out
                    </li>
                  </ul>
                </>
              ) : (
                <button className="btn2">
                  <Link to="/signin">Sign in</Link>
                </button>
              )}
            </li>
          </ul>
          <div onClick={() => setMenu(!menu)} className="bars">
            {menu ? <AiOutlineClose /> : <FaBars />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
