"use strict";
//~~~~~~~~~ LET and CONST ~~~~~~~~
//var is the old way to declaring a variable
var myNumber = 5;

//use let to declare a variable that will change in value
let myOtherNumber = 5;

//use const to declare something once and never change the value
const PI = Math.PI;

//this is valid
let myName = 'Justin';
myName = 'Ginger';

//this is not : reassigning lastName is commented out so it does not throw an error
const lastName = 'McCaleb';
// lastName = 'Snap';

// ~~~~~~~~~ ARROW FUNCTIONS ~~~~~~~~~~~

//old way
function printMyNameOldWay(name){
    console.log(name);
}
printMyNameOldWay('Justin - OLD');

//Arrow function - assign it to a const and use updated syntax
const printMyNameNew = (name) => {
    console.log(name);
}
printMyNameNew('Justin - NEW')

//alternate ways to write arrow functions
//if you have ZERO parameters you HAVE to use parenthesis
const sayHello = () => {
    console.log("hello");
}
//if there is only ONE parameter you can omit the parenthesis
const addTwo = num => {
    return num + 2;
}
//if you have MULTIPLE parameters
const person = (name, age) => {
    console.log(name + " is " + age + " years old.");
}
person('justin', 26)

//only having a return statement in the function.
// You OMIT return and the curly brackets
const addThree = number => number + 3;
console.log(addThree(3));