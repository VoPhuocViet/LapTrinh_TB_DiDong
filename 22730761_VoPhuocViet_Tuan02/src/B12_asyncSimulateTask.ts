// 12. Viết hàm async gọi simulateTask(2000) và log kết quả
async function simulateTask(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hoàn thành sau ${ms}ms`);
    }, ms);
  });
}

async function logSimulateTask() {
  const result = await simulateTask(2000);
  console.log(result);
}

// Để chạy thử:
// logSimulateTask();

// Gọi hàm để khi chạy file sẽ in ra kết quả
logSimulateTask();
