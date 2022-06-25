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
    <div className="product-card">
      <p>title here</p>
      <div className="product-name"> {product.name} </div>

      <div className="product-description"> </div>
      <div className="product-price"> ${product.price}</div>
      {/*figure out how to do int dig here*/}
      <img src></img>
      {/* if showDescription = true do ... here */}

      <div className="media">{/* <img src="" alt="" /> */}</div>
      <button className="add"></button>

      <button className="remove"> {productId}</button>

      <div className="product-quantity">{quantity}</div>
      {/* if blank here */}
    </div>
  );
}
