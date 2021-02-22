import React from "react";
import "../CartPage/CartPage.css";
import { useSelector } from "react-redux";
import ConfirmItem from "./ConfirmItem";
import ConfirmForm from "./ConfirmForm"

const Confirm = () => {
  const cartState = useSelector((state) => state.cart);

  const calculatePrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.amount * item.price;
    });

    return Math.round((totalPrice + Number.EPSILON) * 100) / 100;
  };
  return (
    <>
      <h1>Shopping cart</h1>
      <div className="cart-div" >
        <ul>
          {cartState &&
            cartState.map((item, index) => (
              <ConfirmItem key={index + " cartitem"} item={item} id={index} />
            ))}
        </ul>
      </div>

      <p>
        {calculatePrice(cartState) > 0 &&
          `Total: € ${calculatePrice(cartState)}`}
      </p>

      <h1>Info</h1>

      <ConfirmForm totalPrice={calculatePrice(cartState)} />
    </>
  );
};

export default Confirm;
