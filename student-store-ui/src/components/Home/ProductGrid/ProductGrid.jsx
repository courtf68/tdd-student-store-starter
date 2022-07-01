// container
import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard/ProductCard";
import Logo from "../../Navbar/Logo/Logo";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  setShoppingCart,
  shoppingCart,
}) {
  return (
    <div className="product-grid">
      {products.map((prod, i) => {
        // can try using prod names , put in other components, YT
        return (
          <ProductCard
            product={prod}
            productId={i}
            key={i}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemToCart}
            showDescription="false"
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
          />
        );
      })}
    </div>
  );
}
// iterate
