const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
// app.use(logger);

// app.get("/", (req, res) => {
//   res.render("index", { text: "World!" });
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
