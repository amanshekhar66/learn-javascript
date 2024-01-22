let value = [1,2,3,4,5]

console.log(value.push(6)); // It adds an element at the end of an array
console.log(value.push("Aman")); // In Js, we can create an array and keep different datatypes in it
console.log(value);

console.log(value.pop()); // It removes the last element from the array
console.log(value);

console.log(value.unshift(0)); // It adds the given element in the starting of the array
console.log(value);
/* 
Using unshift is not an optimized way of doing things because if we have an array of 
10000 elements and we use unshift, then every value needs to be shifted to its adjacent
value which will be a long operation to perform
*/

console.log(value.shift()); // It removes the first element 
console.log(value);
console.log("------------------------------------------------------");
console.log();

// slice and splice

let newArr = [0,1,2,3,4,5]

console.log("A", newArr);
console.log(newArr.slice(1,3));

console.log();

console.log(newArr.splice(1,3));
console.log("B", newArr);

/*
In slice,
=> it simply dissects the array from the starting index to the ending index
   ,obviously not including the ending index and return only that portion of the array
=> It does not make any changes to original array 

In splice,
=> Tt simply dissects the array from the starting index to the ending index
   including the ending index and return only that portion of the array
=> It also remove that portion of the array from the original array
*/ 

const myArr = newArr.join(); // It changes the array into string
console.log(myArr);