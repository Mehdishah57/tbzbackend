const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: {
        banner: {
            secure_url: { type: String, required: true },
            public_id: { type: String, required: true }
        },
        1: {
            secure_url: { type: String },
            public_id: { type: String }
        },
        2: {
            secure_url: { type: String },
            public_id: { type: String }
        },
        3: {
            secure_url: { type: String },
            public_id: { type: String }
        },
        4: {
            secure_url: { type: String },
            public_id: { type: String }
        }
    },
    title: {
        type: String,
        minLength: 5,
        maxLenght: 100,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    description: {
        type: String,
        min: 10,
        max: 500,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    country: {
        type: mongoose.Types.ObjectId,
        ref: "Country",
        required: true
    },
    city: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

productSchema.index({"title": "text", "description": "text"});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;