const people = ["Greg", "Mary", "Devon", "James"];
//1. Write the command to remove "Greg" from the array.
console.log(people);

// remove 1 element at index 0 
const removed = people.splice(0,1);
console.log(people);
//console.log(typeof(removed));


//2. Write the command to remove "James" from the array.
 //remove 1 element at index -1
const people2 = ["Greg", "Mary", "Devon", "James"];
console.log(people2);
const removeJames = people2.splice(-1,1);
console.log(people2);

//Write the command to add "Matt" to the front of the array

const people3 = ["Greg", "Mary", "Devon", "James"];
console.log(people3);
people3.unshift("Matt");
console.log(people3);

//4.. Write the command to add your name to the end of the array

let names = ["Greg", "Mary", "Devon", "James"]
console.log(names);
names.push("Muhamad");
console.log(names);

//5. Write the command to make a copy of the array using a
//slice. The copy should NOT include "Mary" or "Matt".

let names2 = ["Greg", "Mary", "Devon", "James"]
console.log(names2.splice(1,1));
console.log(names2);


//6. Write the command that gives the indexOf where "Mary" is located

  let Mary = ["Greg", "Mary", "Devon", "James"]

  console.log(Mary.indexOf("Mary"));


// 7. Write the command that gives the indexOf where "Foo" is located. What is returning? Why?
// expected output is -1 since Foo does not exist within the array elements 
console.log(Mary.indexOf("Foo"));


/*8. Redefine the people variable with the value you started
with. Using the splice command, remove "Devon" from the array and add and "Artie". Your array should look like this when you are
done ["Greg", "Mary", "Elizabeth", "Artie",
"James"].*/

let Redefine = ["Greg", "Mary", "Devon", "James"];
// Remove 1 element at index 2, and insert "Artie"
console.log(Redefine.splice(2,1,"Elizabith","Artie"));
console.log(Redefine);


//9. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withNoBob = ["Greg", "Mary", "Devon", "James"];
let withBob =  withNoBob + "Bob";

console.log(withBob);