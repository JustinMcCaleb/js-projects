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