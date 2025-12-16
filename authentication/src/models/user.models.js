const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your username"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    otp: {
      type: String,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    otpExpiry: {
      type: Date,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("userDetails", userSchema);

module.exports = User;
