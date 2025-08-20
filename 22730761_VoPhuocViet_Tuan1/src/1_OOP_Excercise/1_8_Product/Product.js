"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
// Example usage:
var products = [
    new Product("Pen", 20),
    new Product("Notebook", 120),
    new Product("Bag", 250),
    new Product("Pencil", 10)
];
var expensiveProducts = products.filter(function (p) { return p.price > 100; });
console.log("Products with price > 100:", expensiveProducts);
