function createError(message: string): never {
  throw new Error(message)
}

function checkValue(value: string | number): string {
  if (typeof value === "string") return value
  if (typeof value === "number") return value.toString()
  return createError("Invalid value type")
}

console.log(checkValue("hello"))
console.log(checkValue(123))

/*
Lesson:
never is used for functions that never successfully finish, such as throwing errors.
*/
