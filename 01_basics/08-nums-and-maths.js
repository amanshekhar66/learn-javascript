let value = 100;
console.log(value); // o/p => 100

let score = new Number(100);
console.log(score); // o/p => [Number: 100]

// Mehtods in Number

console.log(score.toString().length); // It converts the number to string

console.log(score.toFixed(1)); // It add the number of zeroes after the decimal => 100.0

console.log(score.toPrecision(3)); // o/p => 100
console.log(score.toPrecision(4)); // o/p => 100.0
let newVal = 123.896
console.log(newVal.toPrecision(3)); // o/p => 124
console.log(newVal.toPrecision(4)); // o/p => 123.9
console.log(newVal.toPrecision(2)); // 1.2e+2 => The idea is that it considers the number before decimal and precise it

let money = 100000000;
console.log(money.toLocaleString('en-In')); // It adds comma in between numbers to make it more readable
