import { Schema, model } from "mongoose";
const ProductSchema = new Schema(
  {
    productId: {
      type: Number,
      required: [true, "ProductId is required"],
    },
    productName: {
      type: String,
      required: [true, "Product Name is required"],
    },
    price: {
      type: Number,
      min: [10000, "min price is 10000"],
      max: [50000, "max price is 50000"],
    },
    brand: {
      type: String,
      required: [true, "brand of the product is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
//create model for the product Schema
const ProductModel = model("product", ProductSchema);
export { ProductModel };
