//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Tasks:
//1. filter() temperatures above 35
let temp = temperatures.filter((element) => {
  if (element > 35) {
    return element;
  }
});
console.log(temp);
// 2. map() to convert all temperatures from Celsius → Fahrenheit
let temp2 = temperatures.map((element) => element * (9 / 5) + 32);
console.log(temp2);

//3. reduce() to calculate average temperature
let avg1 = temperatures.reduce((acc, element) => (acc + element) / 2);
console.log(avg1);
//4. find() first temperature above 40
let temp3 = temperatures.find((element) => element > 40);
console.log(temp3);

//5. findIndex() of temperature 28
let temp4 = temperatures.findIndex((element) => element === 28);
console.log(temp4);
