let mar = [90, 78, 65, 98];
let min = mar[0]; //taking first element as minimum
for (let i = 1; i < mar.length; i++) {
  if (mar[i] < min) {
    //comparing each element
    min = mar[i];
  }
}
console.log("The minimum mark is " + min); //printing the min mark
