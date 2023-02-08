import React, { useState } from "react";
import "./style.css";
import Button from "../../components/button";
const More = () => {
  const [leftOut, setLeftOut] = useState("left-out");
  const [left, setLeft] = useState("left side");
  const [rightOut, setRightOut] = useState("right-out");
  const [right, setRight] = useState("right side");
  const [current, setCurrent] = useState("current");
  const next = () => {
    left === "left side"
      ? setLeft("current")
      : left === "current"
      ? setLeft("right side")
      : left === "right side"
      ? setLeft("right-out")
      : left === "right-out"
      ? setLeft("left-out")
      : setLeft("left side");

    right === "right side"
      ? setRight("right-out")
      : right === "right-out"
      ? setRight("left-out")
      : right === "left-out"
      ? setRight("left side")
      : right === "left side"
      ? setRight("current")
      : setRight("right side");

    current === "current"
      ? setCurrent("right side")
      : current === "right side"
      ? setCurrent("right-out")
      : current === "right-out"
      ? setCurrent("left-out")
      : current === "left-out"
      ? setCurrent("left side")
      : setCurrent("current");

    leftOut === "left-out"
      ? setLeftOut("left side")
      : leftOut === "left side"
      ? setLeftOut("current")
      : leftOut === "current"
      ? setLeftOut("right side")
      : leftOut === "right side"
      ? setLeftOut("right-out")
      : setLeftOut("left-out");

    rightOut === "right-out"
      ? setRightOut("left-out")
      : rightOut === "left-out"
      ? setRightOut("left side")
      : rightOut === "left side"
      ? setRightOut("current")
      : rightOut === "current"
      ? setRightOut("right side")
      : setRightOut("right-out");
  };
  const previous = () => {
    left === "left side"
      ? setLeft("left-out")
      : left === "left-out"
      ? setLeft("right-out")
      : left === "right-out"
      ? setLeft("right side")
      : left === "right side"
      ? setLeft("current")
      : setLeft("left side");

    right === "right side"
      ? setRight("current")
      : right === "current"
      ? setRight("left side")
      : right === "left side"
      ? setRight("left-out")
      : right === "left-out"
      ? setRight("right-out")
      : setRight("right side");

    current === "current"
      ? setCurrent("left side")
      : current === "left side"
      ? setCurrent("left-out")
      : current === "left-out"
      ? setCurrent("right-out")
      : current === "right-out"
      ? setCurrent("right side")
      : setCurrent("current");

    leftOut === "left-out"
      ? setLeftOut("right-out")
      : leftOut === "right-out"
      ? setLeftOut("right side")
      : leftOut === "right side"
      ? setLeftOut("current")
      : leftOut === "current"
      ? setLeftOut("left side")
      : setLeftOut("left-out");

    rightOut === "right-out"
      ? setRightOut("right side")
      : rightOut === "right side"
      ? setRightOut("current")
      : rightOut === "current"
      ? setRightOut("left side")
      : rightOut === "left side"
      ? setRightOut("left-out")
      : setRightOut("right-out");
  };
  return (
    <div className="more">
      <div className="more-wrapper">
        <h3 className="model">Model no - 242</h3>
        <div className="crousel">
          <div className="previous-btn arrow" data-aos="fade-in" onClick={previous}>
            &lt;
          </div>
          <div className="next-btn arrow" data-aos="fade-in" onClick={next}>
            &gt;
          </div>

          <div className={leftOut}>
            <div className="card-img one"></div>
          </div>
          <div id="left-card" className={left}>
            <div className="card-img two"></div>
          </div>
          <div id="current" className={current}>
            <div className="card-img three"></div>
          </div>
          <div id="right-card" className={right}>
            <div className="card-img four"></div>
          </div>
          <div className={rightOut}>
            <div className="card-img five"></div>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default More;
