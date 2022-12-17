import React, { useEffect } from "react";
import "./dashboard.css";
import SideBar from "../../../shared/sidenav/sideNav";
import DashNnav from "./components/dashnav/dashNav";
import MainDash from "./components/main_dash/maindash";
import GraphicSection from "./components/graphic_section/graphic";
import WebSection from "./components/web_section/web";
import MechSection from "./components/mech_section/mech";
import MarketingSection from "./components/marketing_section/market";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllDataNumbers } from "../../../actions/blogActions";








const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDataNumbers());
  }, [ dispatch]);
  const users = useSelector((state) => state.Users);
  const blogs = useSelector((state) => state.Blogs);
  console.log(blogs.length)
  return (
    <>
      <div className="dashboard" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <DashNnav activeUse={users.length} blogs={blogs.length}/>
            <MainDash  />
            <GraphicSection />
            <WebSection />
            <MechSection />
            <MarketingSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
