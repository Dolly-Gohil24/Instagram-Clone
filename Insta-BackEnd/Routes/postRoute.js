const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const Posts = require("../models/Posts");
const router = express.Router();
// const User = require("../models/User");

router.post("/createPost", fetchUser, async (req, res) => {
  const { caption, photo } = req.body;
  console.log(req.body);
  const post = Posts({
    caption,
    photo,
    postedBy: req.user.id,
  });
  post.save();
  res.send(post);
});

router.get("/allPost", fetchUser, async (req, res) => {
  Posts.find()
    .populate("postedBy")
    .then((posts) => {
      res.json(posts);
    });
});

router.put("/likePost", fetchUser, async (req, res) => {
  // console.log(req.user);
  Posts.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { like: req.user.id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        // console.log(result.like.length);
        res.json(result);
      }
    });
});

router.put("/unlikePost", fetchUser, async (req, res) => {
  // console.log(req.user);
  Posts.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { like: req.user.id },
    },
    {
      new: true,
    }
  )
    .populate("postedBy", "_id name Photo")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});
module.exports = router;
