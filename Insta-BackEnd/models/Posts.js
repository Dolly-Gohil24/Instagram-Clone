const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new Schema({
  // title: { type: String, required: true }, // String is shorthand for {type: String}
  caption: { type: String, required: true },
  // tag: { type: String, required: true },
  photo: {
    type: String,
    require: true,
  },
  date: { type: Date, default: Date.now },
  postedBy: {
    type: ObjectId,
    ref: "user",
  },
});

const Posts = mongoose.model("posts", PostSchema);
// User.createIndexes();
module.exports = Posts;
