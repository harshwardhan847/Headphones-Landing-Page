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
      ? setLeft('left-out')
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
          : setCurrent('current');

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
  return (
    <div className="more">
      <div className="more-wrapper">
        <h3 className="model">Model no - 242</h3>
        <div className="crousel">
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
        <Button click={next} />
      </div>
    </div>
  );
};

export default More;
