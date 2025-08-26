"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 14. Base class Employee, extend Manager and Developer
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}
class Manager extends Employee {
    manage() {
        console.log(`${this.name} is managing the team.`);
    }
}
class Developer extends Employee {
    code() {
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
