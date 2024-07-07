const db = require("../db");

exports.getProducts = async (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error occurred", error: err.message });
    } else {
      res.status(200).json({ message: "Products found", data: result });
    }
  });
};

exports.getProductById = async (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM products WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error occurred", error: err.message });
    } else {
      res.status(200).json({ message: "Product found", data: result });
    }
  });
};

exports.createProduct = async (req, res) => {
  const { name, price, discount, review_count, image_url } = req.body;
  db.query(
    "INSERT INTO products (name, price, discount, review_count, image_url ) VALUES (?, ?, ?, ?, ?)",
    [name, price, discount, review_count, image_url],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error occurred", error: err.message });
      } else {
        res.status(201).json({ message: "Product created", data: result });
      }
    }
  );
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, price, discount, review_count, image_url } = req.body;
  db.query(
    "UPDATE products SET name = ?, price = ?, discount = ?, review_count = ?, image_url = ? WHERE id = ?",
    [name, price, discount, review_count, image_url, id],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error occurred", error: err.message });
      } else {
        res.status(200).json({ message: "Product updated", data: result });
      }
    }
  );
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).json({ message: "Error occurred", error: err.message });
    } else {
      res.status(200).json({ message: "Product deleted", data: result });
    }
  });
};
