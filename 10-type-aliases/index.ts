type Guitarist = {
  name: string
  active: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
}

console.log(evh)

/*
Lesson:
Type aliases improve readability and reusability for custom shapes.
*/
