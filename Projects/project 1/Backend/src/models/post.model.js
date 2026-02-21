const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  image: String,
  caption: String,
  fileId:String,

});

const postmodel = mongoose.model("postcollection", PostSchema);

module.exports = postmodel;
