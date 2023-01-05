import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBills,
  addBill,
  deleteBill,
  updateBill,
} from "../../../../../actions/billActions";
import Moment from "moment";
import "./pymentTable.css";

const PayementTable = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("new");
  const [_id, setId] = useState("");
  const [form, setForm] = useState({
    name: "",
    original_fees: 0,
    final_fees: 0,
    discount: 0,
  });
  const [updateform, setupdateForm] = useState({
    _id : "",
    name: "",
    original_fees: 0,
    final_fees: 0,
    discount: 0,
    Date :Date.now
  });
  var sum = 0;

  const disptach = useDispatch();

  const formHandler = (e) => {
    const value = e.target.value;
if(type==="New") {

  setForm({
    ...form,
    [e.target.name]: value,
  });
}else{
  setupdateForm({
    ...updateform,
    [e.target.name]: value,
  });
}
  
  };

  function closeHandle(e) {
    e.preventDefault();
    setShow(!show);
  }
  function saveHandle(e, id) {
    // e.preventDefault();
    if (type === "New") {

      if (
        form.name.length === 0 ||
        form.original_fees.length === 0 ||
        form.final_fees.length === 0 ||
        form.discount.length === 0
      ) {
        alert("All the inputs required *");

        setShow(true);
      } else {
        disptach(addBill(form, id));
        setShow(false);
      }
    } else {
   

      console.log(updateform)

      disptach(updateBill(updateform ));
      setShow(false);
    }
  }
  useEffect(() => {
    disptach(getAllBills());
  }, []);

  function handleDelete(id, final) {
    disptach(deleteBill(id));
    sum -= final;
  }

  const bills = useSelector((state) => state.Bills);

  const handlePopupForm = ({ type, id = "" }, e) => {
    setShow(true);
    setType(type);
    console.log(type)
    // e.preventDefault();
    if (type === "Update") {
      var updatebills = bills.filter((bill) => bill._id === id);
      console.log(updatebills[0])

      setupdateForm({ ...updatebills[0] });
      console.log(updateform)
    
    }
  };

  if (bills !== undefined)
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
          {bills.map((bill) => {
            var final = 0;
            if (bill.discount !== 0) {
              const disc = bill.final_fees * (bill.discount / 100);
              final = bill.final_fees - disc;
            } else {
              final = bill.final_fees;
            }
            sum += final;
            return (
              <tr>
                <td>{bill.name}</td>
                <td>{bill.original_fees}</td>
                <td>{bill.final_fees}</td>
                <td>{bill.discount}</td>

                <td>{final} </td>

                <td>{Moment(bill.Date).format("DD/MM/yy hh:mm A")}</td>
                <td className="action_btns">
                  <button
                    style={{ backgroundColor: "green" }}
                    onClick={() =>
                      handlePopupForm({ type: "Update", id: bill._id })
                    }
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleDelete(bill._id, final)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <button
            className="add_man"
            onClick={() => handlePopupForm({ type: "New" })}
          >
            Add Manual Receipt
          </button>
        </table>
        <div className="total_income">
          <h3>Total : {sum} RM</h3>
        </div>

         
          <form
            className={`popup_form ${show ? "visible" :  "hidden"}` }
            
          >
            <h1>{type} Receipt</h1>
            <label className="form_label">order Name</label>
            <input
              type="text"
              name="name"
              placeholder="Order name"
              onChange={formHandler}
              required
            />
            <label className="form_label">Original Pyament</label>

            <input
              type="number"
              name="original_fees"
              placeholder="Original Pyament"
              onChange={formHandler}
              required
            />
            <label className="form_label">Final Pyament</label>

            <input
              type="number"
              name="final_fees"
              placeholder="Final Pyament"
              onChange={formHandler}
              required
            />
            <label className="form_label">Discount</label>

            <input
              type="number"
              name="discount"
              placeholder="Disco~unt"
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

export default PayementTable;
