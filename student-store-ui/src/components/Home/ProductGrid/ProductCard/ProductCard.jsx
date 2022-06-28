import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  const [quantity, setquant] = React.useState(0);

  function handleAddItemToCart() {
    setquant(quantity + 1);
  }
  function handleRemoveItemFromCart() {
    setquant(quantity - 1);
    if (quantity < 1) {
      setquant(0); //keeps above 0
    }
  }
  let newId = parseInt(productId) + 1;
  return (
    <div className="product-card">
      <Link
        to={`/products/${newId}`}
        // wrong ^
      >
        <img className="productImage" src={product.image}></img>
      </Link>
      <div className="product-name"> {product.name} </div>
      <div className="product-description"></div>
      &#9733; &#9733; &#9733; &#9733; &#9734;
      <div className="product-price"> ${product.price}</div>
      {/*figure out how to do int dig here*/}
      {/* if showDescription = true do ... here */}
      {/* <div className="media"></div> */}
      <button className="add" onClick={handleAddItemToCart}>
        +
      </button>
      <div className="product-quantity">{quantity}</div>
      <button className="remove" onClick={handleRemoveItemFromCart}>
        -
      </button>
      {/* if blank here */}
    </div>
  );
}
