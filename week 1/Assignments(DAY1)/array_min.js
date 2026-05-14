let mar = [90, 78, 65, 98];
let min = mar[0]; // First element
for (let i = 1; i < mar.length; i++) {
  if (mar[i] < min) {
    // Finds minimum
    min = mar[i];
  }
}
console.log("The minimum mark is " + min); // Prints minimum
