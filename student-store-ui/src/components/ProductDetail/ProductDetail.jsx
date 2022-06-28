import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProductView from "../ProductDetail/ProductView/ProductView";
import axios from "axios";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const [product, setProduct] = React.useState(undefined);
  const params = useParams(); //prod id is param
  const url = `https://codepath-store-api.herokuapp.com/store`;
  console.log(params);
  React.useEffect(async () => {
    let response = await axios.get(
      `https://codepath-store-api.herokuapp.com/store/${params.productId}`
    );
    console.log("response.data.prod", response.data.product);

    setProduct(response.data.product);
  }, []);
  return (
    <div className="prodDeets">
      {/* fetch prod by id // use params */}
      {/* <p>Prod Deets Page</p> */}
      <Navbar />
      <Sidebar />
      {product ? (
        <ProductView
          product={product}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ) : null}
    </div>
  );
}
