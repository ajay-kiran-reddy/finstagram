const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const handleUserSignUp = (req, res) => {
  const { email, userName, password } = req.body;
  let hashedPassword = "";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      hashedPassword = hash;
    });
  });
  User.findOne({ email })
    .then((user) => {
      if (user) {
        res
          .status(409)
          .json({ message: "User already exists with the given email." });
      } else {
        const user = new User({ ...req.body, password: hashedPassword });
        user
          .save()
          .then((response) =>
            res
              .status(201)
              .json({ message: "User has been created successfully." })
          )
          .catch((error) =>
            res.status(500).json({ message: "Failed to create user", error })
          );
      }
    })
    .catch((error) =>
      res.status(500).json({
        message:
          "Unable to process your request now. Please contact support team.",
        error,
      })
    );
};

const handleUserSignIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .select("+password")
    .then((user) => {
      if (user) {
        console.log(user, "[user]");
        const dbPassword = user.password;
        bcrypt.compare(password, dbPassword, function (err, result) {
          if (result === true) {
            res.status(200).json({ message: "Successfully logged in.", user });
          } else {
            res.status(400).json({
              message: "Your email or password is incorrect, please check.",
            });
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No user was found with the given email id." });
      }
    })
    .catch((error) =>
      res.status(500).json({
        message:
          "Unable to process your request, please reach out to our support team.",
        error,
      })
    );
};

const updateUserInfo = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((result) =>
      res
        .status(200)
        .json({ message: "User updated successfully", user: result })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to update user", error })
    );
};

const fetchUserInfo = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) =>
      res
        .status(200)
        .json({ message: "User information fetched successfully", user })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to fetch user info", error })
    );
};

const fetchAllUsers = (req, res) => {
  User.find()
    .then((users) =>
      res.status(200).json({ message: "All users fetched successfully", users })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to fetch all users", error })
    );
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Deleted the user successfully" })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to delete the user", error })
    );
};

const handleFollowUser = (req, res) => {
  const updateUser = User.findByIdAndUpdate(
    { _id: req.body.userId },
    { $addToSet: { followers: req.body.followerId } },
    { new: true }
  ).exec();

  const updateFollower = User.findByIdAndUpdate(
    { _id: req.body.followerId },
    { $addToSet: { following: req.body.userId } },
    { new: true }
  ).exec();

  Promise.all([updateUser, updateFollower])
    .then((user) =>
      res.status(200).json({ message: "Successfully followed", user })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to follow", error })
    );
};

const handleUnFollowUser = (req, res) => {
  const updateUser = User.findByIdAndUpdate(
    { _id: req.body.userId },
    { $pull: { followers: req.body.followerId } },
    { new: true }
  ).exec();

  const updateFollower = User.findByIdAndUpdate(
    { _id: req.body.followerId },
    { $pull: { following: req.body.userId } },
    { new: true }
  ).exec();

  Promise.all([updateUser, updateFollower])
    .then((user) =>
      res.status(200).json({ message: "Un followed successfully", user })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to un follow", error })
    );
};

module.exports = {
  handleUserSignUp,
  handleUserSignIn,
  updateUserInfo,
  fetchUserInfo,
  fetchAllUsers,
  deleteUser,
  handleFollowUser,
  handleUnFollowUser,
};
