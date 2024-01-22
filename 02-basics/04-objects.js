// declaring object through constructor

const tinderprofile = new Object();
tinderprofile.name = "Aman Shekhar"
tinderprofile.age = 18
tinderprofile.isLoggedIn = true
console.log(tinderprofile);

// declaring objects in objects

const realuser = {
    username : {
        firstname : "Aman",
        lastname : "Shekhar"
    }
}

console.log(realuser.username.firstname);
console.log(realuser.username?.lastname); // We use '?' to check whether username exists or not

//--------------------------------------------------------------------------------

// Merging two or more objects together

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
console.log({obj1,obj2}); // It will treat each object as whole single element

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
/*
Syntax of Object.assign(target,source) 
Now, we put a {} as an indication to the target and the other things will be treated
as source
*/

const obj4 = {...obj1, ...obj2} // using spread operator => best way to do it
console.log(obj4);

const dataBaseobj = [
    {
        firstname  : "Aman",
        lastname: "Shekhar"
    },
    {
        country_code : +91,
        "phone no" : 8825293045

    }
]
console.log(dataBaseobj[1]["phone no"]);
// This is how you can access an array of objects

//-----------------------------------------------------------------------

console.log(tinderprofile);
console.log(Object.keys(tinderprofile)); // It displays the array of keys of tinderprofile

console.log(Object.values(tinderprofile)); // It displays the array of values of tinderprofile

console.log(Object.entries(tinderprofile)); // It will give every key-value pair as an array inside the main array

console.log(tinderprofile.hasOwnProperty("isLoggedin")); // It checks whether that object has that property or not

//--------------------------------------------------------------------------------------------------------------------

// Object destructuring

const course = {
    name : "Js in hindi",
    coursePrice : "999",
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);

/* 
=> If I have to use a particular property of an object multiple times, instead of keeping on using '.' operator
   I can simply declare in seperately using the above syntax and can use that property directly.
=> I can even name the property to something else as well
*/

//----------------------------------------------------------------------------------------

// API are generally in JSON format and that can be multiple objects or an array of objects

// For ex:

// {
//     {},
//     {}
// }

// [
//     {},
//     {}
// ]