const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mahi_1993",
  database: "userAuth",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

app.post("/products", (req, res) => {
  const { name, description, price } = req.body;
  const sql =
    "INSERT INTO products (name, description, price) VALUES (?, ?, ?)";
  db.query(sql, [name, description, price], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Error adding product" });
    }
    res.status(200).send({ message: "Product added successfully" });
  });
});
// Get all products
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send({ message: "Error fetching products" });
    }
    res.status(200).send(results);
  });
});

// Delete a product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Error deleting product" });
    }
    res.status(200).send({ message: "Product deleted successfully" });
  });
});

// Register endpoint
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Error registering user" });
    }
    res.status(200).send({ message: "User registered successfully" });
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).send({ message: "Error logging in" });
    if (results.length === 0) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const user = results[0];
    if (password !== user.password) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    res.status(200).send({ message: "Login successful", userId: user.id });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
