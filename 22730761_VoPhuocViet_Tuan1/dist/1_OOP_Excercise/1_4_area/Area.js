"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    showInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`);
    }
}
const rect1 = new Rectangle(5, 10);
rect1.showInfo();
