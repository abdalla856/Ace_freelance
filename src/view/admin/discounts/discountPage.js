import React, { useEffect, useState } from "react";
import "./discountPage.css";
import SideBar from "../../../shared/sidenav/sideNav";
import { useSelector, useDispatch } from "react-redux";
import {
  getReviews,
  resetReviewData,
  deleteDiscount,
  addnewDiscount,
} from "../../../actions/discountActions";
const Discounts = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: "",
    amout: 0,
  });
  const formHandler = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [getReviews]);
  const discounts = useSelector((state) => state.Discounts);
  const resetHandler = (id) => {
    dispatch(resetReviewData(id));
  };
  const deleteHandler = (id) => {
    dispatch(deleteDiscount(id));
  };
  const formPop = () => {
    setShow(true);
  };
  const closeHandler = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addnewDiscount(data));
    setShow(false);

  };
  return (
    <>
      <div className="discount_page_main" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>Discounts</h2>
            <div className="discount_sections">
              <table className="discount_table">
                <tr>
                  <th>Name</th>
                  <th>Amout</th>
                  <th>UsedBy</th>
                  <th>UsedFor</th>
                  <th>Actions</th>
                </tr>
                {discounts.map((discount) => {
                  return (
                    <>
                      <tr>
                        <td>{discount.name || ""}</td>
                        <td>{discount.amount || 0}</td>
                        <td>{discount.user !== "" ? discount.user : "-"}</td>
                        <td>
                          {discount.product !== "" ? discount.product : "-"}
                        </td>
                        <td className="discount_actions">
                          <button
                            className="discount_reset"
                            onClick={() => resetHandler(discount.id)}
                          >
                            Reset
                          </button>
                          <button
                            className="discount_Delete"
                            onClick={() => deleteHandler(discount.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </table>
              <div class="add_new_discount">
                <button onClick={() => formPop()}>Add New Discount</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
        <form
   
          className={`popup_form ${show ? "visible" :  "hidden"}` }
          onSubmit={submitHandler}
        >
          <h1> New Discount</h1>
          <label className="form_label">Discount Name</label>
          <input
            type="text"
            name="name"
            placeholder="Discount name"
            onChange={formHandler}
            required
          />
          <label className="form_label">Discount Amount</label>

          <input
            type="number"
            name="amount"
            placeholder="Discount Amount %"
            onChange={formHandler}
            required
          />

          <div className="form_btns_popup">
            <button className="save" onClick={submitHandler}>
              Save
            </button>
            <button className="close" onClick={closeHandler}>
              Close
            </button>
          </div>
        </form>
    
    </>
  );
};
export default Discounts;
