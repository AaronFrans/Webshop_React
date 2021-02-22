import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../store/cart/slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const calculatePrice = (price, amount) => {
    return price * amount;
  };

  const { item, id } = props;

  return (
    <>
      <div key={id + "grid"} className="grid-container">
        <div key={id + "griditem 1"} className="item1">
          {item.quantity}x
        </div>
        <div key={id + "griditem 2"} className="item2">
          {item.name}
        </div>
        <div key={id + "griditem 3"} className="item3">
          € {calculatePrice(item.price,item.quantity )}
        </div>
        <div key={id + "griditem 4"} className="item4">
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(removeItemFromCart(item.id));
            }}
          >
            Remove
          </Button>{" "}
        </div>
      </div>
    </>
  );
};

export default Cart;
