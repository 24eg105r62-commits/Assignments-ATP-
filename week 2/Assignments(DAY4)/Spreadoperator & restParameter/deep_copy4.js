/**
 * Purpose: Demonstrates deep copying of objects using structuredClone.
 * Key Variables:
 * - order: A complex object with nested structures and arrays.
 * - order1: A deep copy of the 'order' object.
 * Logic Flow:
 * - Uses 'structuredClone' to create a completely independent copy of 'order'.
 * - Modifies nested properties in 'order1'.
 * - Demonstrates that the original 'order' remains unchanged, unlike a shallow copy.
 */
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

// Create a deep copy
let order1 = structuredClone(order);

// Modifying nested properties in the clone
order1.customer.address.city = "chennai";
order1.items[0].price = 10000;

console.log("Original Order (stays unchanged):", order);
console.log("Deep Copied Order1 (modified):", order1);
