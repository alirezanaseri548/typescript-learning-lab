export {};

/*
04 - any, unknown, and Type Safety

The 'any' type means:
TypeScript, do not check this value. It can be anything.

That sounds flexible, but it is dangerous.

When we use 'any', TypeScript loses type information.

What does losing type information mean?

It means TypeScript no longer knows whether a value is:
- string
- number
- boolean
- object
- array
- function

So TypeScript cannot protect us from wrong operations.

Example:
let data: any = 123;
data.toUpperCase();

TypeScript allows it because data is any.
But at runtime, JavaScript fails because numbers do not have toUpperCase().

unknown is safer than any.

unknown means:
I do not know the type yet, so I must check it before using it.

Generic is better than any when we want flexibility and type safety.

any:
- flexible
- unsafe
- loses type information

generic:
- flexible
- safe
- keeps type information
*/

let unsafeData: any = 123;

// TypeScript allows this, but it would crash at runtime.
// unsafeData.toUpperCase();

let safeData: unknown = "hello";

// TypeScript does not allow this directly.
// safeData.toUpperCase();

if (typeof safeData === "string") {
    console.log("Uppercase:", safeData.toUpperCase());
}

function identityAny(value: any): any {
    return value;
}

const anyResult = identityAny("hello");

// anyResult is any, so TypeScript has lost exact information.
anyResult.toUpperCase();

function identityGeneric<T>(value: T): T {
    return value;
}

const genericString = identityGeneric("hello");
const genericNumber = identityGeneric(123);

// TypeScript knows the exact types here.
console.log(genericString.toUpperCase());
console.log(genericNumber.toFixed(2));

/*
Learning checkpoint:
Avoid any when possible.
Use unknown when the value is uncertain and needs runtime checking.
Use generics when the type should be preserved.
*/
