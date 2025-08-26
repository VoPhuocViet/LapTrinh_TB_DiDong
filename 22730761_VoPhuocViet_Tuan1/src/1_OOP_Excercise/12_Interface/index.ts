// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.

interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly(): void {
    console.log(`${this.name} is flying!`);
  }
}

class Fish implements Swimmable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  swim(): void {
    console.log(`${this.name} is swimming!`);
  }
}

// Demo
const bird = new Bird("Sparrow");
bird.fly();

const fish = new Fish("Goldfish");
fish.swim();
