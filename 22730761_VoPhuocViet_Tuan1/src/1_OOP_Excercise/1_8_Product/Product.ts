export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Example usage:
const products: Product[] = [
  new Product("Pen", 20),
  new Product("Notebook", 120),
  new Product("Bag", 250),
  new Product("Pencil", 10)
];
const expensiveProducts = products.filter(p => p.price > 100);
console.log("Products with price > 100:", expensiveProducts);
