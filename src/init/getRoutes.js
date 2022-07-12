const express = require("express");
const cors = require("cors");
const { userRouter } = require("../routers/user");
const { productRouter  } = require("../routers/product");

const getRoutes = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use("/api/user",userRouter);
    app.use("/api/product",productRouter);
}

module.exports = getRoutes;