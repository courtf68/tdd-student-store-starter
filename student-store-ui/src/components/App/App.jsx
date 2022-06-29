import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";

import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import ProductCard from "../Home/ProductGrid/ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import ProductGrid from "../Home/ProductGrid/ProductGrid";
import axios from "axios";

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [products, setProducts] = React.useState([]); //attempt at state vari

  const [isOpen, setisOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const [shoppingCart, setshoppingCart] = React.useState([]);

  function fetchy() {
    axios
      .get(url)
      .then((response) => {
        let data = response.data.products;
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // filter by cat for each select
  React.useEffect(() => {
    fetchy();
  }, []);

  function handleOnToggle() {
    if (isOpen) {
      setisOpen(false);
    } else if (isOpen == false) {
      setisOpen(true);
    }
  }

  function handleAddItemToCart() {
    console.log("add");
  }

  function handleRemoveItemFromCart() {
    console.log("remove");
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

          {/*location needs to b fixed, abs position in style - sidebar*/}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  setProducts={setProducts}
                  isOpen={isOpen}
                  handleOnToggle={handleOnToggle}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/*<NavLink></NavLink> new new*/}
          {/* <Home /> */}
          {/* <ProductGrid /> */}
          {/* fetch prod here */}
          {/* <ProductCard /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
