type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  return {
    ...(desc.data || {}),
    ...(desc.methods || {})
  } as D & M;
}

const obj = makeObject({
  data: {
    name: "Alireza",
    age: 27
  },
  methods: {
    introduce() {
      return "I am " + this.name + " and I am " + this.age + " years old.";
    }
  }
});

console.log(obj.introduce());
