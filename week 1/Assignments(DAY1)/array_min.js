/**
 * Purpose: Finds the minimum value in an array of marks.
 * Key Variables:
 * - mar: Array containing the marks.
 * - min: Stores the current minimum value found during iteration.
 * Logic Flow:
 * - Initializes 'min' with the first element of the array.
 * - Loops through the rest of the array.
 * - Updates 'min' if a smaller element is encountered.
 * - Prints the final minimum value.
 */
let mar = [90, 78, 65, 98];
let min = mar[0]; //taking first element as minimum
for (let i = 1; i < mar.length; i++) {
  if (mar[i] < min) {
    //comparing each element
    min = mar[i];
  }
}
console.log("The minimum mark is " + min); //printing the min mark
