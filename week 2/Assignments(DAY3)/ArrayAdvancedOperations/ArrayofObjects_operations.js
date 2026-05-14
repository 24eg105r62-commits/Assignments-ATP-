/**
 * Purpose: Manages a shopping cart using array operations.
 * Key Variables:
 * - cart: Array of product objects.
 * Logic Flow:
 * - Filters products that are in stock.
 * - Maps to a simplified object with name and total price per item.
 * - Reduces to calculate the grand total.
 * - Searches for specific product details and index.
 */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

// 1. Use filter() to get only inStock products
let inStockProducts = cart.filter((item) => item.inStock === true);
console.log("In-Stock Items:", inStockProducts);

// 2. Use map() to create a new array with: { name, totalPrice }
let summary = cart.map((item) => {
  return {
    name: item.name,
    totalPrice: item.quantity * item.price
  };
});
console.log("Cart Summary:", summary);

// 3. Use reduce() to calculate grand total cart value
let grandTotal = cart.reduce(
  (acc, item) => acc + item.quantity * item.price,
  0,
);
console.log("Grand Total:", grandTotal);

// 4. Use find() to get details of "Mouse"
let mouseDetails = cart.find((item) => item.name === "Mouse");
console.log("Mouse Details:", mouseDetails);

// 5. Use findIndex() to find the position of "Keyboard"
let keyboardIndex = cart.findIndex((item) => item.name === "Keyboard");
console.log("Keyboard Index:", keyboardIndex);
