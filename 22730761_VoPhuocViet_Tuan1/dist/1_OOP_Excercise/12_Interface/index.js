"use strict";
// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
    name;
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying!`);
    }
}
class Fish {
    name;
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is swimming!`);
    }
}
// Demo
const bird = new Bird("Sparrow");
bird.fly();
const fish = new Fish("Goldfish");
fish.swim();
