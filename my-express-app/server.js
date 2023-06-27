const express = require("express");
const app = express();

app.use(express.json());

// Sample list of items
let items = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 200 },
  { id: 3, name: "Item 3", price: 300 },
];

// GET /items
app.get("/items", (req, res) => {
  res.json(items);
});

// POST /items
app.post("/items", (req, res) => {
  const { name, price } = req.body;
  const id = items.length + 1;
  const newItem = { id, name, price };
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items/:id
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

// PUT /items/:id
app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  let item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  item.name = name;
  item.price = price;
  res.json(item);
});

// DELETE /items/:id
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }
  const deletedItem = items.splice(index, 1)[0];
  res.json(deletedItem);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
