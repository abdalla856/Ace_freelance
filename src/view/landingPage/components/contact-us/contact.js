import React from "react";
import "./contact.css";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h2 className="lets_talk">
          Starting a new project or want to collaborate with us?
        </h2>
        <button className="lets_talk_btn"> Let’s Talk!</button>
        <div className="mainContact">
          <div className="leftContact">
            <h3 style={{ fontSize: "27px", marginBottom: "10px" }}>
              SUBSCRIBE FOR FRESH CONTENT AND PRODUCT UPDATES
            </h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Email"
              className="contact_sub"
            />
            <input type="sbmit" value="SUBMIT" className="contct_btn" />
            <ul className="icons">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaGoogle />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>

          <div className="rightContact">
            <ul>
              <li>
                <h3>Ace FreeLancing</h3>
              </li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <ul>
              <li>
                <h3>Services</h3>
              </li>
              <li>Website Development</li>
              <li>Strategy, Marketing, and Maintenance</li>
              <li>Graphic Design</li>
              <li>Mechanical Design</li>
            </ul>
          </div>
        </div>
        <div className="footer">
          &copy; 2022 Ace Freelancing. All Rights Reserved. Johor Bahru,
          Malaysia.
          <a href="privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
