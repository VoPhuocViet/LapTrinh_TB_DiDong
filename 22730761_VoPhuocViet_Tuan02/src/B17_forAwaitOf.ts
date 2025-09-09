// 17. Dùng for await...of để duyệt mảng Promise
async function forAwaitOfExample() {
  const promises = [tripleAfter1Sec(1), tripleAfter1Sec(2), tripleAfter1Sec(3)];
  for await (const result of promises) {
    console.log("for await...of:", result);
  }
}

async function tripleAfter1Sec(n: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * 3;
}

// Để chạy thử:
// forAwaitOfExample();

// Gọi hàm để khi chạy file sẽ in ra kết quả
forAwaitOfExample();
