/**
 * Purpose: Demonstrates cloning an array and adding elements using the spread operator.
 * Key Variables:
 * - fruits: The original array of fruits.
 * - morefruits: A new array containing elements of 'fruits' plus "orange".
 */
let fruits = ["apple", "banana"];

// Expand 'fruits' into a new array and add a new element
let morefruits = [...fruits, "orange"];

console.log("Original Fruits:", fruits);
console.log("Expanded Fruits List:", morefruits);
