import React, { useRef, useEffect } from "react";
import {
  FaShoppingCart,
  FaUsersCog,
  FaBloggerB,
  FaChartLine,
  FaHome,
  FaAlignJustify,
  FaReact,
  FaPhotoVideo,
  FaCogs, 
  FaEnvira,
  FaRegComments,
  FaPercent
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./sideNav.css";
import {FaDropbox} from 'react-icons/fa'
const SideBar = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    // document.getElementById("main").style.marginLeft = "350px";

    document.getElementById("main").style.opacity = ".5";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.opacity = "1";
  }
  // const i =useOutsideAlerter(ref);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        document.getElementById("mySidenav").style.width = "0";

        document.getElementById("main").style.opacity = "1";
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <div id="mySidenav" className="sidenav" ref={menuRef}>
        <img
          className="dash_navside_imga"
          alt=""
          src={require("../../assets/imgs/logo.png")}
          onClick={() => navigate("../")}
        />
        <Link to="#" className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        <Link to="/admin">
          <FaHome /> &nbsp; Home
        </Link>
        <Link to="/admin_finance">
          <FaChartLine /> &nbsp; Finance
        </Link>
        <Link to="/admin_blog">
          <FaBloggerB /> &nbsp; Blogs
        </Link>
        <Link to="/user_admin">
          <FaUsersCog /> &nbsp; Users
        </Link>
        <Link to="/order_admin">
          <FaShoppingCart />
          &nbsp;Orders
        </Link>
        <Link to="/discounts_admin">
          <FaPercent />
          &nbsp;Discounts
        </Link>
        <Link to="/reviews_admin">
          <FaRegComments />
          &nbsp;Reviews
        </Link>
        <div class="dropdown_side_nav">
          <div className="dropbtn_side_nav">

          {/* <button > */}
              <FaDropbox className="sidde_nav_arrow"/>
              &nbsp;Products
            
              
          {/* </button>// */}
          </div>
          <div class="dropdown-content_side_nav">
            <Link to="/web_add_product">
              <FaReact />
          &nbsp;
              Web Development
            </Link>
            <Link to="/graphic_add_product">
            <FaPhotoVideo />
          &nbsp;
              Graphic Design
            </Link>
            <Link to="/mechanical_add_product">
            <FaCogs />
          &nbsp;
              Mechanical Design
            </Link>
            <Link to="/marketing_add_product">
            <FaEnvira />
          &nbsp;
              Marketing
            </Link>
          </div>
        </div>
      </div>

      <span onClick={openNav} className="menu_dash_icon" ref={ref}>
        <FaAlignJustify />
      </span>
    </>
  );
};
export default SideBar;
