import React from "react";
import "./style.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">Apple Beats</div>
        <div className="nav-items">
          <ul>
            <li className="nav-item active">Home</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Design</li>
            <li className="nav-item">Accessories</li>
            <li className="nav-item">Models</li>
          </ul>
        </div>
        <div className="user-cart-icon">
          <div className="account-icon">
            <AiOutlineUser />
          </div>
          <div className="cart-icon">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
