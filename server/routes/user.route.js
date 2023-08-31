const express = require("express");
const {
  handleUserSignUp,
  handleUserSignIn,
  updateUserInfo,
  fetchUserInfo,
  fetchAllUsers,
  deleteUser,
  handleFollowUser,
  handleUnFollowUser,
} = require("../controllers/user.controller");
const route = express.Router();

route.get("/allUsers", (req, res) => {
  return fetchAllUsers(req, res);
});

route.put("/followUser", (req, res) => {
  return handleFollowUser(req, res);
});

route.put("/unFollowUser", (req, res) => {
  return handleUnFollowUser(req, res);
});

route.post("/auth/signUp", (req, res) => {
  return handleUserSignUp(req, res);
});

route.post("/auth/signIn", (req, res) => {
  return handleUserSignIn(req, res);
});

route.put("/:id", (req, res) => {
  return updateUserInfo(req, res);
});

route.get("/:id", (req, res) => {
  return fetchUserInfo(req, res);
});

route.delete("/:id", (req, res) => {
  return deleteUser(req, res);
});

module.exports = route;
