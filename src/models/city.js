const mongoose = require("mongoose");

const citySchema = mongoose.Schema({});

const City = mongoose.model("City", citySchema);

module.exports = City;