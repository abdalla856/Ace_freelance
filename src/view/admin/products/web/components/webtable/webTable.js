import React, { useEffect } from "react";

import "./webTable.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllWebProducts,
  deleteProduct,
} from "../../../../../../actions/productAction";
const WebTable = () => {
  const navigate = useNavigate();
  const handlePopupForm = () => {
    navigate("/add_web_pro");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWebProducts());
  }, [getAllWebProducts, dispatch]);
  const products = useSelector((state) => state.Products);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <table className="payment_table">
        <tr>
          <th>Product Name</th>

          <th>Price</th>
          <th>Discount</th>
          <th># buy</th>
          <th># in Cart</th>
          <th>Actions</th>
        </tr>
        {products.map((product) => {
          return (
            <tr>
              <td>{product.title}</td>
              <td>{product.price} Rm</td>
              <td>{product.gernal_dsicount}</td>
              <td>{product.buy}</td>
              <td>{product.cart}</td>
              <td className="action_btns">
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={() =>
                   navigate(`/update_web_project/${product._id}`)
                  }
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}

        <button className="add_man" onClick={() => handlePopupForm()}>
          Add Product
        </button>
      </table>
    </>
  );
};

export default WebTable;
