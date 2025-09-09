"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: `User${id}` };
}
async function fetchUsers(ids) {
    return Promise.all(ids.map(fetchUser));
}
// Để chạy thử:
// fetchUsers([1,2,3]).then(console.log);
// Gọi hàm để khi chạy file sẽ in ra kết quả
fetchUsers([1, 2, 3]).then(console.log);
