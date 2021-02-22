const express = require("express");
const db = require("../config");
const { body, validationResult } = require(`express-validator`);
const myDB = require("../config");

const router = express.Router();

router.get("/products", async (req, res, next) => {
  try {
    results = await db.products();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/order/:id", async (req, res) => {
  let re = /^[0-9]+$/;
  try {
    if (re.test(req.params.id)) {
      results = await db.orderForId(req.params.id);
      let order = {
        firstName: results[0].firstName,
        lastName: results[0].lastName,
        street: results[0].street,
        number: results[0].number,
        postalCode: results[0].postalCode,
        city: results[0].city,
        telephoneNumber: results[0].telephoneNumber,
        email: results[0].email,
        totalPrice: results[0].totalPrice,
        items: [],
      };
      results.forEach((result) => {
        order.items.push({
          price: result.price,
          quantity: result.quantity,
          name: result.name,
        });
      });
      res.json(order);
    } else res.send("<p>not a valid id</p>");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post(
  "/order",
  [
    body("firstName").not().isEmpty().trim(),
    body("lastName").not().isEmpty().trim(),
    body("street").not().isEmpty().trim(),
    body("number").trim().isFloat(),
    body("postalCode").not().isEmpty().trim(),
    body("city").not().isEmpty().trim(),
    body("telephoneNumber").not().isEmpty().trim(),
    body("email").isEmail().trim(),
    body("items").not().isEmpty(),
    body("items.*.id").isInt(),
    body("items.*.price").trim().isFloat().toFloat(),
    body("items.*.quantity").trim().isInt(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let items = [];
    let totalPrice = 0;

    req.body.items.forEach((item, index) => {
      let boughtItem = {
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      };

      totalPrice += boughtItem.price;

      items.push(boughtItem);
    });

    let order = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      street: req.body.street,
      number: req.body.number,
      postalCode: req.body.postalCode,
      city: req.body.city,
      telephoneNumber: req.body.telephoneNumber,
      email: req.body.email,
      totalPrice: totalPrice,
    };

    let orderId = await myDB.insertOrder(order);

    items.forEach(async (item) => {
      item.orderId = orderId;

      await myDB.insertOrderLine(item);
    });

    res.send(orderId.toString());
  }
);

module.exports = router;
