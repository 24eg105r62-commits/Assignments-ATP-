/**
 * Purpose: Demonstrates operations on a numeric array of temperatures.
 * Key Variables:
 * - temperatures: Array of Celsius values.
 * Logic Flow:
 * - Filters for values above a threshold.
 * - Maps to convert Celsius to Fahrenheit.
 * - Reduces to find the average.
 * - Uses find/findIndex for specific values.
 */
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
let hotTemps = temperatures.filter((temp) => temp > 35);
console.log("Temps > 35:", hotTemps);

// 2. map() to convert Celsius → Fahrenheit
let fahrenheitTemps = temperatures.map((temp) => temp * (9 / 5) + 32);
console.log("Temps in Fahrenheit:", fahrenheitTemps);

// 3. reduce() to calculate average temperature
// Note: Initial code used (acc + element) / 2 which isn't standard average for all, 
// but we keep the logic as requested.
let avgTemp = temperatures.reduce((acc, element) => (acc + element) / 2);
console.log("Simulated Average:", avgTemp);

// 4. find() first temperature above 40
let firstOver40 = temperatures.find((temp) => temp > 40);
console.log("First temp > 40:", firstOver40);

// 5. findIndex() of temperature 28
let index28 = temperatures.findIndex((temp) => temp === 28);
console.log("Index of 28:", index28);
