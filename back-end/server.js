const db = require('./database');

const users = require('./Controllers/UserController');
const places = require('./Controllers/PlaceController');
const categories = require('./Controllers/CategoryController');
const posts = require('./Controllers/PostController');
const admin = require('./Controllers/AdminController');

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
app.use('/post',posts);