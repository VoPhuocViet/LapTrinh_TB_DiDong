// 14. Hàm async nhận số, đợi 1s, trả về số × 3
async function tripleAfter1Sec(n: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * 3;
}

// Để chạy thử:
// tripleAfter1Sec(5).then(console.log);

// Gọi hàm để khi chạy file sẽ in ra kết quả
tripleAfter1Sec(5).then(console.log);
