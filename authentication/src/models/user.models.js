const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const userDetails = mongoose.model("userDetails", userSchema);

module.exports = userDetails;
