require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const RegDetails = require("./models/loan.model");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Getting all details
app.get("/api/reg-details", async (req, res) => {
  try {
    const details = await RegDetails.find({});
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting a unique id
app.get("/api/reg-details/:id", async (req, res) => {
  try {
    const id = req.params;
    const details = await RegDetails.find(id);
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Registring
app.post("/api/register", async (req, res) => {
  try {
    const register = await RegDetails.create(req.body);
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Database connection
mongoose
  .connect("databaseURL")
  .then(() => {
    console.log("Connected to the database");
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
