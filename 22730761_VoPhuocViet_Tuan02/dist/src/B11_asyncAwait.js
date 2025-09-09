"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 11. Chuyển đổi bài 1 sang async/await
async function promiseNumberAsync() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
// Đoạn này giúp chạy thử trực tiếp bằng node dist/src/B11_asyncAwait.js
promiseNumberAsync().then((kq) => {
    console.log("Kết quả:", kq);
});
