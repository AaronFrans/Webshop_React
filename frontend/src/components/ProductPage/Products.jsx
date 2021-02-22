import React from "react";
import "./ProductPage.css";
import ItemCard from "./ItemCard";

const Products = (props) => {

  const { items } = props;
  return (
    <>
      <h1>Products</h1>
      <ul className="card-ul" >
        {items &&
        items.map((item, index) => <ItemCard key={index + " itemcard"} item={item} id={index}/>)}
      </ul>
    </>
  );
};

export default Products;
