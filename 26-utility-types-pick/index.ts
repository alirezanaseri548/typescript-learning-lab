type FullUser = {
  id: number
  name: string
  email: string
  passwordHash: string
  createdAt: string
}

type PublicUser = Pick<FullUser, "id" | "name" | "email">

const publicUser: PublicUser = {
  id: 1,
  name: "Alireza",
  email: "alirezanaseri369@gmail.com",
}

console.log(publicUser)

/*
Lesson:
Pick<T, K> creates a new type by selecting specific properties from T.
*/
