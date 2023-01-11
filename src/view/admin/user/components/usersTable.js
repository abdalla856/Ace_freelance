import React, { useEffect, useState } from "react";

import "./usersTable.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserInfo,
  deleteUser,
  updateUserAdmin,
} from "../../../../actions/usersActions";
const UserTable = () => {
  const [info, setInfo] = useState({
    show: false,
    id: "",
  });
  const [updatedusers, setUsers] = useState({});
  const [select, setSelected] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserInfo());
  }, [dispatch]);

  const users = useSelector((state) => state.Users);

  function deletUser(id) {
    dispatch(deleteUser(id));
  }

  function closeHandle(e) {
    e.preventDefault();
    setInfo({
      show: false,
    });
  }
  const saveHandle = async (e) => {
    e.preventDefault();

    if (select === "") {
      alert("Please Choose The User Type");
    }
    const data = await dispatch(updateUserAdmin(info.id, select));
    if (data.status === 202) {
      setInfo({
        show: false,
      });
    }
  };
  if (users.length !== 0)
    return (
      <>
        <table className="payment_table">
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Orders</th>
            <th># in cart</th>
            <th>Role</th>
            <th>Total payement</th>
            <th>Actions</th>
          </tr>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>

                <td>{user.orders}</td>
                <td>{user.cart}</td>
                <td>{user.role}</td>
                <td>{user.total_cost}</td>
                <td className="action_btns">
                  <button
                    style={{ backgroundColor: "green" }}
                    onClick={() => {
                      setInfo({
                        show: true,
                        id: user.id,
                      });
                    }}
                  >
                    Update
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => deletUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>

        {info.show && (
          <form
            className="popup_form_users"
            style={{ animation: info.show ? "fadeIn 2s" : "fadeOut 2s" }}
            onSubmit={saveHandle}
          >
            <h1>update user</h1>
            <label className="form_label">User Type</label>
            <select
              onChange={(e) => setSelected(e.target.value)}
              className="select_user_types"
            >
              <option selected disabled>
                Choose The Role
              </option>
              <option value="admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Customer">Customer</option>
            </select>

            <div className="form_btns_popup">
              <button onClick={saveHandle} className="save">
                Save
              </button>
              <button onClick={closeHandle} className="close">
                Close
              </button>
            </div>
          </form>
        )}
      </>
    );
};

export default UserTable;
