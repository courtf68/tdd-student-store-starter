import * as React from "react";
import "./Sidebar.css";

// may have to def shoppingCart + more here or see if in app
export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = () => {},
}) {
  // console.log("side workss");
  return (
    <section className={isOpen ? "open" : "close"}>
      <p>Sidebar</p>
      <button className="toggle-button" onClick={handleOnToggle}>
        click
      </button>
      <div className="cart">
        <a href="">
          Cart<i className="material-icons">shopping_cart</i>
        </a>
      </div>
      {/* call onopen prop n toggle here  + display sum*/}
      {/* when closed have right params  */}
    </section>
  );
}
