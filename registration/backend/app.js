require("dotenv").config();
const express = require("express");
const cors = require("cors")
const morgan = require("morgan");
const mongoose = require("mongoose");
// const RegDetails = require("./models/register.model");
const app = express();
const registerRoutes = require("./routes/register.routes");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.use("/api/register", registerRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Database connection
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
    console.log("Connection failed");
  });
