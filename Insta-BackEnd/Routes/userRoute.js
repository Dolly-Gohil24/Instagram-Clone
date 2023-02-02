const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult, check } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Posts = require("../models/Posts");

router.post(
  "/createUser",
  [
    check(
      "password",
      "Please enter a password at least 5 character and contain At least one uppercase.At least one lower case "
    )
      .isLength({ min: 5 })
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
    body("email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { name, username, email, password } = req.body;

    if (!name || !password || !username || !email) {
      return res.send("please provide all fields");
    }
    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (user) {
      success = false;
      return res.status(403).json({
        success,
        message: "User already exists with username or emailId",
      });
    }

    const salt = await bcrypt.genSaltSync(10);
    const hashpass = await bcrypt.hashSync(password, salt);

    const newuser = await new User({
      name,
      username,
      email,
      password: hashpass,
    });
    newuser.save();
    const data = {
      user: {
        id: newuser.id,
      },
    };
    const authtoken = jwt.sign(data, "thisistoken");
    // console.log(newuser);
    success = true;
    res.status(200).json({ success, authtoken: authtoken });
  }
);

router.post(
  "/login",

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const success = false;
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      const user = await User.findOne({ username: req.body.username });
      // console.log(user);
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, messgae: "username not exist. Please Sign up" });
      }
      const correctpass = bcrypt.compareSync(req.body.password, user.password);
      if (correctpass) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, "thisistoken");
        success = true;
        res
          .status(200)
          .json({ success, authToken: authtoken, userDetail: user });
      }
    } catch (error) {
      success = false;
      return res.status(400).json({ success, error: "some error occured" });
    }
  }
);

//Route 3: get user
router.get("/getuser/:id", fetchUser, async (req, res) => {
  // try {

  // let getuser = await User.findById({ _id: req.params.id }).select(
  //   "-password"
  // );
  // res.send(getuser);
  // } catch (error) {
  //   success = false;
  //   return res.status(500).json({ success, error: "internal error" });
  // }

  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Posts.find({ postedBy: req.params.id })
        .populate("postedBy", "_id")
        .exec((err, post) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.status(200).json({ user, post });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "User not found" });
    });
});

// router.put("/uploadPic/:id", fetchUser, async (req, res) => {
//   const { profilepic } = req.body;

//   const updated = {};

//   if (profilepic) {
//     updated.profilepic = profilepic;
//   }

//   const findUser = User.findById(req.params.id);
//   // console.log(findUser);

//   if (!findUser) {
//     const success = false;
//     return res.status(400).json({ success, error: "Not Found" });
//   }

//   // if (findUser.toString() !== req.params.id) {
//   //   return res.status(401).json({ error: "Not allowed to update" });
//   // }

//   const updatedDetail = await User.findByIdAndUpdate(
//     req.params.id,
//     { $set: updated },
//     { new: true }
//   );
//   const success = true;
//   return res.json({ success, updatedDetail });
// });

router.put("/editDetail/:id", fetchUser, async (req, res) => {
  const { name, username, profilepic } = req.body;

  const updated = {};
  if (name) {
    updated.name = name;
  }
  if (username) {
    updated.username = username;
  }
  if (profilepic) {
    updated.profilepic = profilepic;
  }

  const findUser = User.findById(req.params.id);
  // console.log(findUser);

  if (!findUser) {
    const success = false;
    return res.status(400).json({ success, error: "Not Found" });
  }

  // if (findUser.toString() !== req.params.id) {
  //   return res.status(401).json({ error: "Not allowed to update" });
  // }

  const updatedDetail = await User.findByIdAndUpdate(
    req.params.id,
    { $set: updated },
    { new: true }
  );
  const success = true;
  return res.json({ success, updatedDetail });
});

module.exports = router;
