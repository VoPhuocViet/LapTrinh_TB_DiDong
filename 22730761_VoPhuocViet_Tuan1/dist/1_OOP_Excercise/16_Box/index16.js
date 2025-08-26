"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 16. Generic class Box
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(val) {
        this.value = val;
    }
}
// Demo
const numberBox = new Box(123);
console.log(numberBox.getValue());
const stringBox = new Box('Hello');
console.log(stringBox.getValue());
