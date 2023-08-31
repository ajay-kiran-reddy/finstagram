const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        comment: {
          type: String,
        },
        commentedBy: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        likes: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],
      },
    ],
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    shares: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
