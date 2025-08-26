// 19. Method overriding using polymorphism with Animal and subclasses
class Animal {
    constructor(public name: string) {}
    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks!`);
    }
}

class Cat extends Animal {
    speak(): void {
        console.log(`${this.name} meows!`);
    }
}

// Demo
const animals: Animal[] = [new Dog('Rex'), new Cat('Mimi')];
for (const animal of animals) {
    animal.speak();
}
