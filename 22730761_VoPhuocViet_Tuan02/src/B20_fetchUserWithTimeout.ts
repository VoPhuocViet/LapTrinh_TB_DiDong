// 20. Thêm timeout: nếu API lâu hơn 2s thì báo lỗi
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `User${id}` };
}

async function fetchUserWithTimeout(id: number): Promise<User> {
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
