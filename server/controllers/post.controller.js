const Post = require("../models/post.model");

const createPost = (req, res) => {
  const post = new Post({ ...req.body });
  post
    .save()
    .then((post) =>
      res
        .status(201)
        .json({ message: "Post has been created successfully", post })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to create post", error })
    );
};

const updatePost = (req, res) => {
  Post.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((post) =>
      res.status(200).json({ message: "Updated the post successfully", post })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to update the post", error })
    );
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Deleted the post successfully" })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to delete the post", error })
    );
};

const handleLikePost = (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    { $addToSet: { likes: req.body.userId } },
    { new: true }
  )
    .then((post) =>
      res.status(200).json({ message: "You have liked the post", post })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to like the post.", error })
    );
};

const handleUnLikePost = (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    { $pull: { likes: req.body.userId } },
    { new: true }
  )
    .then((post) =>
      res.status(200).json({ message: "You have un liked the post", post })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to un like the post.", error })
    );
};

const handleAddComment = (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    { $addToSet: { comments: req.body.comments } },
    { new: true }
  )
    .then((result) =>
      res
        .status(200)
        .json({ message: "Added the comment successfully", result })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to add the comment", error })
    );
};

const handleUpdateComment = (req, res) => {
  Post.updateOne(
    { _id: req.params.id, "comments._id": req.body.comments._id },
    { $set: { "comments.$": req.body.comments } }
  )
    .then((result) =>
      res
        .status(200)
        .json({ message: "Updated the comment successfully", result })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to update the comment", error })
    );
};

const handleDeleteComment = (req, res) => {
  Post.updateOne(
    { _id: req.params.id, "comments._id": req.body.comments._id },
    { $pull: { comments: { _id: req.body.comments } } }
  )
    .then((result) =>
      res
        .status(200)
        .json({ message: "Deleted the comment successfully", result })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to delete the comment", error })
    );
};

const handleLikeComment = (req, res) => {
  console.log("inside controller");
  Post.updateOne(
    { _id: req.params.id, "comments._id": req.body._id },
    { $set: { "comments.$": req.body } },
    { new: true }
  )
    .then((result) =>
      res
        .status(200)
        .json({ message: "Liked the comment successfully", result })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to like the comment", error })
    );
};

const handleUnLikeComment = (req, res) => {
  Post.updateOne(
    { _id: req.params.id, "comments._id": req.body.comments._id },
    { $pull: { "comments.$": req.body } }
  )
    .then((result) =>
      res
        .status(200)
        .json({ message: "Un liked the comment successfully", result })
    )
    .catch((error) =>
      res.status(500).json({ message: "Failed to un like the comment", error })
    );
};

module.exports = {
  createPost,
  deletePost,
  updatePost,
  handleLikePost,
  handleUnLikePost,
  handleAddComment,
  handleUpdateComment,
  handleDeleteComment,
  handleUnLikeComment,
  handleLikeComment,
};
