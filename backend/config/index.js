const mysql = require(`mysql`);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

let myDB = {};

myDB.products = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM products", (err, results) => {
      if (err) return reject(err);
      let orders = [];

      results.forEach((value) => {
        orders.push({
          id: value.id,
          name: value.name,
          price: value.price,
          description: value.description,
        });
      });

      return resolve(orders);
    });
  });
};

myDB.orderForId = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "select orders.firstName, orders.lastName, " +
        " orders.street, orders.city, orders.number, orders.postalCode, " +
        "orders.telephoneNumber, orders.email, orders.totalPrice, " +
        "orderlines.price, orderlines.quantity, products.name from orders " +
        "INNER JOIN orderlines  ON orders.id = orderlines.orderId " +
        "INNER JOIN products ON products.id = orderlines.productId where orders.id =?",
      [id],
      (err, results) => {
        if (err) return reject(err);

        if (!results.length) return resolve("No ordxer found for given id.");
        else return resolve(results);
      }
    );
  });
};

myDB.insertOrder = (order) => {
  return new Promise((resolve, reject) => {
    pool.query("INSERT INTO orders SET ?", [order], (err, result) => {
      if (err) return reject(err);

      return resolve(result.insertId);
    });
  });
};

myDB.insertOrderLine = (orderline) => {
  return new Promise((resolve, reject) => {
    pool.query("INSERT INTO orderlines SET ?", [orderline], (err, result) => {
      if (err) return reject(err);

      return resolve("succes");
    });
  });
};

module.exports = myDB;
