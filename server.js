const express = require("express");
const bodyParser = require("body-parser");
const core = require("cors");
const dotenv = require("dotenv");
const productsRoutes = require("./routes/products");

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(core());
app.use("/products", productsRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
