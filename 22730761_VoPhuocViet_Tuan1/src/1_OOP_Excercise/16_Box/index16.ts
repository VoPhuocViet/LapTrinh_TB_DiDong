// 16. Generic class Box
class Box<T> {
    constructor(private value: T) {}
    getValue(): T {
        return this.value;
    }
    setValue(val: T): void {
        this.value = val;
    }
}

// Demo
const numberBox = new Box<number>(123);
console.log(numberBox.getValue());
const stringBox = new Box<string>('Hello');
console.log(stringBox.getValue());
