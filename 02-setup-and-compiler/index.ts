export {};

/*
02 - Setup and Compiler

TypeScript code needs a compiler.

A compiler is a tool that converts TypeScript code into JavaScript code.

Example:
TypeScript:
const message: string = "Hello TypeScript";

Compiled JavaScript:
const message = "Hello TypeScript";

The type annotation ': string' is useful for developers and the TypeScript compiler.
But it disappears after compilation because JavaScript does not have TypeScript types.

Useful commands:
npm install typescript --save-dev
npx tsc --init
npx tsc

Why tsconfig.json matters:
It stores TypeScript compiler settings for the project.
*/

const compilerMessage: string = "Hello TypeScript Compiler";

console.log(compilerMessage);
