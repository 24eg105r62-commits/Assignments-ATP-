/**
 * Purpose: Searches for a target value in an array and returns its index.
 * Key Variables:
 * - arr: The array to be searched.
 * - target: The value to look for.
 * Logic Flow:
 * - Iterates through the array using a for loop.
 * - Checks if the current element matches the target.
 * - Returns the index if found, otherwise returns "not found" after checking all elements.
 */
function arrSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return "not found";
}

// Example usage: Search for the value 5 in the array
let arr = [1, 2, 3, 4, 5];
console.log(arrSum(arr, 5));
