/**
 * Purpose: Demonstrates the behavior of shallow copying objects with nested properties.
 * Key Variables:
 * - user: Original object with a nested 'preferences' object.
 * - user1: A shallow copy of 'user' created using the spread operator.
 * Logic Flow:
 * - Creates 'user1' as a shallow copy.
 * - Modifies a top-level property ('name') and a nested property ('preferences.theme') in 'user1'.
 * - Shows that the top-level modification is independent, but the nested modification affects both objects.
 */
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Create a shallow copy using spread operator
let user1 = { ...user };

// Update top-level property (only affects user1)
user1.name = "Nithish";

// Update nested property (affects both user and user1 due to shared reference)
user1.preferences.theme = "light";

console.log("Original User:", user);
console.log("Copied User1:", user1);
