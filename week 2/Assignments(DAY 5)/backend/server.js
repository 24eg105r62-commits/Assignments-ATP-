/**
 * Purpose: A RESTful API server using Express to manage users and products.
 * Key Variables:
 * - app: Express application instance.
 * - users, products: In-memory arrays acting as data stores.
 * Logic Flow:
 * - Initializes Express and JSON middleware.
 * - Defines CRUD (Create, Read, Update, Delete) routes for '/users' and '/products'.
 * - Uses route parameters (:id, :brand) for fetching/deleting specific items.
 * - Listens on port 9999.
 */
import exp from "express";
const app = exp();

// Middleware to parse JSON request bodies
app.use(exp.json());

const port = 9999;
app.listen(port, () => console.log("Server running on port " + port));

// In-memory data storage
let users = [];
let products = [];

// --- User Routes ---

// Get all users
app.get("/users", (req, res) => {
  res.json({ message: "These are users data", payload: users });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  let userId = Number(req.params.id);
  let user = users.find((u) => u.id === userId);
  if (!user) {
    return res.json({ message: "User not found" });
  }
  return res.json({ message: "User found", payload: user });
});

// Update user
app.put("/users", (req, res) => {
  let modifiedUser = req.body;
  let index = users.findIndex((u) => u.id === modifiedUser.id);
  if (index === -1) {
    return res.json({ message: "User not found" });
  }
  users.splice(index, 1, modifiedUser);
  return res.json({ message: "User updated" });
});

// Create user
app.post("/users", (req, res) => {
  let newUser = req.body;
  users.push(newUser);
  res.json({ message: "User created" });
});

// Delete user by ID
app.delete("/users/:id", (req, res) => {
  let userId = Number(req.params.id);
  let index = users.findIndex((u) => u.id === userId);
  if (index === -1) {
    return res.json({ message: "User not found" });
  }
  users.splice(index, 1);
  return res.json({ message: "User deleted" });
});

// --- Product Routes ---

// Get all products
app.get("/products", (req, res) => {
  res.json({ message: "These are products data", payload: products });
});

// Get product by brand
app.get("/products/:brand", (req, res) => {
  let brand = req.params.brand;
  let product = products.find((p) => p.brand === brand);
  if (!product) {
    return res.json({ message: "Product not found" });
  }
  return res.json({ message: "Product found", payload: product });
});

// Create product
app.post("/products", (req, res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Product created" });
});

// Update product
app.put("/products", (req, res) => {
  let modifiedProduct = req.body;
  let index = products.findIndex((p) => p.id === modifiedProduct.id);
  if (index === -1) {
    return res.json({ message: "Product not found" });
  }
  products.splice(index, 1, modifiedProduct);
  return res.json({ message: "Product updated" });
});

// Delete product by ID
app.delete("/products/:id", (req, res) => {
  let productId = Number(req.params.id);
  let index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    return res.json({ message: "Product not found" });
  }
  products.splice(index, 1);
  return res.json({ message: "Product deleted" });
});
