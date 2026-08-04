export {};

/*
03 - Type Inference and Type Annotation

TypeScript can understand types in two main ways.

1. Type Inference
TypeScript guesses the type automatically from the assigned value.

Example:
let city = "Mashhad";

TypeScript understands:
city is a string.

2. Type Annotation
We explicitly write the type ourselves.

Example:
let age: number = 27;

When should we use annotation?
- Function parameters
- Empty arrays
- Variables without initial values
- Cases where we want more control

When can we trust inference?
- Simple variables with clear initial values
*/

let inferredCity = "Mashhad";
let annotatedAge: number = 27;

// inferredCity = 123;
// Error: Type 'number' is not assignable to type 'string'.

// annotatedAge = "twenty seven";
// Error: Type 'string' is not assignable to type 'number'.

console.log("City:", inferredCity);
console.log("Age:", annotatedAge);

/*
Learning checkpoint:
Type inference keeps the code clean.
Type annotation makes the developer's intention explicit.
*/
