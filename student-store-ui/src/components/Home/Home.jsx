import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../Home/ProductGrid/ProductGrid";

export default function Home({ products }) {
  return (
    <div className="home">
      <p id="homey">Home</p>
      {/* hero too */}
      <ProductGrid products={products} />
    </div>
  );
}
