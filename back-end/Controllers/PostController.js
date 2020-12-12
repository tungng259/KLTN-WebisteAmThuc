const express = require("express");
const multer = require("multer");

const Post = require("../Modules/post");
const Place = require("../Modules/places");
const Like = require("../Modules/likePost");

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/img/post')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    } 
  })

// get all post by user
router.get('/07f59b0f-31db-4e34-b998-c494a2af9520/:id', async(req, res) => {
    try {
        const posts = await Post.find({user:id, status:true});
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});

//get all post by place
router.get('/6f65f910-b4c7-4276-9410-dbb46b1f7ad6/:id', async(req, res) => {
    try {
        const posts = await Post.find({place:id, status:true});
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});

//get one post (detail post)
router.get('/4911b499-bc8a-42a9-8cf0-34b1dd7f3c71/:id', async(req, res) => {
    try {
        const posts = await Post.findOne({_id:id, status:true});
        res.json(places);
    } catch (err) {
        res.send('Error' + err);
    }
});

//create new post
router.post('/5469597b-3042-4088-a657-599bf3d9b1ba', upload.single('postImage'), (req, res) => {
    let postTime = new Date();
    var post = new Post(
        title = req.body.name,
        image = req.file.filename,    
        place =req.body.place,
        content = req.body.content,
        userPost = req.body.userPost,
        postDate = postTime,
        rating =req.body.rating,
        reported = 0
    );
    try {
        updateRatingPlace(req.body.place);
        post.save();
        res.json(post);
    } catch (err) {
        res.send('Error' + err);
    }
});

function updateRatingPlace(id){
    try {
        const place = await Place.findById(id);
        place.rating = place.rating + req.body.rating;
        Place.updateOne({_id: place._id},{
            rating = place.rating
        })
    } catch (err) {
        res.send('Error' + err);
    }
}

//update post
router.post('/075313a0-481a-4a13-9765-3f14ee17b612', async(req, res) => {
    try {
        let updateTime = new Date();
        if(req.file){
            Post.updateOne({_id: req.body._id},{
                image =req.files.filename
            })
        }
        Post.updateOne({_id: req.body._id},{
            title = req.body.name,  
            place =req.body.place,
            content = req.body.content,
            userPost = req.body.userPost,
            updateDate = updateTime,
            rating =req.body.rating,
        })
        res.json({'Sucessful': true });
    }
    catch (err) {
        res.send('Error' + err);
    }
});

//like post
router.post('/094a0019-5f18-4c53-b8fc-a8142a21e622', async(req, res) => {
    try {
        checklike = Like.findOne({id_user: req.body.id_user,id_post: req.body.id_post});
        if(checklike == null){
            increaseLikePost(req.body.id_user,req.body.id_post);
        }
        else{
            decreaseLikePost(req.body.id_user,req.body.id_post);
        }
        res.json({'Sucessful': true });
    }
    catch{
        res.send('Error' + err);
    }
});

function increaseLikePost(id_User,id_Post){
    var post = Post.findOne({_id:id_Post});
    var count = post.like;
    Post.findByIdAndUpdate(id_Post,{like: ++count});
    const like = new Like(
        id_user = id_User,
        id_post = id_Post
    )
    Like.save();
}

function decreaseLikePost(id_User,id_Post){
    var post = Post.findOne({_id:id_Post});
    var count = post.like;
    Post.findByIdAndUpdate(id_Post,{like: --count});
    Like.deleteOne({id_user:id_User,id_Post:id_Post});
}

module.exports = router;