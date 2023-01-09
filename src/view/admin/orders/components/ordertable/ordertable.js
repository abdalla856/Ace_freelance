import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ordertable.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { updateOrder, deleteOrder } from "../../../../../actions/orderActions";
const OrderTable = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.Orders);
  const deleteHandler = (id) => {
    dispatch(deleteOrder(id));
  };
  function closeHandle(e) {
    e.preventDefault();
    setShow(!show);
  }
  const [form, setForm] = useState({
    id: "",
    progress: 0,
  });
  const formHandler = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  function saveHandle(e) {
    e.preventDefault();

    dispatch(updateOrder(form.id, form.progress));
    setShow(false);
  }
  function popupForm(id) {
    setForm({ ...form, id: id });
    setShow(true);
  }
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
        {orders.map((order) => {
          var percentage = 0;
          if (order?.progress === 0) {
            percentage = 33;
          } else if (order?.progress === 1) {
            percentage = 66;
          } else if (order?.progress === 2) {
            percentage = 100;
          }
          return (
            <tr>
              <td>{order?.order_id}</td>
              <td>{order?.product_id.title}</td>
              <td>{order?.product_id.type}</td>
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
                      pathTransitionDuration: 0.7,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(0, 255, 0, ${percentage / 100})`,
                      textColor: "#00FF00 ",
                      // trailColor: "#d6d6d6",
                    })}
                  />
                </div>
              </td>
              <td>{order?.user_id.name}</td>
              <td>{order?.product_id.price}</td>

              <td className="action_btns">
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={() => popupForm(order?._id)}
                >
                  Update
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => deleteHandler(order?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <form className={`popup_form ${show ? "visible" : "hidden"}`}>
        <h1>Update Order Progress</h1>
        <label className="form_label">Porgress</label>
        <input
          type="text"
          name="progress"
          min="0"
          max="3"
          placeholder="Pogress"
          onChange={formHandler}
          required
        />

        <div className="form_btns_popup">
          <button onClick={saveHandle} className="save">
            Save
          </button>
          <button onClick={closeHandle} className="close">
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default OrderTable;
