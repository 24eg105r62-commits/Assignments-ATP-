import exp from "express";
import { connect } from "mongoose";
import { ProductApp } from "./APIs/ProductAPi.js";
const app = exp();
app.use(exp.json());
const port = 4001;

async function connectdb() {
  try {
    await connect("mongodb://localhost:27017/productBackend");
    console.log("db connection secured");
    app.listen(port, () => console.log("server is running"));
  } catch (err) {
    console.log(err.message);
  }
}
connectdb();
app.use("/product-api", ProductApp);
