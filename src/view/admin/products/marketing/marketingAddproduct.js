import React from "react";
import "./marketingAddproduct.css";
import SideBar from "../../../../shared/sidenav/sideNav";
import MarketingTable from "./components/marketingtable/marketingTable";
const MarketingAddProduct = () => {
  return (
    <>
      <div className="web_products_admin" id="dash">
        <div className="main_web_comp">
          <SideBar />
          <div className="container" id="main">
            <h1>Marketing Products</h1>
            <MarketingTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingAddProduct;
