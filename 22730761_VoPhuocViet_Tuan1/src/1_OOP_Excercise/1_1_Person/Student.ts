
import { Person } from "./Person";  // import class Person

export class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);  // gọi constructor của Person
        this.grade = grade;
    }

    hienThiDayDu(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
