const exampleObject = {
  prop1: "Dave",
  prop2: true,
}

const person: {
  name: string
  age: number
  active: boolean
} = {
  name: "Alireza",
  age: 27,
  active: true,
}

console.log(exampleObject)
console.log(person)

/*
Lesson:
TypeScript can infer object property types from assigned values.
*/
