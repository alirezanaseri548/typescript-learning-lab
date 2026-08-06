type Status = "draft" | "published" | "archived" | "deleted"

type VisibleStatus = Exclude<Status, "deleted">
type FinalStatus = Extract<Status, "published" | "archived">

const visible: VisibleStatus = "published"
const final: FinalStatus = "archived"

console.log(visible)
console.log(final)

/*
Lesson:
Exclude<T, U> removes matching union members.
Extract<T, U> keeps matching union members.
*/
