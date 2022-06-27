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
    <section className={isOpen ? "sidebar" : "close"}>
      <p>Sidebar</p>
      <button className="toggle-button" onClick={handleOnToggle}>
        open
      </button>
      {/* call onopen prop n toggle here  + display sum*/}
      {/* when closed have right params  */}
    </section>
  );
}
