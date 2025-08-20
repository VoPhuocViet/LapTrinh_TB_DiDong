class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    hienThi (): void{
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

const person1 = new Person("Alice", 25);
person1.hienThi();