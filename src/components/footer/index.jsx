import React from "react";
import "./style.css";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="upper-footer">
          <div className="logo-footer">Apple beats</div>
          <div className="navigation">
            <ul>
              <li className="active">Home</li>
              <li>Feature</li>
              <li>Product</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div className="social-icons-footer">
            <AiOutlineTwitter />
            <AiFillInstagram />
            <FaFacebookF />
            <AiFillYoutube />
          </div>
        </div>
        <div className="lower-footer">
          <p className="copyright">&copy; Terms 2023 all rights reserved</p>
          <p className="terms">Terms of use | Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
