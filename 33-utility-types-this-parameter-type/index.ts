function printUser(this: { name: string; age: number }, prefix: string) {
  console.log(prefix + " " + this.name + " (" + this.age + ")");
}

type PrintUserThis = ThisParameterType<typeof printUser>;

const currentUser: PrintUserThis = {
  name: "Alireza",
  age: 27
};

printUser.call(currentUser, "User:");
