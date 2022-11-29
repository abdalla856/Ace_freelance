import React from "react";
import "./dashboard.css";
import SideBar from "./components/sidenav/sideNav";
import DashNnav from "./components/dashnav/dashNav";

import MainDash from "./components/main_dash/maindash";
import GraphicSection from "./components/graphic_section/graphic";
import WebSection from "./components/web_section/web";
import MechSection from "./components/mech_section/mech";
import MarketingSection from "./components/marketing_section/market";
const Dashboard = () => {

  return (
    <>
      <div className="dashboard">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container">
            <DashNnav />
            <MainDash />
            <GraphicSection/>
            <WebSection/>
            <MechSection/>
            <MarketingSection/>
  
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
