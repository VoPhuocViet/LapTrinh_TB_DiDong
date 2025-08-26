// 14. Base class Employee, extend Manager and Developer
class Employee {
    constructor(public name: string) {}
    work(): void {
        console.log(`${this.name} is working.`);
    }
}

class Manager extends Employee {
    manage(): void {
        console.log(`${this.name} is managing the team.`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`${this.name} is writing code.`);
    }
}

// Demo
const manager = new Manager('Alice');
manager.work();
manager.manage();
const dev = new Developer('Bob');
dev.work();
dev.code();
