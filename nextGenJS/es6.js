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

//~~~~~~~~~~~ CLASSES ~~~~~~~~~~~~~~~~~

//declaring a Human class with a gender property for Person to extend
class Human {
    constructor() {
        this.gender = undefined;
    }
    printGender(){
        console.log(this.gender);
    }
}

//declaring a person class, using a constructor to define properties and a method that logs class properties
class Person extends Human{
    constructor(){
        super();
        this.name = 'Justin'
        this.age = 26
        this.gender = 'Male'
    }
    describePerson() {
        console.log(this.name, this.age);
    }
}
//creating an instance in the personObject const
const personObject = new Person();
personObject.describePerson();
personObject.printGender();

//the NEWEST JS syntax allows for even less code to declare a class.
//NO constructor or this keyword & using arrow functions for the methods
class Animal {
    name = undefined;
    age = undefined;

    printName = () => this.name;
}

class Dog extends Animal{
    name = 'Woody';
    age = 12;
    breed = 'Frenchie';

    printBreed = () => this.breed;
}
const pet = new Dog();
console.log(pet.printName());
console.log(pet.printBreed());

//~~~~~~~~~~~~ SPREAD and REST ~~~~~~~~~~~

//using the ... spread operator you can add all the elements of an old array to a new one, and add additional elements
let numArray = [1,2,3];

let newNumArray = [...numArray,4,5]
console.log(newNumArray);

//using a spread operator with an object. It takes all the properties from the array named after the three dots and adds them to the new object
const car = {
    make: 'Nissan'
};

const newCar = {
    ...car,
    model: 'Rogue'
};
console.log(newCar);


//REST operators are used to merge a list of function parameters into one array. It's a place holder for an unknown or changing amount of parameters
const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1,2,3,1,3,5,1,3,1));

//~~~~~~~~~~~~ DESTRUCTURING ~~~~~~~~~~~~
// const numberArray = [1,2,3,4,5];
// [num1, num2] = numberArray;
// console.log(num1, num2);


//~~~~~~~~~~~~ Primitive vs Reference ~~~~~~~~~~~~~~~~
//Primitive: Strings, numbers, boolean
// Copying a primitive type stores the ACTUAL value in the new copy
let myNum = 1;
let newNum = myNum;
//newNum now holds the value of 1

//Reference: Objects, Arrays
//if I copy a reference type I am ONLY copying the pointer that points to that specific object
//defining the tree object
const tree = {
    type: 'oak'
}
//assigning newTree the value of tree (but it's only assigning the pointer to the object not the object values)
const newTree = tree;
//so if we change the type property and then log newTree we will see 'cedar' because newTree value is only a pointer to the original object
tree.type = 'cedar';
console.log(newTree);



//what we can do is use the spread operator to actually make a copy of a reference type
const building = {
    color: 'pink',
    stories: 3
};

const tallBuilding = {
    ...building
}

