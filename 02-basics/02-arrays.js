
const marvel_heroes = ["thor", "ironman", "black widow"]
const dc_heroes = ['batman', 'superman', 'flash']

// marvel_heroes.push(dc_heroes); // It make changes to the original array
console.log(marvel_heroes); // It add dc_heroes as a single element
console.log();

const all_heroes = marvel_heroes.concat(dc_heroes) // It does not make any changes to the original array
console.log(all_heroes); // concat solves push problem but spread is used mostly
console.log();

// Better way of adding one array to another is using spread operator
const all_hero = [...marvel_heroes,...dc_heroes]
console.log(all_hero);
/*
Spread operator splits all the foundamental elements like a glass spread
into pieces when it falls on the ground
*/

console.log();

//------------------------------------------------------------------------------------------

// flat
const another_array = [1,2,3,[4,5,6],[7,8,[9,10]]]

// const new_another_array = another_array.flat(1); // In input, we give the depth
// console.log("A", new_another_array);

// const real_another_array = another_array.flat(2);
// console.log("B", real_another_array);

const final_another_array = another_array.flat(Infinity); // We can simply give the depth as infinity and it will split out every element
console.log("C", final_another_array);
/*
flat method splits the element of the array that is present in an array as individual 
and add them to the main array as individual elements and it does the splitting based
on the value of depth we give it
*/

console.log();
//------------------------------------------------------------------------------------------------

console.log(Array.isArray("Aman")); // checks whether Aman is an array or not

console.log(Array.from("Aman")); // splits the string into array

console.log(Array.from({name:"Aman"})); // interesting
/*
interesting case because we havent specified that how we want to make array, could be of keys or of values
*/

let a = 100;
let b = 200;
let c= 300;
console.log(Array.of(a,b,c)); // It adds these value in the form of an array

