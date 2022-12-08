import React from "react";
import SideBar from "../../../shared/sidenav/sideNav";
import "./userPage.css";
import UserTable from "./components/usersTable";
const UserAdmin = () => {
  return (
    <>
      <div className="admin_users" id="dash">
        <div className="main_dash_comp">
          <SideBar />
          <div className="container" id="main">
            <h2>Users</h2>
            <div className="users_for_admin">
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAdmin;
