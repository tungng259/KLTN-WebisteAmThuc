const db = require('./database');

const users = require('./Controllers/UserController');
const places = require('./Controllers/PlaceController');
const category = require('./Controllers/CategoryController');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(9000, function() {
    console.log('Server Started');
});

app.use('/user', users);
app.use('/place', places);
app.use('/category',category);