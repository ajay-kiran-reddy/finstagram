const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  handleLikePost,
  handleUnLikePost,
  handleAddComment,
  handleUpdateComment,
  handleDeleteComment,
  handleLikeComment,
  handleUnLikeComment,
} = require("../controllers/post.controller");
const route = express.Router();

route.post("/", (req, res) => {
  return createPost(req, res);
});

route.put("/:id", (req, res) => {
  return updatePost(req, res);
});

route.delete("/:id", (req, res) => {
  return deletePost(req, res);
});

route.put("/like/:id", (req, res) => {
  return handleLikePost(req, res);
});

route.put("/unLike/:id", (req, res) => {
  return handleUnLikePost(req, res);
});

route.put("/addComment/:id", (req, res) => {
  return handleAddComment(req, res);
});

route.put("/updateComment/:id", (req, res) => {
  return handleUpdateComment(req, res);
});

route.put("/deleteComment/:id", (req, res) => {
  return handleDeleteComment(req, res);
});

route.put("/likeComment/:id", (req, res) => {
  return handleLikeComment(req, res);
});

route.put("/unLikeComment/:id", (req, res) => {
  return handleUnLikeComment(req, res);
});

module.exports = route;
