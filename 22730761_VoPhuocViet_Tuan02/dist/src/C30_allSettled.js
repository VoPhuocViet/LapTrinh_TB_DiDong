"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 30. Dùng async/await + Promise.allSettled để xử lý nhiều API và hiển thị trạng thái
async function fetchTodo(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok)
        throw new Error('Lỗi API');
    return await res.json();
}
async function processAll() {
    const ids = [1, 2, 9999]; // 9999 sẽ fail
    const results = await Promise.allSettled(ids.map(fetchTodo));
    results.forEach((result, idx) => {
        if (result.status === 'fulfilled') {
            console.log(`Todo ${ids[idx]} thành công:`, result.value);
        }
        else {
            console.log(`Todo ${ids[idx]} thất bại:`, result.reason);
        }
    });
}
processAll();
