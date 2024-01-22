
function login (username = "Aman"){ // we have given a default value to the username in case no value gets assigned to it
    if(!username){ // if(username === undefined)
        console.log("Please enter an username");
        return;
    }
    return `Welcome ${username}, you are logged in !`
}

// const user = login(); // It does not get called this way
// console.log(user); // It will use Aman as username

const user = login("Hitesh"); // It does not get called this way
console.log(user);

//----------------------------------------------------------------------------------------------------------------------

// Rest operator

function getCartItemsPrice (...num1){ 
    return num1
}

const itemValue = getCartItemsPrice(500,100,200,1000)
console.log(itemValue); // [500,100,200,1000]

/*
=> Spread and rest operator are written in the same manner, its their usecase that differentiate them
=> In the above example, the rest operator is used to combine all the given values in an array
*/

function getItemsPrice (val1,val2,...num1){ 
    return num1
}

const itemValues = getItemsPrice(500,100,200,1000)
console.log(itemValues); // [200,1000]

//------------------------------------------------------------------------------------------------------------

// Passing objects as parameters

const newUser = {
    username: "Aman Shekhar",
    password : "aman@666"
}

function getObject(myObj){
    return `Your username is ${myObj.username} and your password is ${myObj.password}`
}

// console.log(getObject(newUser)); 

console.log(getObject({   // can pass the object directly
    username: "Hiteshh Choudhary",
    password : "hitesh@666"
}));

//---------------------------------------------------------------------------------------------

// Passing array as parameters

function passArr(arr){
    return arr[1]
}

console.log(passArr([5,10,5,2]));

