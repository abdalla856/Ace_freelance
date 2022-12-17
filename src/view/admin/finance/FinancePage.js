import React from "react";

import "./FinancePage.css";
import SideBar from "../../../shared/sidenav/sideNav";
import PayementTable from "./components/payment-table/pymentTable";
const Finance = () => {
  return (
    <>
      <div className="dash_finance" id="dash">
        <div className="main_dash_comp">
        <SideBar />
        <div className="container" id="main" >
          <h1>Finance </h1>
          <PayementTable />
        </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
