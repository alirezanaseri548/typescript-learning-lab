function greet(this: { name: string }, message: string) {
  return message + ", " + this.name;
}

const user = { name: "Alireza" };

const boundGreet: OmitThisParameter<typeof greet> = greet.bind(user);

console.log(boundGreet("Hello"));
