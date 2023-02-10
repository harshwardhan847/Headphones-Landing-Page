import React from "react";
import "./style.css";
import bag from '../../images/bag.webp'
import cable from '../../images/cable.webp'
import Button from '../../components/button'
const Accessories = () => {
  return (
    <div className="accessories">

      <div className="accessories-wrapper">
        <div className="first-acc">
          <div className="left-col">
            <h2 className="acc-title"data-aos="fade-up">Headphone Bag</h2>
            <p className="acc-disc"data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              similique tempore ducimus obcaecati tempora eligendi ratione dicta
              molestias delectus recusandae.
            </p>
            <a href="./" className="learn-more"data-aos="fade-up">Learn more &gt;</a>
          </div>
          <div className="right-col">
            <img src={bag} alt="" className="bag"data-aos="zoom"/>
          </div>
        </div>
      </div>
      <div className="accessories-wrapper left">
        <div className="first-acc">
          <div className="right-col">
            <img src={cable} alt="" className="bag cable"data-aos="fade"/>
          </div>
          <div className="left-col second-acc left-acc">
            <h2 className="acc-title"data-aos="fade-up">Apple Beats Charger</h2>
            <p className="acc-disc"data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              similique tempore ducimus obcaecati tempora eligendi ratione dicta
              molestias delectus recusandae.
            </p>
            <a href="./" className="learn-more"data-aos="fade-up">Learn more &gt;</a>
          </div>
        </div>
      </div>
      <Button/>

    </div>
  );
};

export default Accessories;
