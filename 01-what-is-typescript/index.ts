export {};

/*
01 - What is TypeScript?

TypeScript is JavaScript with syntax for types.

Main idea:
JavaScript is flexible, but it does not check types before running.
TypeScript adds a type system on top of JavaScript.

TypeScript helps developers:
1. Find mistakes earlier
2. Get better autocomplete
3. Understand code structure more clearly
4. Write safer JavaScript

Important:
Browsers and Node.js run JavaScript, not TypeScript directly.
So TypeScript code must be compiled to JavaScript.

Flow:
TypeScript file (.ts) -> TypeScript compiler -> JavaScript file (.js)
*/

let username: string = "Alireza";

// This is not allowed because username must stay a string.
// username = 25;

console.log("Username:", username);
