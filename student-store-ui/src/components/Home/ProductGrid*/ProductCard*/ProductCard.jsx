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
      <p>title here</p>
      <img src></img>
    </div>
  );
}
