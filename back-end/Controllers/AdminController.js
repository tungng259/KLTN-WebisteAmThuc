const express = require("express");
const User = require("../Modules/users");
const Category = require("../Modules/category");
const Place = require("../Modules/places");
const Post = require("../Modules/post");
const router = express.Router();

//Authentication admin (Login AdminPage)
router.post('/0508c70f-e907-4d2a-a718-479e6fab5749', async(req, res) => {
    const checkuser = await User.findOne({ username: req.body.username });
    if (checkuser == null) {
        res.json({ 'Sucessful': false });
    } else if ((checkuser.isAdmin != true) || (checkuser.password != req.body.password) ) {
        res.json({ 'Sucessful': false });
    } else {
        res.json({ checkuser, 'Sucessful': true });
    }
});

//accept post new place
router.post('/38125532-3ba8-4019-a7ea-17d88ea3cb32',(req,res)=>{
    Place.updateOne({_id: req.body._id},{
        status = true
    })
});
//delete user
router.post('/d9bf9936-c269-401e-a811-bb2b19b40be6',(req,res)=>{
    Place.deleteOne({_id: req.body._id})
});

//get reported post
router.get('/d9bf9936-c269-401e-a811-bb2b19b40be6',(req,res)=>{
    var count = User.count();
    if(count <=10){
        reportedPost = Post.find({reported: { $gte: count/3 } });
    }
    else{
        reportedPost = Post.find({reported: { $gte: 10 } });
    }
    res.json({ reportedPost});
});

module.exports = router;