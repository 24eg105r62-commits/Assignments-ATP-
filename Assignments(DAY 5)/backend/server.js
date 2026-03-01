//Create HTTP Server
import exp from "express";
const app = exp();
//use body parser midldeware
app.use(exp.json());

//set port no
const port = 9999;
//assign port no to HTTP Server
app.listen(port, () => console.log("server running"));

//test data
let users = [];

//Create API(REST API-representational state transfer)
//route to handle get request of client
app.get("/users", (req, res) => {
  //read
  res.json({ message: "these are users data", payload: users });
});
//get route by id

app.get("/users/:id", (req, res) => {
  let getuser = Number(req.params.id);
  let index = users.findIndex((user) => user.id === getuser);
  if (index === -1) {
    return res.json({ message: "not found" });
  }
  return res.json({ message: "found", payload: users[index] });
});
//route to handle put request of client
app.put("/users", (req, res) => {
  let modified = req.body;
  let index = users.findIndex((user) => user.id === modified.id);
  if (index === -1) {
    return res.json({ message: "User not found" });
  }
  users.splice(index, 1, modified);
  return res.json({ message: "user updated" });
});
//route to handle post request of client
app.post("/users", (req, res) => {
  let usersnew = req.body;
  users.push(usersnew);
  res.json({ message: "user created" });
});
//route to handle delete request of client
app.delete("/users/:id", (req, res) => {
  let urluser = Number(req.params.id);
  let index = users.findIndex((user) => user.id === urluser);
  if (index === -1) {
    return res.json({ message: "User not found" });
  }
  users.splice(index, 1);
  return res.json({ message: "User deleted" });
});

let products = [];
app.get("/products", (req, res) => {
  //read
  res.json({ message: "these are users data", payload: products });
});
app.get("/products/:brand", (req, res) => {
  let getuser = req.params.brand;
  let index = products.find((product) => product.brand === getuser);
  if (index === undefined) {
    return res.json({ message: "not found" });
  }
  return res.json({ message: "found", payload: index });
});
app.post("/products", (req, res) => {
  let productnew = req.body;
  products.push(productnew);
  res.json({ message: "user created" });
});
app.put("/products", (req, res) => {
  let modified = req.body;
  let index = products.findIndex((product) => product.id === modified.id);
  if (index === -1) {
    return res.json({ message: "User not found" });
  }
  products.splice(index, 1, modified);
  return res.json({ message: "user updated" });
});
app.delete("/products/:id", (req, res) => {
  let urluser = Number(req.params.id);
  let index = products.findIndex((product) => product.id === urluser);
  if (index === -1) {
    return res.json({ message: "User not found" });
  }
  products.splice(index, 1);
  return res.json({ message: "User deleted" });
});
