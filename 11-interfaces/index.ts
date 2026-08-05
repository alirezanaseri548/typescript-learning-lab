interface Guitarist {
  name: string
  active: boolean
  albums: (string | number)[]
}

const player: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["Led Zeppelin I", "Led Zeppelin II", 1971],
}

console.log(player)

/*
Lesson:
Interfaces define object contracts and are often preferred for extensible object shapes.
*/
