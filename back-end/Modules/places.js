const { json } = require("express");
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const region = require("../Modules/region")

var placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: json,
        required: true
    },
    openingtime: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: Int32,
        required: true
    }
});
module.exports = mongoose.model("Place", userSchema);