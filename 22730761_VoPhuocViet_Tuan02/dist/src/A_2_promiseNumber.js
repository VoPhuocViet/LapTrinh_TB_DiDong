"use strict";
// src/A_2_promiseNumber.ts
Object.defineProperty(exports, "__esModule", { value: true });
function promiseNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
// Example usage:
promiseNumber().then(console.log);
