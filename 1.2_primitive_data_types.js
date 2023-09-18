/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'

2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4

3. Which of the following is/are booleans?
a) true
b) false

4. What is the result of 80 + 71.2?
a) 151.2

5. What is the result of "80" + 71.2?
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number

7. Does "100" + 30 produce a number or a string?
b)string

*/


//------Submit your answers under the question------//
//create three different ways to declare variables
var x = 10; // function-scoped hoisted i.e x can be called for execution before its decleration
            //  within the code order
console.log(`variable x is declared and assigned value ${x}`)
let y = 11; //block-scoped, reassigned but cannot be redeclared within the same scope (block, function)
console.log(`variable y is declared and assigned value ${y}`)
const z = 12; // block-scoped and cannot be reassigned after they are initialized (constants)
console.log(`constant x is declared and assigned value ${z}`)


//declare a variable and reassign a value to it

let myVariable = "Initial value";
console.log(myVariable);
myVariable = "New value";
console.log(myVariable);




//create a variable and after that assign a string with its value being: He's got it!


let myString;
myString = "He's got it!"; 
console.log(myString)


//1. create a variable and assign a value on how much a restaurant bill is.

  let resturant_bill = 100;

// 2. create a variable and assign a value on how much tax they should pay.

  let tax_rate = 0.17

//3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.

  let bill = `Your total bill is ${resturant_bill + resturant_bill * tax_rate} NIS`  
  console.log(bill);

// Round the number 50.6 to its nearest integer
let roundedNumber = Math.round(50.6);

console.log(roundedNumber); // epecting 51


//Create a variable that is undefined
let myUndefinedVariable;

console.log(myUndefinedVariable);