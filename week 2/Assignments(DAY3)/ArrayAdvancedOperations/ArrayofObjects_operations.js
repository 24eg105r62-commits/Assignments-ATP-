//Test Data :
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

//Tasks:
// 1. Use filter() to get only inStock products
let product = cart.filter((products) => {
  if (products.inStock === true) {
    return products.name;
  }
});
console.log(product);
//  2. Use map() to create a new array with:  { name, totalPrice }
let newarr = cart.map((products) => {
  let obj = {};
  obj.name = products.name;
  obj.totalPrice = products.quantity * products.price;
  return obj;
});
console.log(newarr);
//  3. Use reduce() to calculate grand total cart value
let total = cart.reduce(
  (acc, element) => acc + element.quantity * element.price,
  0,
);
console.log(total);
//  4. Use find() to get details of "Mouse"
let details = cart.find((products) => {
  if (products.name === "Mouse") {
    return products;
  }
});
console.log(details);
//  5. Use findIndex() to find the position of "Keyboard"
let indexofproduct = cart.findIndex((products) => products.name === "Keyboard");
console.log(indexofproduct);
