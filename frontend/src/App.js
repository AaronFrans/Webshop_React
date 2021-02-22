import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Home from "./components/HomePage/Home";
import Products from "./components/ProductPage/Products";
import Cart from "./components/CartPage/Cart";
import Confirm from "./components/ConfirmPage/Confirm";
import Confirmation from "./components/ConfirmationPage/Confirmation";
import axios from "axios";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:6969/products/`).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <Router>
      <header>
        <div className="buttons-flex">
          <Button component={Link} to="/" variant="outlined">
            Home
          </Button>
          <Button component={Link} to="/products" variant="outlined">
            Products
          </Button>
          <Button component={Link} to="/cart" variant="outlined">
            Shopping Cart
          </Button>
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route path="/confirmation/:id">
            <Confirmation />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path={"/products"}>
            <Products items={items} />
          </Route>
          <Route path={"/cart"}>
            <Cart />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </div>
      <footer>
        <p>Aaron Frans</p>
      </footer>
    </Router>
  );
}

export default App;
