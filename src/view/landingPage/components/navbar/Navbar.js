import React from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate()
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [isArabic, setArabic] = React.useState(false);
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
    navigate('/')
  };
  return (
    <div className="navbar" style={{ backgroundColor: "white" }}>
      <div className="container">
        <img
          src={require("../../../../assets/imgs/ace.png")}
          className="logo"
          alt="logo For Ace company"
        />
        <ul className="tabs">
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
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
                  {storedData.type === "admin" ? <li>Admin</li> : ""}

                  <li className="logout" onClick={logout}>
                    <span>
                      <BiLogOut />
                    </span>
                    Log out
                  </li>
                </ul>
              </>
            ) : (
              <Link className="btn2" to="/signin">
                Sign in
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
