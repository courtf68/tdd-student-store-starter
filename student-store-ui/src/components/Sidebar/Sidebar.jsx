import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart";

// may have to def shoppingCart + more here or see if in app
export default function Sidebar({
  isOpen, //send is open as props to shopping cart and checkout form comp.
  shoppingCart,
  products,
  setShoppingCart,
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
  // const cart = isOpen ? (
  //   <ShoppingCart
  //     shoppingCart={shoppingCart}
  //     isOpen={isOpen}
  //     products={products}
  //     setShoppingCart={setShoppingCart}
  //   />
  // ) : (
  //   ""
  // );
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
      <ShoppingCart
        shoppingCart={shoppingCart}
        // isOpen={isOpen}
        products={products}
        // setShoppingCart={setShoppingCart}
      />
    </section>
  );
}
