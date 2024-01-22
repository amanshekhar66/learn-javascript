const accountId = 145;

let accountEmail = "aman@google.com"; // always use let

var accountPassword = "123546"; // do not use var

accountCity = "Jaipur";  // not a good practise

let accountState; // will print undefined if we dont put any value to it and we cant do the same with const
// if we use const, we have to initialize some value to it

// accountId = 5;  not allowed since const value cant be changed

// changing values
accountEmail = "shekhar@google.com";
accountPassword= "25245";
accountCity = "Gurugram"

// consoling them to check what is their value
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); // when we have to print multiple things in a table format
console.log(accountId);

/*
Do not use var because it does not work well with block scope
if there is a same variable outside and we also use that same variable in a particular scope and change 
its value in that scope, the value of the variable which was outside that scope will also get changed
*/