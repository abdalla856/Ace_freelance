import React from "react";
import "./graphicAddproduct.css";
import SideBar from "../../../../shared/sidenav/sideNav";
import GarphicTable from "./components/graphictable/graphicTable";
const GraphicAddProduct = () => {
  return (
    <>
      <div className="web_products_admin" id="dash">
        <div className="main_web_comp">
          <SideBar />
          <div className="container" id="main">
            <h1>Graphics Products</h1>
            <GarphicTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicAddProduct;
