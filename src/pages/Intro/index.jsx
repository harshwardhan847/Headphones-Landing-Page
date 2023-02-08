import React from "react";
import Button from "../../components/button";
import "./style.css";
const Intro = ({button, title, disc}) => {
  return (
    <div className="intro">
      <div className="intro-wrapper">
        {button===true?<Button/>:''}
        <div className="intro-text">
          <h2 className="intro-title"data-aos="fade-up">{title}</h2>
          <p className="intro-disc"data-aos="fade-up">
           {disc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
