"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 24. Hàm async gửi POST request tới test API
async function postData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
    });
    const data = await res.json();
    console.log(data);
}
postData();
