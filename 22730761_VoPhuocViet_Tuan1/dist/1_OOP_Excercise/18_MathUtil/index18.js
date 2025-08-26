"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 18. Static class MathUtil
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0)
            throw new Error('Cannot divide by zero');
        return a / b;
    }
}
// Demo
console.log(MathUtil.add(2, 3));
console.log(MathUtil.subtract(5, 2));
console.log(MathUtil.multiply(3, 4));
console.log(MathUtil.divide(10, 2));
