"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person"); // import class Person
class Student extends Person_1.Person {
    grade;
    constructor(name, age, grade) {
        super(name, age); // gọi constructor của Person
        this.grade = grade;
    }
    hienThiDayDu() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
exports.Student = Student;
