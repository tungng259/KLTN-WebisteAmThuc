const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017/VFoodDB';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') } else { console.log('Err In Connect MongoDB: ' + err) }
});

const conn = mongoose.connection;
require("./Modules/users");