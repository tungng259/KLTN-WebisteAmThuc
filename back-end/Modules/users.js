const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    avatar: {
        type: String
    },
    isAdmin:{
        type:Boolean
    }
});

module.exports = mongoose.model("User", userSchema);