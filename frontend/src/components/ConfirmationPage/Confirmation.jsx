import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDetails from "./OrderDetails"

const Confirmation = () => {
  const orderId = useParams().id;

  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:6969/order/${orderId}`).then((response) => {
        setOrder(response.data);
    });
  }, [orderId]);

  return (
    <>
      <h1>Bestelling met id: {orderId}</h1>
        {
           order &&
            <OrderDetails details={order} />
        }

    </>
  );
};

export default Confirmation;
