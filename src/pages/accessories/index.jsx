import React from "react";
import "./style.css";
import bag from '../../images/bag.png'
import cable from '../../images/cable.png'
import Button from '../../components/button'
const Accessories = () => {
  return (
    <div className="accessories">

      <div className="accessories-wrapper">
        <div className="first-acc">
          <div className="left-col">
            <h2 className="acc-title">Headphone Bag</h2>
            <p className="acc-disc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              similique tempore ducimus obcaecati tempora eligendi ratione dicta
              molestias delectus recusandae.
            </p>
            <a href="#" className="learn-more">Learn more &gt;</a>
          </div>
          <div className="right-col">
            <img src={bag} alt="" className="bag"/>
          </div>
        </div>
      </div>
      <div className="accessories-wrapper">
        <div className="first-acc">
          <div className="right-col">
            <img src={cable} alt="" className="bag cable"/>
          </div>
          <div className="left-col second-acc">
            <h2 className="acc-title">Headphone Bag</h2>
            <p className="acc-disc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              similique tempore ducimus obcaecati tempora eligendi ratione dicta
              molestias delectus recusandae.
            </p>
            <a href="#" className="learn-more">Learn more &gt;</a>
          </div>
        </div>
      </div>
      <Button/>

    </div>
  );
};

export default Accessories;
