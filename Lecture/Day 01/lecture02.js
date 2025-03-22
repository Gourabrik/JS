//Let:-
let fullName= "John Doe";
//we use let to declare a variable
//using let variables can not be re-declared but can be updated, 
// so a variable can be assigned a new value
// so it a block scope variable
let age= 25;
let totalAmount= 100.50;
let isPaid= true;
console.log(fullName);

//Const:-
const PI = 3.14;
//we use const to declare a variable
//using const variables can not be re-declared and can not be updated,
// so a variable can not be assigned a new value
// so it a block scope variable
console.log(PI);
// Output: 3.14

//Var:-
var name= "John Doe";
//we use var to declare a variable
//using var variables can be re-declared and can be updated,
// so a variable can be assigned a new value
// so it a global scope variable
console.log(name);
// Output: John Doe

//but var is very old and not used in modern javascript (used before 2015)