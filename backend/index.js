const express = require("express");
const cors = require("cors");

const products = require("./services/products");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to our online shop");
});

app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(5000, console.log("server is running on port 5000"));