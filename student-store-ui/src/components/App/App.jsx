import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route component={NotFound} /> */}
          </Routes>

          {/*<NavLink></NavLink> new new*/}
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}
