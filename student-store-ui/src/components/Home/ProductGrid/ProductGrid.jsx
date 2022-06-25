// container
import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="product-grid">
      {products.map((item) => {
        return (
          <ProductCard
            showDescription={false}
            item={item}
            productId={item.id}
            quantity={shoppingCart.quantity}
            handleAddITemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
        );
      })}
    </div>
  );
}
// iterate
