type UserProfile = {
  id: number
  name: string
  email: string
  isActive: boolean
}

function updateUser(user: UserProfile, changes: Partial<UserProfile>): UserProfile {
  return {
    ...user,
    ...changes,
  }
}

const user: UserProfile = {
  id: 1,
  name: "Alireza",
  email: "alirezanaseri369@gmail.com",
  isActive: true,
}

const updatedUser = updateUser(user, {
  isActive: false,
})

console.log(updatedUser)

/*
Lesson:
Partial<T> makes all properties of T optional.
It is useful for update functions.
*/
