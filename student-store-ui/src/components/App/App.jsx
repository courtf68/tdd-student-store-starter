import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import ProductCard from "../Home/ProductGrid*/ProductCard*/ProductCard";
import Footer from "../Footer/Footer";
import ProductGrid from "../Home/ProductGrid*/ProductGrid";

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
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
            {/* <Route component={NotFound} /> */}
          </Routes>
          {/*<NavLink></NavLink> new new*/}
          {/* <Home /> */}
          <ProductGrid />
          <ProductCard />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
