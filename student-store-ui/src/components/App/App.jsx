import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import ProductCard from "../Home/ProductGrid*/ProductCard*/ProductCard";
import Footer from "../Footer/Footer";
import ProductGrid from "../Home/ProductGrid*/ProductGrid";
import axios from "axios";

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  const url = `https://codepath-store-api.herokuapp.com/store`;
  const [products, setProducts] = React.useState([]); //attempt at state vari
  // const isFetching = false; //FIX
  // const error = "error happened"; //something wrong w api req

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
  React.useEffect(() => {
    fetchy();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          {/*location needs to b fixed, abs position in style - sidebar*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/*<NavLink></NavLink> new new*/}
          {/* <Home /> */}
          <ProductGrid />
          {/* fetch prod here */}
          <ProductCard />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
