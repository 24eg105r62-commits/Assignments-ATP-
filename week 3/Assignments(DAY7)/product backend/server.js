/**
 * Purpose: Main entry point for the Product Backend application.
 * Key Variables:
 * - app: Express application instance.
 * - port: The port number (4001) on which the server listens.
 * Logic Flow:
 * - Imports necessary modules (Express, Mongoose for MongoDB, and the Product API routes).
 * - Connects to a local MongoDB instance using an asynchronous function 'connectdb'.
 * - Upon successful database connection, starts the Express server.
 * - Routes all requests starting with '/product-api' to the 'ProductApp' router.
 */
import exp from "express";
import { connect } from "mongoose";
import { ProductApp } from "./APIs/ProductAPi.js";

const app = exp();

// Middleware to parse JSON bodies
app.use(exp.json());

const port = 4001;

/**
 * Asynchronously connects to MongoDB and starts the server.
 */
async function connectdb() {
  try {
    // Connect to the local MongoDB database 'productBackend'
    await connect("mongodb://localhost:27017/productBackend");
    console.log("Database connection secured");

    // Start listening for requests only after DB connection is successful
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
}

// Initialize database connection
connectdb();

// Delegate product-related routes to the ProductApp router
app.use("/product-api", ProductApp);
