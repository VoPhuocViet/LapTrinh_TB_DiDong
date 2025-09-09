"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 29. queueProcess: xử lý tuần tự các tác vụ async
async function asyncTask(id) {
    await new Promise((resolve) => setTimeout(resolve, 1000 * id));
    return `Task ${id} done`;
}
async function queueProcess() {
    const results = [];
    for (let i = 1; i <= 5; i++) {
        results.push(await asyncTask(i));
    }
    console.log(results);
}
queueProcess();
