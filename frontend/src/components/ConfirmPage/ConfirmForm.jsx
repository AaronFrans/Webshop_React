import React from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./ConfirmPage.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { removeAllItems } from "../../store/cart/slice";
import { useDispatch} from 'react-redux';

const ConfirmForm = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const { totalPrice } = props;

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      street: "",
      number: "",
      postalCode: "",
      city: "",
      email: "",
      telephoneNumber: "",
      totalPrice: totalPrice,
      items: cartState,
    },
    onSubmit: (values) => {
      axios
        .post(`http://localhost:6969/order/`, values)
        .then(function (response) {
          console.log(response);
          dispatch(removeAllItems());
          history.push("/confirmation/" + response.data);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid-form">
        <label className="container-item" htmlFor="firstName">
          First name:
        </label>
        <input
          className="container-item"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label className="container-item" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="container-item"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label className="container-item" htmlFor="street">
          Street Name:
        </label>
        <input
          className="container-item"
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.street}
        />
        <label className="container-item" htmlFor="number">
          Street Number:
        </label>
        <input
          className="container-item"
          id="number"
          name="number"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        <label className="container-item" htmlFor="postalCode">
          Zip Code:
        </label>
        <input
          className="container-item"
          id="postalCode"
          name="postalCode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
        />
        <label className="container-item" htmlFor="city">
          City:
        </label>
        <input
          className="container-item"
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <label className="container-item" htmlFor="email">
          Email:
        </label>
        <input
          className="container-item"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label className="container-item" htmlFor="telephoneNumber">
          Telephone number:
        </label>
        <input
          className="container-item"
          id="telephoneNumber"
          name="telephoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.telephoneNumber}
        />
      </div>
      <Button type="submit" fullWidth variant="outlined">
        Order
      </Button>
    </form>
  );
};

export default ConfirmForm;
