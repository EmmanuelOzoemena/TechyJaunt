const express = require("express");
const { add, subtract, multiply, divide } = require('./sum');
const app = express();
const port = 4000;

// homepage route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});

app.get('/add', (req, res) => {
    const {a, b} = req.body;
    const sum = add(a, b);
    res.json(`The sum of ${a} and ${b} is ${sum}`);
});

app.get('/subtract', (req, res) => {
    const {a, b} = req.body;
    const difference = subtract(a, b);
    res.json(`The difference between ${a} and ${b} is ${difference}`);
});

app.get('/multiply', (req, res) => {
    const {a, b} = req.body;
    const product = multiply(a, b);
    res.json(`The product of ${a} and ${b} is ${product}`);
});

app.get('/divide', (req, res) => {
    const {a, b} = req.body;
    const quotient = divide(a, b);
    res.json(`The quotient of ${a} and ${b} is ${quotient}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
