"use strict";
// src/asyncHello.ts
Object.defineProperty(exports, "__esModule", { value: true });
function helloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
// Example usage:
helloAsync().then(console.log);
