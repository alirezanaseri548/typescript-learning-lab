type AppConfig = {
  appName: string
  version: string
  debug: boolean
}

const config: Readonly<AppConfig> = {
  appName: "TypeScript Learning Lab",
  version: "1.0.0",
  debug: false,
}

console.log(config)

/*
Lesson:
Readonly<T> prevents reassignment of object properties.
It is useful for configuration objects.
*/
