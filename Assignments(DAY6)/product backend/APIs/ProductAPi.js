import exp from "express";
import { ProductModel } from "../model/ProductModel.js";
const ProductApp = exp.Router();

//to Create an product and save it to database
ProductApp.post("/product", async (req, res) => {
  try {
    const NewProduct = req.body;
    const ProductDocument = new ProductModel(NewProduct);
    await ProductDocument.save();
    return res.status(201).json({ message: "Product Created" });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "error occured", reason: err.message });
  }
});

//to read all the producst present in the databse
ProductApp.get("/product", async (req, res) => {
  let Productlist = await ProductModel.find();
  if (!Productlist) {
    return (res.status(404), json({ message: "Products not found" }));
  }
  res.status(200).json({ message: "Products Found 👍", payload: Productlist });
});

//to read product by id
ProductApp.get("/product/:id", async (req, res) => {
  let productid = req.params.id;
  let Productlist = await ProductModel.findById(productid);
  if (!Productlist) {
    return (res.status(404), json({ message: "Product not found" }));
  }
  res.status(200).json({ message: "Product Found 👍", payload: Productlist });
});

//to update the product details
ProductApp.put("/product/:id", async (req, res) => {
  try {
    let productid = req.params.id;
    let UpdatedProduct = req.body;
    let Productlist = await ProductModel.findOneAndUpdate(
      {
        productId: productid,
      },
      { $set: { ...UpdatedProduct } },
      { new: true },
    );
    if (!Productlist) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Found 👍", payload: Productlist });
  } catch (err) {
    console.log(err.message);
  }
});
//to delete by given id
ProductApp.delete("/product/:id", async (req, res) => {
  try {
    let pid = req.params.id;
    let deletedproduct = await ProductModel.findByIdAndDelete(pid);
    if (!deletedproduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product Deleted" });
  } catch (err) {
    return res.json({ message: err.message });
  }
});

export { ProductApp };
