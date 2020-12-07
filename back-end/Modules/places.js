const { json } = require("express");
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const { schema } = require("./users");


var placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: JSON,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    categories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    }],
    image:{
        type:[]
    },
    rating:{
        type:Number
    },
    status:{
        type:Boolean
    }
})
module.exports = mongoose.model("Place", placeSchema);