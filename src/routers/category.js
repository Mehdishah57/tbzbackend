const express = require("express");
const addCategory = require("../controllers/category/add/addCategory");
const getCategory = require("../controllers/category/getCategory");
const verified = require("../middlewares/verified");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

const category = express.Router();

category.get("/", getCategory);
category.post("/addCategory",auth, verified, admin, addCategory);

exports.categoryRouter = category;