// 13. Abstract class Shape, implement Square and Circle
abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    constructor(public side: number) { super(); }
    area(): number {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(public radius: number) { super(); }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Demo
const square = new Square(4);
console.log('Square area:', square.area());
const circle = new Circle(3);
console.log('Circle area:', circle.area());
