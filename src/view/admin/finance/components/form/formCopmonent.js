import React, { useState } from "react";
import "./formCopmonent.css";

const FormCopmonent = ({ show = false, type = "" }) => {
    const [close , setClose] = useState(show)
    function closeHandle(e){
        e.preventDefault()
        setClose(!show)
    }
  return (
    <>
      {show && close && (
        <form className="popup_form" style={{animation :(close) ? "fadeIn 2s" :"fadeOut 2s"}}>
          <h1>{type} Receipt</h1>
          <label className="form_label">order Name</label>
          <input type="text" name="name" placeholder="Order name"/>
          <label className="form_label">Original Pyament</label>

          <input type="number" name="original_feee" placeholder="Original Pyament"/>
          <label className="form_label">Final Pyament</label>
        
          <input type="number" name="Final_feee" placeholder="Final Pyament"/>
          <label className="form_label">Discount</label>
          
          <input type="number" name="discount" placeholder="Discount"/>
          <div className="form_btns_popup">
          <button onClick={closeHandle} className="save">Save</button>
          <button onClick={closeHandle}  className="close">Close</button>
          </div>
        </form>
      )}
    </>
  );
};

export default FormCopmonent;
