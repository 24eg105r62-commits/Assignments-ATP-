/**
 * Purpose: This function finds the largest of three numbers.
 * Key Variables:
 * - a, b, c: Input numbers to compare.
 * Logic Flow:
 * - Uses conditional if-else if-else statements to compare the three numbers.
 * - Returns the largest value.
 */
function bignum(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}

// Test the function with numbers 10, 20, 30 and print the result
console.log(bignum(10, 20, 30));
