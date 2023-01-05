import React from "react";
import "./mechanicalAddproduct.css";
import SideBar from "../../../../shared/sidenav/sideNav";
import MechanicalTable from "./components/mechanicaltable/mechanicalTable";
const MechanicalAddProduct = () => {
  return (
    <>
      <div className="web_products_admin" id="dash">
        <div className="main_web_comp">
          <SideBar />
          <div className="container" id="main">
            <h1>Mechanical Products</h1>
            <MechanicalTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default MechanicalAddProduct;
