const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const userRoutes = require("./src/routes/user.routes")

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Home route
app.get("/", (req, res) => {
  res.send("I dey aktive!");
});


app.get("/api/user", userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database");
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
