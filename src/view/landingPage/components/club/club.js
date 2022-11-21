import React from "react";

import "./club.css";

const Club = () => {
  return (
    <div className="club">
      <div className="container">
        <div className="club_section">
          <div className="club_right_side">
            <img src={require("../../../../assets/imgs/coming.gif")} alt= "Coming Soon" />
          </div>
          <div className="club_left_side">
            <div className="club_info">
              <h2>Enhance your tech knowledge, join our Club.</h2>
              <div>Get notified when it’s ready.</div>
              <input
                type="text"
                placeholder="Enter your email."
                className="club_email"
              />
              <input type="submit" value="YEAH!" className="club_btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
