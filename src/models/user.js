const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 25,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 255,
        required: true
    },
    countryCode: {
        type: Number,
        min: 1,
        max: 99,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    phoneKey: {
        type: String
    },
    phoneNumber: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
        required: true
    },
    image: {
        url: { type: String },
        public_id: { type: String }
    }
})

userSchema.methods.genAuthToken = function(){
    const token = jwt.sign({
        _id: this._id, 
        name: this.name, 
        email: this.email, 
        countryCode: this.countryCode,
        phoneNumber: this.phoneNumber,
        verified: this.verified
    },process.env.JWT_SECRET, { expiresIn: "15d" });
    return token;
}

const User = mongoose.model("User", userSchema);

module.exports = User;