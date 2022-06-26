import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <p>CodePath Org</p>
      <li>
        <Link to="/">Home</Link>
        {/* see how links are done//check */}
      </li>
      <li>
        <a href="#homey">About Us</a>
      </li>
      <li>
        <a href="#bottom">Contact Us</a>
      </li>
      <li>
        <Link to="#buy">Buy Now</Link>
      </li>
      {/* <li>
        <Link to="/products/:productId">Product Deets</Link>
      </li>
      <li>
        <Link to="*">404</Link> */}
      {/* </li> */}
    </nav>
  );
}
