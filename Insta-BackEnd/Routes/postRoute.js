const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const Posts = require("../models/Posts");
const router = express.Router();
const User = require("../models/User");

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
module.exports = router;
