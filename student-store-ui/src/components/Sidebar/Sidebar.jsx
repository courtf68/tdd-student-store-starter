import * as React from "react";
import "./Sidebar.css";

// may have to def shoppingCart + more here or see if in app
export default function Sidebar({
  isOpen, //send is open as props to shopping cart and checkout form comp.
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle = () => {},
}) {
  // const sidebarItem = isOpen ? (
  //   <div className="sidebar-open"></div>
  // ) : (
  //   <div className="sidebar"></div>
  // );

  //showing div w shopping cart info, then destruct. ret j has div if it exists.

  // console.log("side workss");
  const cart = isOpen ? (
    <shoppingCart
      shoppingCart={shoppingCart}
      isOpen={isOpen}
      products={products}
    />
  ) : (
    ""
  );
  return (
    <section className={isOpen ? "sidebar-open sidebar" : "sidebar"}>
      <p>Sidebar</p>
      <button className="toggle-button" onClick={handleOnToggle}>
        click
      </button>

      <div className="cart">
        <a href="">
          Cart<i className="material-icons">shopping_cart</i>
        </a>
      </div>
    </section>
  );
}
