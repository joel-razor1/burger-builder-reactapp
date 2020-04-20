//___________________LET and CONST__________________________________

//use let for variable values
//use const for constant values

//Example of using let
let myName = "Max";
console.log(myName);

//showing that let value can be changed.
myName = "Manu";
console.log(myName);

//Example of using const
const myNameconst = "Max";
console.log(myName);

//showing that const value cannot be changed.
myNameconst = "manu"; // this line will throw an error
console.log(myNameconst);

// ___________________________Arrow Function_______________________________

// commonly used so that there will be no more issues with the 'this' keyword

// regular function syntax

function printMyName(name) {
  console.log(name);
}

printMyName("Joel"); //calling the function

//Arrow Function Syntax

const printMyArrowName = name => {
  console.log(name);
};

printMyArrowName("Johnson"); //calling the function

//________________________________Exports and Imports____________________________

//default export
import person from "./person.js";
import prs from "./person.js";
//you can choose the name while importing the file

//named export
import { smth } from "./utility.js";
// in order to import specific items from another JS file use Curly braces.
//name can't be changed like the one shown in the above example

//in order to change  the name, you can alias it by using the keyword 'as'
import { smth as Something } from "utility.js";

// in order to import everything use the '*' for eg:
import * as bundled from "./utility.js";

//___________________________Classes________________________________
//classes are just blueprinnts to Javascript Objects
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super(); // in order to execute the parent class constructor too
    this.name = "Max";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();

//________________________________Classes, Properties & Methods____________________

//ES6 way
constructor(){
    this. myProperty='value'
}

//ES7 way
myProperty='value'

//ES6 way
myMethod(){.....}

//ES7 way
myMethod=()=>{......}

//___________________________________The Spread and Rest Operator_________________________

//The 'spread' and 'rest' operator is used by this symbol '...'
//The spread operator is used to split up array elements OR object properties

const oldArray = [1, 2, 3, 4, 5];
const newArray = [...oldArray, 6, 7, 8];
console.log(newArray);

const oldObject = {
  number: 6,
  name: "Jojo",
  age: 21
};

const newObject = {
  ...oldObject,
  newProp: "I got you bro"
};
console.log(newObject);

//rest is used to merge a list of function arguments in an array
//rest is not used very often
const filter = (...args) => {
  return args.filter(e1 => e1 === 1);
};

console.log(filter(1, 2, 3));

//_________________________________Destructuring_________________________________

//Easily ectract array elements or object properties and store them  in variables

//Array Destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);

//Mapping Functions (Not new Concept though)

const doubleNumArray = numbers.map(num => {
  return num * 2;
});
console.log(doubleNumArray);
