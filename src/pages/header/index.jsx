import React from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import headerImg from "../../images/pngwing.png";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img src={headerImg} alt="" className="back-img"/>
        <h4 className="social-links">
          Follow us -
          <div className="social-icons">
            <AiOutlineTwitter />
            <AiFillInstagram />
            <FaFacebookF />
            <AiFillYoutube />
          </div>
        </h4>
        <div className="feature">
          <h4>Wireless</h4>
          <h4>Beats Studio 3</h4>
        </div>
      </div>
        <div className="circle"></div>
      <div className="header-wrapper">
        <Navbar />
        <div className="content">
          <h1 className="front-title">SURFACE</h1>
          <h1 className="back-title">HEADPHONES</h1>
          <h3 className="price">Price: 285$</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
