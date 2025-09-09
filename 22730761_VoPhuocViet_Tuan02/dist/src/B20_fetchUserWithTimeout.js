"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUser(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: `User${id}` };
}
async function fetchUserWithTimeout(id) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error("API quá thời gian cho phép!"));
        }, 2000);
        fetchUser(id)
            .then((user) => {
            clearTimeout(timeout);
            resolve(user);
        })
            .catch(reject);
    });
}
// Để chạy thử:
// fetchUserWithTimeout(1).then(console.log).catch(console.error);
