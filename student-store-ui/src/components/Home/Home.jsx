import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductGrid from "../Home/ProductGrid/ProductGrid";
import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";
import ShoppingCart from "../ShoppingCart";
import axios from "axios";

export default function Home({
  products,
  setProducts,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  handleOnToggle,
  isOpen,
  setShoppingCart,
  shoppingCart,
}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterRes, setFilterRes] = React.useState([]);

  function filterCategory(selCategory) {
    setFilterRes(products.filter((ev) => ev.category === selCategory));
  }

  const handleOnTextChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  var look = products.filter((prod) => {
    //search
    return prod.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  React.useEffect(() => {
    setProducts(filterRes);
  }, [filterRes]); //run when filter res changes

  return (
    <div className="home">
      <Navbar />
      <Sidebar
        isOpen={isOpen}
        handleOnToggle={handleOnToggle}
        products={products}
        shoppingCart={shoppingCart}
      />
      {/* hero too */}
      <Hero></Hero>
      <div id="searchbar">
        <input
          type="text"
          id="search-input"
          name="search-term"
          placeholder="search here!"
          onChange={handleOnTextChange}
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
        products={look}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        searchTerm={searchTerm}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
      <div className="about" id="about">
        <h3>About</h3>
        <div class="summary">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <p>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
      </div>
      <div class="content">
        <h3>Contact Us</h3>
        <div class="summary">
          <ul class="info">
            <li>
              <span class="label">Email:</span>
              <span>code@path.org</span>
            </li>
            <li>
              <span class="label">Phone:</span>
              <span>1-800-CODEPATH</span>
            </li>
            <li>
              <span class="label">Address:</span>
              <span>123 Fake Street, San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
