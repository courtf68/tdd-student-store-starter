import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../Home/ProductGrid/ProductGrid";
import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <p id="homey">Home</p>
      {/* hero too */}
      <Hero></Hero>
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}
