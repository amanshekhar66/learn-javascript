// There are two types of memory => stack and heap

// Stack memory => primitive data

/*
In the below example, when we assign anothername to youtubename, the actual youtubename
does not get assigned to it but only its copy and that is why when we made to changes to 
anothername , the value of youtubename did not change
 */

let youtubename = "Aman Shekhar"
let anothername = youtubename;
anothername = "Chai aur code"
console.log(youtubename);
console.log(anothername);

// -----------------------------------------------------------------------------------------------------------------------

// heap => Reference data type

/*
In the below example, the value of myobj gets stored in heap memory and the variable myobj was 
pointing at that value. When we make newobj equal to myobj, newobj also started pointing at that same 
value and so when we changed the email of newobj, the email of myobj also got changed as both were pointed
at the same value
*/

let myobj = {
    email:"aman@google.com",
    upi:"aman@ybl"
}
let newobj = myobj;
newobj.email = "new@google.com"
console.log(myobj.email);
console.log(newobj.email);

