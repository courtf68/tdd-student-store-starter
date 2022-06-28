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
  setProducts,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  handleOnToggle,
  isOpen,
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterRes, setFilterRes] = React.useState([]);

  function filterCategory(selCategory) {
    setFilterRes(products.filter((ev) => ev.category === selCategory));
  }

  React.useEffect(() => {
    setProducts(filterRes);
  }, [filterRes]); //run when filter res changes

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
      <div className="cats">
        <ul className="category-menu">
          <li>
            <button>All Categories</button>
          </li>
          <li>
            <button onClick={() => filterCategory("clothing")}>Clothing</button>
          </li>
          <li>
            <button onClick={() => filterCategory("food")}>Food</button>
          </li>
          <li>
            <button onClick={() => filterCategory("accesories")}>
              Accessories
            </button>
          </li>
          <li>
            <button onClick={() => filterCategory("tech")}>Tech</button>
          </li>
        </ul>
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
