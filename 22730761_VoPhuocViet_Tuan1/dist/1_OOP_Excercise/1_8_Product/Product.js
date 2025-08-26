"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
// Example usage:
const products = [
    new Product("Pen", 20),
    new Product("Notebook", 120),
    new Product("Bag", 250),
    new Product("Pencil", 10)
];
const expensiveProducts = products.filter(p => p.price > 100);
console.log("Products with price > 100:", expensiveProducts);
