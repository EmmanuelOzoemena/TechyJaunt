const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "World!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);
