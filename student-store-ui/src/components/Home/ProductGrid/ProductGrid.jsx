// container
import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard/ProductCard";
import Logo from "../../Navbar/Logo/Logo";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="ProductGrid">
      {products.map((prod, i) => {
        return (
          <ProductCard
            product={prod}
            productID={i}
            key={i}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemToCart}
            showDescription="false"
          />
        );
      })}
    </div>
  );
}
// iterate
