import React from "react";
import "./pymentTable.css";
import Moment from "moment";

const PayementTable = () => {
  return (
    <>
      <table className="payment_table">
        <tr>
          <th>Order Name</th>
          <th>Original Payment</th>
          <th>Final Payment</th>
          <th>Discount</th>
          <th>Income</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Business Card</td>
          <td>25</td>
          <td>20</td>
          <td>0</td>
          <td>20</td>
          <td>{Moment(Date.now()).format("DD/MM/yy hh:mm")}</td>
          <td className="action_btns">
            <button style={{ backgroundColor: "green" }}>Edit</button>
            <button style={{ backgroundColor: "red" }}>Delete</button>
          </td>
        </tr>
        <button className="add_man">Add Manual Receipt</button>
      </table>
      <div className="total_income">
        <h3>Total : 180 RM</h3>
      </div>
    </>
  );
};

export default PayementTable;
