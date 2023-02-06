import React from "react";
import Navbar from "../../components/navbar";
import "./style.css";
import headerImg from "../../images/pngwing.png";

const Header = () => {
  return (
    <div className="header">
      <div className="img-container">
        <img src={headerImg} alt="" />
      </div>
      <div className="header-wrapper">
        <Navbar />
        <div className="content">
          <h1 className="front-title">SURFACE</h1>
          <h1 className="back-title">HEADPHONES</h1>
          <h3>Price: 285$</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
