import React from "react";

import "./orderPage.css";
import SideBar from "../../../shared/sidenav/sideNav";
import OrderTable from './components/ordertable/ordertable'
const OrdersPage = () => {
  return (
    <>
      <div className="order_page_main" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>Orders</h2>
            <div className="orders_sections">
                <OrderTable/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
