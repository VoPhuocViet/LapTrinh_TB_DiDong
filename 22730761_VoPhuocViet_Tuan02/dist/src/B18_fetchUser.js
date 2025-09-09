"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: `User${id}` };
}
// Để chạy thử:
// fetchUser(1).then(console.log);
// Gọi hàm để khi chạy file sẽ in ra kết quả
fetchUser(1).then(console.log);
