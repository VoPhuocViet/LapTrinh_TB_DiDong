// 19. Hàm async fetchUsers(ids) gọi fetchUser cho từng ID
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `User${id}` };
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  return Promise.all(ids.map(fetchUser));
}

// Để chạy thử:
// fetchUsers([1,2,3]).then(console.log);

// Gọi hàm để khi chạy file sẽ in ra kết quả
fetchUsers([1, 2, 3]).then(console.log);
