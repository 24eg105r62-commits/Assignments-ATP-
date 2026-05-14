/**
 * Purpose: Demonstrates how to clone an object and add new properties using the spread operator.
 * Key Variables:
 * - user: The original user object.
 * - updatedUser: A new object containing all properties of 'user' plus an 'age' property.
 * Logic Flow:
 * - Uses the spread operator to expand 'user' properties into 'updatedUser'.
 * - Appends 'age: 25' to the new object.
 */
let user = {
  name: "Ravi",
  city: "Hyderabad",
};

// Create a new object with existing properties and a new 'age' property
let updatedUser = { ...user, age: 25 };

console.log("Original User:", user);
console.log("Updated User:", updatedUser);
