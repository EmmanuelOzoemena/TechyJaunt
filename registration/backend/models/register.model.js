const mongoose = require("mongoose");

const RegistrationSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },

    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email address"],
    },

    gender: {
      type: String,
      required: false,
    },

    dob: {
      type: String,
      required: false,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const RegDetails = mongoose.model("RegDetails", RegistrationSchema);

module.exports = RegDetails;
