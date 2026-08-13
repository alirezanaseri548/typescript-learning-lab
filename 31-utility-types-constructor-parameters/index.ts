class Product {
  constructor(
    public title: string,
    public price: number,
    public inStock: boolean
  ) {}
}

type ProductConstructorParams = ConstructorParameters<typeof Product>;

const productArgs: ProductConstructorParams = ["Keyboard", 2500, true];

const product = new Product(...productArgs);

console.log(product);
