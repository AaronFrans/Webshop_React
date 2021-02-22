import React from "react";
import "../CartPage/CartPage.css";
import ConfirmItem from "../ConfirmPage/ConfirmItem";

const OrderDetails = (props) => {
  const { details } = props;

  return (
    <>
      <div>
        {details.firstName} {details.lastName} <br />
        {details.street} {details.number} <br />
        {details.postalCode}, {details.city} <br />
        {details.email} <br />
        {details.telephoneNumber}
      </div>

      <div >
        <ul>
          {details &&
            details.items.map((item, index) => (
              <ConfirmItem key={index + " cartitem"} item={item} id={index} />
            ))}
        </ul>
      </div>

      <div>
      <p>
        
          Total: €{details.totalPrice}
      </p>
      </div>
    </>
  );
};

export default OrderDetails;
