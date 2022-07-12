const express = require("express");

const dotenvConfig = require("./init/dotenv");
dotenvConfig();

const getRoutes = require("./init/getRoutes");
const connection = require("./init/database");
const app = express();

connection();
getRoutes(app);

const PORT = process.env.PORT || 3500;
app.listen(PORT, ()=>console.log("Running at localhost port: "+PORT));