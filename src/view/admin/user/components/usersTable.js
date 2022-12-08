import React from "react";

import "./usersTable.css";

const UserTable = () => {
  return (
    <>
      <table className="payment_table">
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Country</th>
          <th>Orders</th>
          <th># in cart</th>
          <th>Role</th>
          <th>Total payement</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>Abdalla Mahmoud</td>
          <td>Abdalla@example.com</td>
          <td>25</td>
          <td>Egypt</td>
          <td>2</td>
          <td>4</td>
          <td>Student</td>
          <td>100</td>
          <td className="action_btns">
            <button style={{ backgroundColor: "green" }}>Update</button>
            <button style={{ backgroundColor: "red" }}>Delete</button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default UserTable;
