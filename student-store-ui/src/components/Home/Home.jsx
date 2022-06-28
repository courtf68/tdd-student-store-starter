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
  handleOnToggle,
  isOpen,
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="home">
      <Navbar />
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} />
      {/* hero too */}
      <Hero></Hero>
      <div id="searchbar">
        <input
          type="text"
          id="search-input"
          name="search-term"
          placeholder="search"
          onChange={(ev) => {
            setSearchTerm(ev.target.value);
          }}
        />
        <button id="submit">search</button>
      </div>
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        searchTerm={searchTerm}
      />
      <Footer />
    </div>
  );
}
