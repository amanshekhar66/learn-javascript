const value = "Aman Shekhar"
let age = 21
console.log(`My name is ${value} and I am age is ${age} years old`);

let name = new String("Aman Shekhar") // way to declare string

// String methods

console.log(name.toUpperCase());

console.log(name.length);

console.log(name.substring(0,4)) // It does take negative value but treat them as zero and so no use !

console.log(name.slice(-10,3)) // It takes negative values and act on them

console.log(name.charAt(5)); // It gives the character at the given index

console.log(name.indexOf("S")); // It gives the index of the given character

let movie = "     Anjaana Si  "
console.log(movie.trim()); // It removes all the spaces at the beginning and at the end and not of the middle of characters

let url ="https://amanshekhar.com/aman  shekhar"
console.log(url.replace('  ',('-'))); // It replaces the input character with the given character

let serial = "12-45-78-125"
console.log(serial.split("-")); // It splits the string into an array based on the given character which acts as the spliting endpoint