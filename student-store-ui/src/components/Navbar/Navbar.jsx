import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Navbar</p>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products/:productId">Product Deets</Link>
      </li>
      <li>
        <Link to="*">404</Link>
      </li>
    </nav>
  );
}
