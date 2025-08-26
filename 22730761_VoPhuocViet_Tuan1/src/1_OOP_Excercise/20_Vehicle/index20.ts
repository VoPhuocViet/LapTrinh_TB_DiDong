// 20. Vehicle interface, implement in Car and Bike
interface Vehicle {
    drive(): void;
}

class Car implements Vehicle {
    drive(): void {
        console.log('Car is driving.');
    }
}

class Bike implements Vehicle {
    drive(): void {
        console.log('Bike is driving.');
    }
}

// Demo
const car = new Car();
car.drive();
const bike = new Bike();
bike.drive();
