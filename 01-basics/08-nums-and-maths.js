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


// ---------------------------------------***-----------------------------------------------------------------------------------------

console.log(Math);

console.log(Math.abs(-4)); // It changes the negative sign to postive and leave positive as positive

console.log(Math.round(4.5)) // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.ceil(4.5)); // 5

console.log(Math.max(4,5,7,9,10)); // 10
console.log(Math.min(4,5,7,9,10)); // 4

console.log(Math.random());

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max-min +1) + min)); 
/*
max - min => Range of values
+1 => to avoid zero value in ase of 0.04 type
+ min => To get the values in the range of 10 and 20
*/
