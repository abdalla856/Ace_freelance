import React  , {useRef , useEffect} from "react";
import {

  FaShoppingCart,
  FaUsersCog,
  FaBloggerB,
  FaChartLine,
  FaHome,
  FaAlignJustify,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sideNav.css";

const SideBar = () => {
const ref = useRef(null)
// const refnav = useRef(null)

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
  let handler = (e)=>{
    if(!menuRef.current.contains(e.target)){
      document.getElementById("mySidenav").style.width = "0";
     
      document.getElementById("main").style.opacity = "1";
      console.log(menuRef.current);
    }      
  };

  document.addEventListener("mousedown", handler);
  

  return() =>{
    document.removeEventListener("mousedown", handler);
  }

});
  return (
   
    <>
      <div id="mySidenav" className="sidenav" ref={menuRef}>
        <img className="dash_navside_imga" alt ="" src={require('../../assets/imgs/logo.png')}/>
        <Link to="#" className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        <a href="./admin"><FaHome/> &nbsp;    Home</a>
        <a href="/admin_finance"><FaChartLine/>  &nbsp;   Finance</a>
        <a href="/admin_blog"><FaBloggerB/>   &nbsp;  Blogs</a>
        <a href="/user_admin"><FaUsersCog/>   &nbsp;  Users</a>
        <a href="/order_admin"><FaShoppingCart/>&nbsp;Orders</a>
      </div>

      <span onClick={openNav} className="menu_dash_icon" ref={ref}>
        <FaAlignJustify />
      </span>
    </>
  );
};
export default SideBar;
