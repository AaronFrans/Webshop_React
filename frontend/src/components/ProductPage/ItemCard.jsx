import React from "react";
import "./ProductPage.css";
import { useDispatch} from 'react-redux';
import { Button } from "@material-ui/core";
import {addItemToCart} from "../../store/cart/slice"

const ItemCard = (props) => {
  const dispatch = useDispatch();

  const { item, id } = props;

  const descriptionCheck = (description) => {
    if (description.length > 60) return description.substring(0, 59) + `...`;
    else return description;
  };

  return (
    <>
      <li key={id} value={id} className="card-li">
        <table key={id + "table"} className="card">
          <tbody key={id + "tablebody"}>
            <tr key={id + "tablerow 1"}>
              <td key={id + "tablerow 1 column 1"}>{item.name}</td>
              <td key={id + "tablerow 1 column 2"} className="price-text">{item.price}</td>
            </tr>
            <tr key={id + "tablerow 2"}>
              <td key={id + "tablerow 2 column 1"}>{descriptionCheck(item.description)}</td>
              <td key={id + "tablerow 2 column 2"}>
                <Button onClick={() => {
                  dispatch(addItemToCart(item))
                  }} key={id + "tablerow 2 button"} variant="outlined">Order</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
    </>
  );
};

export default ItemCard;
