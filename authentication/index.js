const express = require("express");
const cors = require("cors");
const app = express();
// const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = require("./src/config/db");
require("dotenv").config();

const userRoutes = require("./src/routes/user.routes");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

connectDB();

// Home route
app.get("/", (req, res) => {
  res.send("I dey aktive!");
});

app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
