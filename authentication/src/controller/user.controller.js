const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Checking if all fields are filled
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Checking if the user exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    // Hashing users password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Checking if all fields are filled
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Checking if the user exist in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Checking if the user's password is correct
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Checking if the email is filled
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Checking if the user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generating OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    user.otp = otp;
    await user.save();

    return res.status(200).json({ message: "OTP sent successfully", otp });
  } catch (error) {
    console.error("Error during forget password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const resetPassword = async (req, res) => {
  const { otp, newPassword } = req.body;

  try {
    // Checking if OTP and new password fields are filled.
    if (!otp || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Confirming / Checking if the user exist
    const user = await User.findOne({ otp });
    if (!user) {
      return res.status(404).json({ message: "Invalid OTP" });
    }

    // Update user (new) password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.otp = null;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error during reset password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signup,
  login,
  forgetPassword,
  resetPassword
};
