// There are two types of datatype

// Primitive (call by value)

// Types - String, number, boolean, bigInt, symbol, null, undefined (7 types)

let noVal;
console.log(typeof noVal);

let bigNumber = 5454545454585555555n; // You can make a number bigInt by putting a n at the end 
console.log(typeof bigNumber);

// Symbol makes a value unique even though you pass the same data through it
let val = Symbol('123');
let pass = Symbol('123');
console.log(val === pass); // false

//---------------------------------------------------------------------------------------------------------------------------

// Non primitive data type (reference data type)

// Types - array, object, function

let score = [33,45,25]; 

let myobj = {
    name:"Aman",
    age:21
}
console.log(myobj);

let myfunc = function(){
    console.log("Hello World");
}

console.log(typeof myfunc); // function
console.log(typeof myobj); // object
console.log(typeof score); // object
console.log(typeof null); // object

