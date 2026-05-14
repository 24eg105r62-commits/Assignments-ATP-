function arrSum(arr) { // Sums array
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Accumulates sum
  }
  return sum; // Returns sum
}
let arr = [1, 2, 3, 4, 5];
console.log(arrSum(arr)); // Prints result
