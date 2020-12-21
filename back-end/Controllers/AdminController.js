const express = require("express");
const User = require("../Modules/users");
const Category = require("../Modules/category");
const Place = require("../Modules/places");
const Post = require("../Modules/post");
const router = express.Router();

const bcrypt = require('bcryptjs');
const { json } = require("body-parser");

//Authentication admin (Login AdminPage)
router.post('/0508c70f-e907-4d2a-a718-479e6fab5749', async(req, res) => {
    const checkuser = await User.findOne({ username: req.body.username });
    if (checkuser == null) {
        res.json({ 'Sucessful': false });
    } else if ((checkuser.isAdmin != true) || !bcrypt.compare(req.body.password,checkuser.password) ) {
        res.json({ 'Sucessful': false });
    } else {
        res.json({ checkuser, 'Sucessful': true });
    }
});
// get all place need be accepted
router.get('/9498b701-7324-4825-b5b2-895bc471ec78', async(req, res) => {
    try {
        const places = await Place.find({status:false});
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});
//accept post new place
router.post('/38125532-3ba8-4019-a7ea-17d88ea3cb32',async(req,res)=>{
    await Place.findOneAndUpdate({_id: req.body.id},{
        status : true
    })
    res.json(Place.findOne({_id: req.body.id}));
});
//delete user
router.post('/d9bf9936-c269-401e-a811-bb2b19b40be6',async(req,res)=>{
    await User.findOneAndDelete({_id: req.body.id})
    res.json({"Result":"Delete Successful"});
});

//get reported post
router.get('/7d075fed-f74a-4c94-8897-331430d92514',async(req,res)=>{
    var count = User.count();
    if(count <=10 ){
        reportedPost = await Post.find({reported: { $gte: count/3 } });
    }
    else{
        reportedPost = await Post.find({reported: { $gte: 10 } });
    }
    res.json({ reportedPost});
});

module.exports = router;