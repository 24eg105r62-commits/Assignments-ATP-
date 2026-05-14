function arrSum(arr, target) { // Finds target index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return "not found";
}
let arr = [1, 2, 3, 4, 5]; // Input array
console.log(arrSum(arr, 5)); // Prints index
