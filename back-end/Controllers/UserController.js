const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../Modules/users")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/img/user')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

// get all user
router.get('/077137bb-22ec-479c-8be3-62dd5c9e599d', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.send('Error' + err);
    }

});

//add user (Sign-up)
router.post('/6e45ab7f-4ccc-451b-8e8a-fca558df5f0c', async(req, res) => {
    const checkuser = await User.findOne({ username: req.body.username });
    if (checkuser == null) {
        var users = new User();
        users.username = req.body.username;
        users.password = req.body.password;
        users.fullname = req.body.fullname;
        users.isAdmin = false;
        try {
            users.save();
            res.json({ users, 'Sucessful': true });
        } catch (err) {
            res.json({ 'Error': err });
        }
    } else {
        res.json({ 'Sucessful': false });
    }
});
//Authentication (Sign-in)
router.post('/4b3735b2-533d-4963-9e39-8cb61f3d1198', async(req, res) => {
    const checkuser = await User.findOne({ username: req.body.username });
    if (checkuser == null) {
        res.json({ 'Sucessful': false });
    } else if (checkuser.password != req.body.password) {
        res.json({ 'Sucessful': false });
    } else {
        res.json({ checkuser, 'Sucessful': true });
    }
});
// get user by id
router.get('/077137bb-22ec-479c-8be3-62dd5c9e599d/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.send('Error' + err);
    }
});
//update information user
router.post('/509b6cf0-3996-4853-8e28-1dcd93ac14f2/',upload.single('userImage'), async(req, res) => {
    try {
        if(req.file){
            User.updateOne({_id: req.body._id},{
                avatar = req.file.filename
            });
        }
        User.updateOne({_id: req.body._id},{
            username = req.body.username,
            password = req.body.password,
            fullname = req.body.fullname,
            phone = req.body.phone
        });
        
        res.json({'Sucessful': true });
    } catch (err) {
        res.send('Error' + err);
    }
});


module.exports = router;