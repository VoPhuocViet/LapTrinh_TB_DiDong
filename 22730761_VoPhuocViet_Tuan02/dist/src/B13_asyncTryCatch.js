"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 13. Xử lý lỗi với try/catch và async/await
async function errorExample() {
    try {
        await Promise.reject(new Error("Có lỗi xảy ra!"));
    }
    catch (err) {
        console.error("Đã bắt lỗi:", err);
    }
}
// Để chạy thử:
// errorExample();
// Gọi hàm để khi chạy file sẽ in ra kết quả
errorExample();
