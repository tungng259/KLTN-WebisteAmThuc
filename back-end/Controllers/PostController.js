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
  var upload = multer({storage:storage});

// get all post by user
router.get('/07f59b0f-31db-4e34-b998-c494a2af9520/:iduser', async(req, res) => {
    try {
        const posts = await Post.find({userPost:req.params.iduser});
        res.json(posts);
    } catch (err) {
        res.send('Error' + err);
    }
});

//get all post by place
router.get('/6f65f910-b4c7-4276-9410-dbb46b1f7ad6/:idplace', async(req, res) => {
    try {
        const posts = await Post.find({place:req.params.idplace});
        res.json(posts);
    } catch (err) {
        res.send('Error' + err);
    }
});

//get one post (detail post)
router.post('/4911b499-bc8a-42a9-8cf0-34b1dd7f3c71/:idpost', async(req, res) => {
    try {
        const post = await Post.findOne({_id:req.params.id});
        if(req.body.id_user != null){
            var result = checkliked(post._id,req.body.id_user);
            res.json(post, {isLiked : result});
        }
        else{
            res.json(post);
        }
    } catch (err) {
        res.send('Error' + err);
    }
});

//create new post
router.post('/5469597b-3042-4088-a657-599bf3d9b1ba', upload.single('postImage'), (req, res) => {
    let postTime = new Date();
    var post = new Post();
    post.title = req.body.title,
    post.image = req.file.filename,    
    post.place =req.body.place,
    post.content = req.body.content,
    post.userPost = req.body.userPost,
    post.postDate = postTime,
    post.rating =req.body.rating,
    post.updateDate = null,
    post.like = 0,
    post.reported = 0
    try {
        updateRatingPlace(req.body.place);
        post.save();
        res.json(post);
    } catch (err) {
        res.send('Error' + err);
    }
});

function updateRatingPlace(id,rating){
    try {
        const place =  Place.findById(id);
        const sum = place.rating + rating;
        const count = Post.count({place:id});
        place.rating = sum/count;
        Place.updateOne({_id: place._id},{
            rating : place.rating
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
            await Post.findOneAndUpdate({_id: req.body._id},{
                image  :req.files.filename
            })
        }
        await Post.findOneAndUpdate({_id: req.body._id},{
            title : req.body.title,  
            place : req.body.place,
            content : req.body.content,
            updateDate : updateTime,
            rating : req.body.rating,
        });
        res.json({'Sucessful': true });
    }
    catch (err) {
        res.send('Error' + err);
    }
});

//like Post-unlike Post
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
    const likes = new Like();
    likes.id_user = id_User,
    likes.id_post = id_Post
    likes.save();
}

function decreaseLikePost(id_User,id_Post){
    var post = Post.findOne({_id:id_Post});
    var count = post.like;
    Post.findByIdAndUpdate(id_Post,{like: --count});
    Like.deleteOne({id_user:id_User,id_Post:id_Post});
}

//check is post liked
//check is user followed ?
function checkliked(id_Post,id_User){
    Like.find({id_post:id_Post}).forEach(function () {
        if(id_user == id_User ) return true;
    });
    return false;
}

module.exports = router;