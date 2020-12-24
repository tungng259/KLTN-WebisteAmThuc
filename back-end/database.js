const mongoose = require("mongoose");
const url = 'mongodb+srv://VFoodDB:VFoodDB@cluster0.lko9z.mongodb.net/VFoodDB?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') } else { console.log('Err In Connect MongoDB: ' + err) }
});
const conn = mongoose.connection;
require("./Modules/users");