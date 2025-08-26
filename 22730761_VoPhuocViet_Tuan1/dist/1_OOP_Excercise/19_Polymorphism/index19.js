"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 19. Method overriding using polymorphism with Animal and subclasses
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks!`);
    }
}
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows!`);
    }
}
// Demo
const animals = [new Dog('Rex'), new Cat('Mimi')];
for (const animal of animals) {
    animal.speak();
}
