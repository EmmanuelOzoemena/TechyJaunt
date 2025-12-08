const express = require("express");
const app = express();
const port = 3001;

// Lesson 1 - Server

// about route
app.get("/about", (req, res) => {
  res.send("This is my about section");
});

// me route (return json)
app.get("/me", (req, res) => {
  res.json({
    name: "Emmanuel Ozoemena",
    message: "I'm learning backend with Node.js + Express",
  });
});

// Lesson 2 - Understanding Routes and building a mini API (GET, POST, PUT, DELETE)

// GET - Fetch all users
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Emmanuel" },
    { id: 2, name: "Blessing" },
  ]);
});

// POST - Add a new user
app.post("/users", (req, res) => {
  res.send("User created successfully");
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
  res.send(`User with id ${req.params.id} updated successfully`);
});

// DELETE - Remove a user
app.delete("/users/:id", (req, res) => {
  res.send(`User with id ${req.params.id} deleted successfully`);
});

app.listen(port, () => {
  console.log("Server is running on port 3001");
});
