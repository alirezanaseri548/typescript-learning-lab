export {};

/*
07 - Tuples and Objects

Tuple:
A tuple is an array with:
1. Fixed length
2. Fixed type for each position
3. Fixed order

Example:
let user: [string, number, boolean];

This means:
Position 0 must be string.
Position 1 must be number.
Position 2 must be boolean.

Objects:
TypeScript can infer object property types.

Example:
const student = {
    name: "Alireza",
    age: 27,
    isActive: true
};

TypeScript understands:
name is string
age is number
isActive is boolean

If we try to assign the wrong type to a property, TypeScript reports an error.
*/

let userTuple: [string, number, boolean];

userTuple = ["Alireza", 27, true];

// userTuple = [27, "Alireza", true];
// Error: wrong order.

// userTuple = ["Alireza", 27];
// Error: missing boolean value.

const student = {
    name: "Alireza",
    age: 27,
    city: "Mashhad",
    isActive: true
};

console.log("Tuple:", userTuple);
console.log("Student name:", student.name);
console.log("Student age:", student.age);
