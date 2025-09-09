// 13. Xử lý lỗi với try/catch và async/await
async function errorExample() {
  try {
    await Promise.reject(new Error("Có lỗi xảy ra!"));
  } catch (err) {
    console.error("Đã bắt lỗi:", err);
  }
}

// Để chạy thử:
// errorExample();
