import * as React from "react";
import "./ProductCard.css";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  return (
    <div className="prodCard">
      <div className="product-name"> {product.name} </div>
      <p>title here</p>
      <div className="product-description"> </div>
      <div className="product-price"> ${product.price}</div>
      {/* how to do int dig here*/}
      <img src></img>

      <button className="add"></button>

      <button className="remove"> {productId}</button>

      <div className="product-quantity">{quantity}</div>
      {/* if blank here */}
    </div>
  );
}
