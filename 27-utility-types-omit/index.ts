type DatabaseUser = {
  id: number
  name: string
  email: string
  passwordHash: string
}

type SafeUser = Omit<DatabaseUser, "passwordHash">

const safeUser: SafeUser = {
  id: 1,
  name: "Alireza",
  email: "alirezanaseri369@gmail.com",
}

console.log(safeUser)

/*
Lesson:
Omit<T, K> creates a new type by removing selected properties from T.
It is useful for hiding sensitive fields.
*/
