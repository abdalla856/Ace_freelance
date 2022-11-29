import React from 'react';
import {
    FaCalendarCheck,
    FaChartBar,
    FaClipboard,
    FaCommentAlt,
    FaFolder,
    FaSignInAlt,
    FaSlack,
    FaUserFriends,
    FaCog,
    FaHome,
  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './sideNav.css'


const SideBar =()=>{



return(
    <div className='sidebar'>
      <nav  className="flex-column">
        <NavLink href="/home">
          <h2>
            <FaSlack />
          </h2>
        </NavLink>
        <br />
        <NavLink href="/home">
          <h4>
            <FaHome />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaChartBar />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaClipboard />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaFolder />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaCalendarCheck />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaUserFriends />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaCommentAlt />
          </h4>
        </NavLink>
        <NavLink>
          <h4>
            <FaSignInAlt />
          </h4>
        </NavLink>
   
      </nav>
    </div>
  );







}
export default SideBar

