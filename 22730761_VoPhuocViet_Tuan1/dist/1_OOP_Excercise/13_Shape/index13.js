"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 13. Abstract class Shape, implement Square and Circle
class Shape {
}
class Square extends Shape {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// Demo
const square = new Square(4);
console.log('Square area:', square.area());
const circle = new Circle(3);
console.log('Circle area:', circle.area());
