const express = require("express");
const router = express.Router();

const Place = require("../Modules/places")

// get all place
router.get('/699f071e-f8c7-40a3-8bfa-0ace8bac87e4', async(req, res) => {
    try {
        const places = await Place.find();
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});
// search place by name
router.get('/aee1266f-b0e0-4c55-ba53-c1589c8565dd', async(req, res) => {
    try {
        const places = await Place.find({ name: req.body.name, status: 1 });
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});

// search place by region
router.get('/6f0421d5-4357-49f8-8b24-14f79bea7f33', async(req, res) => {
    try {
        const places = await Place.find({ address: { city: req.body.city, district: req.body.district }, name: req.body.name, status: 1 });
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});

//post new place
router.post('/6f0421d5-4357-49f8-8b24-14f79bea7f33', (req, res) => {
    var places = new Place();
    places.name = req.body.name;
    places.openingtime = req.body.openingtime;
    places.picture = req.body.picture;
    places.price = req.body.price;
    places.address = {
        city: req.body.city,
        district: req.body.district,
        address: req.body.address
    }
    places.status = 0
    try {
        users.save();
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});
//update place or admin accept post the place
router.post('/cfc9853d-2866-473d-b274-88d838ea29c1', async(req, res) => {
    const places = await User.findOne({ _id: req.id });
    places.name = req.body.name;
    places.openingtime = req.body.openingtime;
    places.picture = req.body.picture;
    places.price = req.body.price;
    places.address = {
        city: req.body.city,
        district: req.body.district,
        address: req.body.address
    }
    places.status = 1
    try {
        users.save();
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});