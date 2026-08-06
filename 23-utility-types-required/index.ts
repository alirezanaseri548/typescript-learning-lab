type DraftCourse = {
  title?: string
  duration?: number
  published?: boolean
}

function publishCourse(course: Required<DraftCourse>): string {
  return `${course.title} is published: ${course.published}`
}

const course = publishCourse({
  title: "TypeScript Learning Lab",
  duration: 8,
  published: true,
})

console.log(course)

/*
Lesson:
Required<T> makes all optional properties required.
It is useful before final submission or publishing.
*/
