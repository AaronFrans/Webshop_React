require(`dotenv`).config();
const cors = require('cors');

const helmet = require(`helmet`);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors())

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet())

app.use("/", routes);

app.listen(process.env.PORT);