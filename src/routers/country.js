const express = require("express");
const addCountry = require("../controllers/country/add/addCountry");
const getCountry = require("../controllers/country/getCountry");
const verified = require("../middlewares/verified");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");

const country = express.Router();

country.get("/", getCountry);
country.post("/addCountry",auth, verified, admin, addCountry);

exports.countryRouter = country;