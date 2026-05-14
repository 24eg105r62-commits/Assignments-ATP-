/**
 * Purpose: Identifies the greatest of three pre-defined numbers.
 * Key Variables:
 * - y, x, z: The numbers to be compared.
 * Logic Flow:
 * - Uses if-else if-else block to compare the values.
 * - Checks if 'y' is greater than both 'x' and 'z'.
 * - Checks if 'x' is greater than both 'y' and 'z'.
 * - If neither, 'z' is considered the greatest.
 */
let y = 100;
let x = 200;
let z = 300;
if (y > x && y > z) {
  console.log("y is greatest");
} else if (x > y && x > z) {
  console.log("x is greatest");
} else {
  console.log("z is greatest");
}
