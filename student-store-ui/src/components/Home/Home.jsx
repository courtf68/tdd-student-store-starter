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
  handleRemoveItemFromCart,
  isOpen,
}) {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      {/* hero too */}
      <Hero></Hero>

      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
      <Footer />
    </div>
  );
}
