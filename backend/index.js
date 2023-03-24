const express = require("express");
const cors = require("cors");
const mongooose = require("mongoose");

const products = require("./services/products");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");

require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
    res.send("Welcome to our online shop");
});

app.get("/products", (req, res) => {
    res.send(products);
});

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;
console.log(uri);

app.listen(port, console.log(`server is running on port ${port}`));

mongooose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connection successful.."))
.catch((err) => console.log("MongoDb connection failed", err.message));
