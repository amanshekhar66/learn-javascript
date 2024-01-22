let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString()); // It just gives the date in / format
// console.log(myDate.toJSON()); 
console.log(myDate.toLocaleString()); // It gives date and time

 myDate = new Date(2024,11,12); // month's counting starts from zero since it is an array , 11 => 12
console.log(myDate.toLocaleString()); // default time - 12:00:00 AM

myDate = new Date(2023,0,25,5,35,45); // month => January
console.log(myDate.toLocaleString());

myDate = new Date("2023-01-15") // In string, month starts from 1 => January
console.log(myDate.toLocaleDateString());

myDate = new Date("01-15-2024")
console.log(myDate.toLocaleString());

// myDate = new Date("15-01-2024") // Invalid date
// console.log(myDate.toLocaleString());

let timestamp = Date.now()
console.log(timestamp); // It gives the number of millisecond that has happened from the default date in js which is 17th Jan, 1970
console.log(Math.floor(timestamp/1000)); // converting milliseconds into seconds

console.log(myDate.getMonth() + 1); // getMonth() => gives the month starting from 0 as Jan and so we add 1 to make it easy for the user

console.log(myDate.toLocaleString('default', {              // we can set the toLocaleString fnc based on our needs as well
    month:"numeric"
}));

