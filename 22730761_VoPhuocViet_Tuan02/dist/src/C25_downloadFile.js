"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 25. Hàm downloadFile giả lập tải file trong 3 giây
async function downloadFile() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Tải file xong!');
}
downloadFile();
