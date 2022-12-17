import React from "react";
import "./dashNav.css";
import Moment from "moment";
const DashNnav = ({activeUse = 5 , blogs = 5}) => {
  return (
    <>
      <div className="dash-nav">
        <div className="dash-nav-cards">
          <div className="dash-nav-start-dash">
            <h2 className="dash_m_text">Ace Dashboard,</h2>
            <p className="date">{Moment(Date.now()).format("DD MMM yy")}</p>
          </div>
          {/* //red */}
          <div className="dash-nav-card" style={{backgroundColor:"red"}}>
            <p>ِActive Users</p>
            <div>{activeUse}</div>
          </div>
          {/* blue */}
          <div className="dash-nav-card" style={{backgroundColor:"blue"}}>
            <p>Orders</p>
            <div>5</div>
          </div>
          {/* Yellow */}
          <div className="dash-nav-card" style={{backgroundColor:"purple"}}>
            <p>Blogs </p>
            <div>{blogs}</div>
          </div>
          {/* green */}
          <div className="dash-nav-card" style={{backgroundColor:"green"}}>
            <p>Total Income</p>
            <div>5</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNnav;
