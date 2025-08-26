"use strict";
// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
Object.defineProperty(exports, "__esModule", { value: true });
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
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}
class Cat extends Animal {
    meow() {
        console.log(`${this.name} meows: Meow!`);
    }
}
// Demo
const dog = new Dog("Rex");
dog.speak();
dog.bark();
const cat = new Cat("Mimi");
cat.speak();
cat.meow();
