// container
import * as React from "react";
import "./ProductGrid.css";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  // React.useEffect(() => {
  //   console.log (products);
  // });

  return (
    <div className="prodGrid">
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
