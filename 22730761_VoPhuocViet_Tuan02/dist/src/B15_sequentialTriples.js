"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 15. Gọi nhiều hàm async tuần tự bằng await
async function sequentialTriples() {
    const a = await tripleAfter1Sec(2);
    const b = await tripleAfter1Sec(3);
    const c = await tripleAfter1Sec(4);
    console.log("Tuần tự:", a, b, c);
}
async function tripleAfter1Sec(n) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return n * 3;
}
// Để chạy thử:
// sequentialTriples();
// Gọi hàm để khi chạy file sẽ in ra kết quả
sequentialTriples();
