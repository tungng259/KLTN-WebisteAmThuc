const express = require("express");
const router = express.Router();

const User = require("../Modules/users")

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

module.exports = router;