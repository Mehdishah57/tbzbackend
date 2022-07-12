const express = require("express");
const addProduct = require("../controllers/product/add/addProduct");
const auth = require("../middlewares/auth");
const verified = require("../middlewares/verified");

const product = express.Router();

product.get("/", (req,res) => res.status(200).send([]));
product.post("addProduct", auth, verified, addProduct);

exports.productRouter = product;