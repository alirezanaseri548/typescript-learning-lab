export {};

/*
06 - Arrays and Union Types

TypeScript can type arrays.

String array:
let names: string[] = ["Ali", "Sara"];

Number array:
let scores: number[] = [90, 85];

Union type:
A union type means a value can be one of multiple types.

Example:
let id: string | number;

id can be a string or a number.

Union array:
let mixed: (string | number)[] = ["Ali", 27];

The parentheses are important:
(string | number)[] means an array containing strings or numbers.
*/

let studentNames: string[] = ["Ali", "Sara", "Reza"];
let examScores: number[] = [90, 85, 100];

let mixedValues: (string | number)[] = ["Alireza", 27, "Mashhad", 100];

studentNames.push("Farzaneh");
// studentNames.push(123);
// Error: number is not assignable to string.

mixedValues.push("TypeScript");
mixedValues.push(2026);

console.log("Names:", studentNames);
console.log("Scores:", examScores);
console.log("Mixed:", mixedValues);

/*
Learning checkpoint:
Union types make a value flexible but still controlled.
They are safer than using any.
*/
