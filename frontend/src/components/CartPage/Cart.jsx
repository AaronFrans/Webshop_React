import React from "react";
import { Button } from "@material-ui/core";
import "./CartPage.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const cartState = useSelector((state) => state.cart);

  const calculatePrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });

    return Math.round((totalPrice + Number.EPSILON) * 100) / 100;
  };
  return (
    <>
      <h1>Shopping cart</h1>
      <div className="cart-div">
          {cartState &&
            cartState.map((item, index) => (
              <CartItem key={index + " cartitem"} item={item} id={index} />
            ))}
      </div>

      <p>
        {calculatePrice(cartState) > 0 &&
          `Total: € ${calculatePrice(cartState)}`}
      </p>
      {calculatePrice(cartState) > 0 && (
        <Button
          onClick={() => history.push("/confirm")}
          fullWidth
          variant="outlined"
        >
          Order
        </Button>
      )}
    </>
  );
};

export default Cart;
