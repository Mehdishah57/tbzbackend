const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;