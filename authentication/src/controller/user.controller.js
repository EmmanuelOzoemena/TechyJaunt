const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
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
    console.error("Error during signup:", error)
    res.status(500).json({ message: "Internal server error" });
  }
};

// const login = async (req, res) => {
//   console.log("Hello");
// };



module.exports = {
  signup,
  // login,
};
