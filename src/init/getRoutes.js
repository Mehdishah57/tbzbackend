const express = require("express");
const cors = require("cors");
const { userRouter } = require("../routers/user");
const { productRouter  } = require("../routers/product");
const { categoryRouter } = require("../routers/category");
const { countryRouter } = require("../routers/country");

const getRoutes = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use("/api/user",userRouter);
    app.use("/api/product",productRouter);
    app.use("/api/category",categoryRouter);
    app.use("/api/country", countryRouter);
}

module.exports = getRoutes;