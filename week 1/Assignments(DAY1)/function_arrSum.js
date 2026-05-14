/**
 * Purpose: Calculates the sum of all numeric elements in an array.
 * Key Variables:
 * - arr: The input array of numbers.
 * - sum: Accumulator for the total sum.
 * Logic Flow:
 * - Initializes 'sum' to 0.
 * - Iterates through the array and adds each element to 'sum'.
 * - Returns the final 'sum'.
 */
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example usage: Calculate the sum of elements in [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 5];
console.log(arrSum(arr));
