/**
 * Purpose: This script calculates the total sum of an array of marks.
 * Key Variables:
 * - marks: An array containing numeric values (marks).
 * - sum: An accumulator variable to store the total sum.
 * Logic Flow:
 * - Iterates through the 'marks' array using a for loop.
 * - Adds each element to the 'sum' variable.
 * - Outputs the final sum to the console.
 */
let marks = [90, 78, 65, 98];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log("The sum of marks is " + sum);
