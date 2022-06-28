import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function ProductDetail({}) {
  return (
    <div className="prodDeets">
      {/* fetch prod by id // use params */}
      {/* <p>Prod Deets Page</p> */}
      <Navbar />
      <Sidebar />
    </div>
  );
}
