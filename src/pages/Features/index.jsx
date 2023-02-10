import React, { useState } from "react";
import "./style.css";
import headerImg from "../../images/pngwing.webp";
import Button from "../../components/button";
const Features = () => {
  const [show, setShow] = useState("");
  const [animation, setAnimation] = useState("");
  const showIt = () => {
    console.log("clicked" + show);
    show === "show" ? setShow("") : setShow("show");
    animation === "roll 2s linear"
      ? setAnimation("")
      : setAnimation("roll 2s linear");
  };
  return (
    <div className="features">
      <div className="features-wrapper">
        <img src={headerImg} alt="" className="feature-img" />
        <Button />
      </div>






      <div className="spot1 show" onClick={showIt}>
        <div
          className={`line ${show}`}
        ></div>
        <div className={`text ${show}`} >
          15W Speakers
        </div>
      </div>
      <div className="spot2 show" onClick={showIt}>
        <div
          className={`line ${show} clear-line`}
          style={{ Animation: "roll 2s linear" }}
        ></div>
        <div className={`text ${show} clear-text`} >
          Clear Audio
        </div>
      </div>
      <div className="spot3 show" onClick={showIt}>
        <div
          className={`line ${show} max-line`}
          style={{ Animation: "roll 2s linear" }}
        ></div>
        <div className={`text ${show} max-text`} >
          Max Comfort
        </div>
      </div>
      <div className="spot4 show" onClick={showIt}>
        <div
          className={`line ${show}`}
          style={{ Animation: "roll 2s linear" }}
        ></div>
        <div className={`text ${show}`} >
          Flexible Band
        </div>
      </div>
    </div>
  );
};

export default Features;
