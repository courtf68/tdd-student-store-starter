import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import Logo from "../../../Navbar/Logo/Logo";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <p>title here</p>
      <Link to={`/products/${productId}`} className="media">
        <img className="productImage" src={product.image}></img>
      </Link>
      <div className="product-name"> {product.name} </div>

      <div className="product-description"> </div>
      <div className="product-price"> ${product.price}</div>
      {/*figure out how to do int dig here*/}

      {/* if showDescription = true do ... here */}

      {/* <div className="media"></div> */}

      <button className="add" onClick={productId}>
        +
      </button>
      <button className="remove" onClick={productId}>
        -
      </button>

      <div className="product-quantity">{quantity}</div>
      {/* if blank here */}
    </div>
  );
}
