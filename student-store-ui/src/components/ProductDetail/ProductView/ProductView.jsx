import * as React from "react";
import "./ProductView.css";

import ProductCard from "../../Home/ProductGrid/ProductCard/ProductCard";

export default function ProductView({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="product-view">
      <h1 className="product-id">Product # {product.name}</h1>

      <ProductCard
        showDescription={true}
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemToCart}
      />
      {/* nothing here rn tho */}
    </div>
  );
}
