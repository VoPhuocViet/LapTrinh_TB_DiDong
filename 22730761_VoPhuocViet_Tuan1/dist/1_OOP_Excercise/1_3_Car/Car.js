"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
const car1 = new Car("Toyota", "Camry", 2022);
car1.showInfo();
