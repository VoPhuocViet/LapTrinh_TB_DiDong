"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    drive() {
        console.log('Car is driving.');
    }
}
class Bike {
    drive() {
        console.log('Bike is driving.');
    }
}
// Demo
const car = new Car();
car.drive();
const bike = new Bike();
bike.drive();
