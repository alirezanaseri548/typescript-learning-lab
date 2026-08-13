class Car {
  constructor(
    public brand: string,
    public year: number
  ) {}
}

type CarInstance = InstanceType<typeof Car>;

const myCar: CarInstance = new Car("Toyota", 2020);

console.log(myCar);
