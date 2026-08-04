export {};

/*
05 - Function Basics

In TypeScript, we can type:
1. Function parameters
2. Function return values

Example:
function sum(a: number, b: number): number {
    return a + b;
}

a: number means the first parameter must be a number.
b: number means the second parameter must be a number.
: number after the parentheses means the function returns a number.

void:
void means the function does not return a useful value.

Example:
function logMessage(message: string): void {
    console.log(message);
}

TypeScript can often infer return types.
But writing return types can make learning and large codebases clearer.
*/

function sum(a: number, b: number): number {
    return a + b;
}

function logMessage(message: string): void {
    console.log(message);
}

const totalScore = sum(10, 20);

logMessage("Total score: " + totalScore);
