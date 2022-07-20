const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength:75,
        required: true
    },
    phone: {
        type: Number,
        min: 0,
        max: 2000,
        required: true
    },
    currency: {
        type: String,
        minLength: 1,
        maxLength: 5,
        required: true
    },
    code: {
        type: String,
        minLength: 1,
        maxLength: 5,
        required: true
    }
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;