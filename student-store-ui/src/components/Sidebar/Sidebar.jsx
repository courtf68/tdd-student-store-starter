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
  handleOnToggle,
}) {
  console.log("side workss");
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button
        className="toggle-button"
        onClick={() => {
          handleOnToggle(isOpen);
        }}
      >
        open
      </button>
      {/* call onopen prop n toggle here  + display sum*/}
      {/* when closed have right params  */}
    </section>
  );
}
