import * as React from "react";
// import "./ProductView.css";

// import ProductCard from "../../Home/ProductGrid/ProductCard/ProductCard";

//send is open as props to shopping cart and checkout form comp.
// export default function shoppingCart({
//   isOpen,
//   product,
//   products,
//   quantity,
//   handleAddItemToCart,
//   handleRemoveItemToCart,
//   shoppingCart,
// }) {
//       // <div className="notification">
//       // No items added to cart yet. Start shopping now!
//       // </div>
//       return (
//       <div>
//         shoppingCart.map((cartItem) => {
//            return (
//         <div className="cart">
//           <h1 className="cart-product-name"> {product.name} </h1>
//           <h2 className="cart-product-quantity"> {product.quantitiy}</h2>
//           <p className="product-name"> {product.name} </p>
//           {/* products[cartItem.productID].name */}
//           <p className="product-unit-price">{product.price} </p>
//           <p className="price">{(item.quantity * product.price).toFixed(2)}</p>
//         </div>
//            )
//           </div>

// }

export default function ShoppingCart({
  isOpen,
  products,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) {
  return (
    <div className="cart">
      {shoppingCart.map((item) => {
        return (
          <div className="cart-info">
            <h1 className="cart-product-name">
              product name
              {/* {products[item.productID].name} */}
            </h1>
            <h2 className="cart-product-quantity">
              {products[item.productID].quantity}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
