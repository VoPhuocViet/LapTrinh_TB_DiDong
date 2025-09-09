// 16. Gọi nhiều hàm async song song bằng Promise.all()
async function parallelTriples() {
  const results = await Promise.all([
    tripleAfter1Sec(2),
    tripleAfter1Sec(3),
    tripleAfter1Sec(4),
  ]);
  console.log("Song song:", results);
}

async function tripleAfter1Sec(n: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * 3;
}

// Để chạy thử:
// parallelTriples();

// Gọi hàm để khi chạy file sẽ in ra kết quả
parallelTriples();
