// Ways to declare objects

// singleton => object.create
//When we create an object through a constructor, its a singleton

const mysym = Symbol("key1")
// console.log(typeof mysym);

// Through literal
const JsUser = {
    name: "Aman",
    "full name" : "Aman Shekhar",
    [mysym] : "mykey", // Syntax of how to declare symbol in object
    age: 22,
    email: "aman@google.com",
    city: "Gurugram"
}
//The key could be of any data type

console.log(JsUser.email);

console.log(JsUser["email"]);
console.log(JsUser["age"]); 
/*
It is a better way to do it because using '.' has its limitations
On using brackets, you have to mention the key in the datatype in which it gets stored even the value in it is of different
datatype
*/

console.log(JsUser["full name"]); // can't acess full name key using '.' => limitation

console.log(JsUser[mysym]); // calling the symbol
console.log();

// console.log(JsUser);

JsUser["email"] = "aman@chatgpt.com"
console.log(JsUser);
// Object.freeze(JsUser) // It freezes the object which means that you can't make any changes in the object
JsUser.email = "aman@microsoft.com"
console.log(JsUser);

JsUser.greetingsTwo = () => {
    console.log(`Hello Js user`);
}

JsUser.greetings = function(){
    console.log(`Hello Js user, ${this.name}`); // You cannot use this keyword with arrow fnc
}

console.log(JsUser.greetings());

console.log(JsUser["greetingsTwo"]()); // using brackets to call fnc

