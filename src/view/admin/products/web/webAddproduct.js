import React from "react";
import "./webAddproduct.css";
import SideBar from "../../../../shared/sidenav/sideNav";
import WebTable from "./components/webtable/webTable";
const WebAddProduct = () => {
  return (
    <>
      <div className="web_products_admin" id="dash">
        <div className="main_web_comp">
          <SideBar />
          <div className="container" id="main">
            <h1>Web Products</h1>
            <WebTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebAddProduct;
