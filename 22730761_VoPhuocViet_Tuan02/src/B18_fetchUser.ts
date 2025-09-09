// 18. Hàm async fetchUser(id) giả lập API trả về user sau 1s
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `User${id}` };
}

// Để chạy thử:
// fetchUser(1).then(console.log);

// Gọi hàm để khi chạy file sẽ in ra kết quả
fetchUser(1).then(console.log);
