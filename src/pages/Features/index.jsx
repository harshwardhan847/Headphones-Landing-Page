import React from "react";
import "./style.css";
import headerImg from "../../images/pngwing.png";
import Button from '../../components/button'
const Features = () => {
  return (
    <div className="features">
      <div className="features-wrapper">
        <img src={headerImg} alt="" className="feature-img" />
        <Button/>
      </div>
    </div>
  );
};

export default Features;
