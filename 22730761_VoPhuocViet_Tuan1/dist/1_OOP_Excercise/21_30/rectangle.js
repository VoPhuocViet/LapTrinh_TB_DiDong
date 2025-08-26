"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}
const rect = new Rectangle(10, 5);
console.log(`Area of rectangle: ${rect.area()}`); // Output: Area of rectangle
