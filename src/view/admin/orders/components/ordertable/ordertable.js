import React from "react";

import "./ordertable.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const OrderTable = () => {
  const percentage = 66;
  return (
    <>
      <table className="payment_table">
        <tr>
          <th>Order ID</th>
          <th>Order Name</th>
          <th>Order Cat.</th>
          <th>Order progress</th>
          <th>Ordered By</th>
          <th>Price</th>

          <th>Actions</th>
        </tr>
        <tr>
          <td>1322456</td>
          <td>CV</td>
          <td>Graphic</td>
          <td>
            <div className="progress_circle">
              <CircularProgressbar
                value={percentage}
                text="in poress"
                styles={buildStyles({
                  // rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  // textColor: '#f88',
                  trailColor: "#d6d6d6",
                })}
              />
            </div>
          </td>
          <td>Abdalla</td>
          <td>40</td>

          <td className="action_btns">
            <button style={{ backgroundColor: "green" }}>Update</button>
            <button style={{ backgroundColor: "red" }}>Delete</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default OrderTable;
