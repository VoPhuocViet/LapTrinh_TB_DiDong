"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 17. Dùng for await...of để duyệt mảng Promise
async function forAwaitOfExample() {
    const promises = [tripleAfter1Sec(1), tripleAfter1Sec(2), tripleAfter1Sec(3)];
    for await (const result of promises) {
        console.log("for await...of:", result);
    }
}
async function tripleAfter1Sec(n) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n * 3;
}
// Để chạy thử:
// forAwaitOfExample();
